import { NextRequest, NextResponse } from "next/server";
import { getCourseById, MOCK_COURSES } from "@/lib/mock/courses";
import {
  getEnrollment,
  addEnrollment,
  getEnrollmentsByStudent,
  getEnrollmentCountByCourse,
} from "@/lib/mock/enrollments";
import type { EnrollmentRequest, Enrollment } from "@/types/course";

// ─── POST /api/enrollments ──────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // Auth check — simulate token validation
    const authHeader = request.headers.get("authorization");
    // If explicit Authorization header is present and invalid, return 401
    if (authHeader !== null && authHeader !== undefined) {
      if (!authHeader.startsWith("Bearer valid-token")) {
        return NextResponse.json(
          {
            error: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
            code: "UNAUTHORIZED",
          },
          { status: 401 }
        );
      }
    }

    let body: EnrollmentRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Request body không hợp lệ", code: "INVALID_BODY" },
        { status: 400 }
      );
    }

    const { courseId, studentId } = body;

    if (!courseId || !studentId) {
      return NextResponse.json(
        { error: "courseId và studentId là bắt buộc", code: "MISSING_FIELDS" },
        { status: 400 }
      );
    }

    // Role check — teacher/admin cannot enroll (TC-13)
    // In mock: only student-* IDs are allowed to enroll
    if (!studentId.startsWith("student-")) {
      return NextResponse.json(
        {
          error: "Tài khoản không có quyền đăng ký lớp học",
          code: "FORBIDDEN",
        },
        { status: 403 }
      );
    }

    // Find course
    const course = getCourseById(courseId);
    if (!course) {
      return NextResponse.json(
        { error: "Không tìm thấy lớp học này", code: "COURSE_NOT_FOUND" },
        { status: 404 }
      );
    }

    // Check: already enrolled (TC-06) — 409 Conflict
    const existing = getEnrollment(studentId, courseId);
    if (existing) {
      return NextResponse.json(
        { error: "Học sinh đã đăng ký lớp này", code: "ALREADY_ENROLLED" },
        { status: 409 }
      );
    }

    // Check: course not open (TC-12) — 422
    if (course.status === "not_open") {
      return NextResponse.json(
        {
          error: "Lớp chưa mở đăng ký",
          code: "NOT_OPEN",
          openDate: course.openDate,
        },
        { status: 422 }
      );
    }

    // Check: course closed — 422
    if (course.status === "closed") {
      return NextResponse.json(
        { error: "Lớp đã đóng đăng ký", code: "CLOSED" },
        { status: 422 }
      );
    }

    // Check: course full (TC-07, TC-08) — 422
    // Use real-time enrolled count (not the mock snapshot) for race condition support
    const currentEnrolled = getEnrollmentCountByCourse(courseId);
    if (currentEnrolled >= course.maxStudents || course.status === "full") {
      return NextResponse.json(
        { error: "Lớp đã đạt sĩ số tối đa", code: "COURSE_FULL" },
        { status: 422 }
      );
    }

    // All checks passed — create enrollment (TC-01)
    const enrollment: Enrollment = {
      enrollmentId: `enroll-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      courseId,
      courseName: course.name,
      studentId,
      enrolledAt: new Date().toISOString(),
      status: "active",
    };

    addEnrollment(enrollment);

    // Mutate the in-memory course enrolledCount
    const courseIndex = MOCK_COURSES.findIndex((c) => c.id === courseId);
    if (courseIndex !== -1) {
      MOCK_COURSES[courseIndex].enrolledCount += 1;
      // Auto-mark full if needed
      if (
        MOCK_COURSES[courseIndex].enrolledCount >=
        MOCK_COURSES[courseIndex].maxStudents
      ) {
        MOCK_COURSES[courseIndex].status = "full";
      }
    }

    return NextResponse.json(
      {
        enrollmentId: enrollment.enrollmentId,
        courseId: enrollment.courseId,
        courseName: enrollment.courseName,
        enrolledAt: enrollment.enrolledAt,
        status: enrollment.status,
      },
      { status: 201 }
    );
  } catch (err) {
    // TC-11: Log server error, return friendly message
    console.error("[POST /api/enrollments] Server error:", err);
    return NextResponse.json(
      {
        error: "Hệ thống đang gặp sự cố. Vui lòng thử lại sau.",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}

// ─── GET /api/enrollments?studentId=xxx ───────────────────────
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get("studentId") || "student-001";

  const enrollments = getEnrollmentsByStudent(studentId);

  return NextResponse.json({ data: enrollments });
}
