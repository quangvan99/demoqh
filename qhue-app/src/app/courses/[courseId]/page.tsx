import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/courses/Header";
import CourseStatusBadge from "@/components/courses/CourseStatusBadge";
import CourseDetailClient from "./CourseDetailClient";
import type { Course } from "@/types/course";
import {
  User,
  Calendar,
  Clock,
  Monitor,
  Users,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

async function fetchCourse(courseId: string): Promise<Course | null> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/courses/${courseId}`, {
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch course");
  const json = await res.json();
  return json.data;
}

const LEARNING_MODE_LABEL: Record<string, string> = {
  online: "Trực tuyến",
  offline: "Trực tiếp",
  hybrid: "Trực tuyến + Trực tiếp",
};

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params;

  let course: Course | null = null;
  try {
    course = await fetchCourse(courseId);
  } catch {
    // Server error — show a friendly error
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h1 className="text-xl font-bold mb-2">Có lỗi xảy ra</h1>
          <p className="text-muted-foreground mb-4">Không thể tải thông tin lớp học. Vui lòng thử lại.</p>
          <Link href="/courses" className="text-primary underline">Quay lại danh sách lớp</Link>
        </div>
      </div>
    );
  }

  // TC-15: course not found → 404 page
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Không tìm thấy lớp học này
          </h1>
          <p className="text-muted-foreground mb-6">
            Lớp học bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            ← Quay lại danh sách lớp
          </Link>
        </div>
      </div>
    );
  }

  const remaining = course.maxStudents - course.enrolledCount;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:underline">Trang chủ</Link>
          <span className="mx-2">›</span>
          <Link href="/courses" className="hover:underline">Lớp học</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">{course.name}</span>
        </nav>

        {/* Course Detail Card */}
        <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-6">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-primary shrink-0" />
              <h1 className="text-2xl font-bold text-foreground uppercase tracking-wide">
                {course.name}
              </h1>
            </div>
            <CourseStatusBadge
              status={course.status}
              openDate={course.openDate}
              className="text-sm shrink-0"
            />
          </div>

          <hr className="border-border mb-4" />

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div className="flex items-center gap-3 text-sm">
              <User className="w-5 h-5 text-primary shrink-0" />
              <span><span className="text-muted-foreground">Giáo viên:</span> <strong>{course.teacher}</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <span>
                <span className="text-muted-foreground">Thời gian:</span>{" "}
                <strong>{course.startDate} – {course.endDate}</strong>
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <span>
                <span className="text-muted-foreground">Lịch học:</span>{" "}
                <strong>{course.schedule}</strong>
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Monitor className="w-5 h-5 text-primary shrink-0" />
              <span>
                <span className="text-muted-foreground">Hình thức:</span>{" "}
                <strong>
                  {LEARNING_MODE_LABEL[course.learningMode]}
                  {course.room ? ` (${course.room})` : ""}
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Users className="w-5 h-5 text-primary shrink-0" />
              <span>
                <span className="text-muted-foreground">Sĩ số:</span>{" "}
                <strong>{course.enrolledCount} / {course.maxStudents}</strong>
                {course.status === "open" && remaining > 0 && (
                  <span className="ml-1 text-green-600">(còn {remaining} chỗ)</span>
                )}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              📝 Mô tả
            </h2>
            <p className="text-sm text-foreground leading-relaxed">{course.description}</p>
          </div>

          {/* Contents */}
          {course.contents && course.contents.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                📦 Nội dung học
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {course.contents.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enrollment box — client component handles all logic */}
        <CourseDetailClient course={course} />
      </div>
    </div>
  );
}
