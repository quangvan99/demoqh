"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Course } from "@/types/course";
import EnrollButton from "@/components/courses/EnrollButton";

interface CourseDetailClientProps {
  course: Course;
}

const STUDENT_ID = "student-001";
const STUDENT_NAME = "Nguyễn Văn A";
const STUDENT_CLASS = "12A1";

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const router = useRouter();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check enrollment status from API (which checks the mock store)
  useEffect(() => {
    async function checkEnrollment() {
      try {
        const res = await fetch(`/api/enrollments?studentId=${STUDENT_ID}`);
        if (res.ok) {
          const data = await res.json();
          const enrollments: { courseId: string }[] = data.data || [];
          const enrolled = enrollments.some((e) => e.courseId === course.id);
          setIsEnrolled(enrolled);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    checkEnrollment();
  }, [course.id]);

  const handleCancel = () => {
    router.push("/courses");
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-border shadow-sm p-6 animate-pulse">
        <div className="h-4 bg-muted rounded w-1/2 mb-3" />
        <div className="h-10 bg-muted rounded" />
      </div>
    );
  }

  // Already enrolled: show "Vào học" state instead of enroll form
  if (isEnrolled) {
    return (
      <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          ✅ Trạng thái đăng ký
        </h2>
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm mb-4">
          <span>🎉 Bạn đã đăng ký lớp này thành công</span>
        </div>
        <Link
          href={`/courses/${course.id}/success`}
          className="block w-full text-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Vào học
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        📝 Xác nhận đăng ký
      </h2>
      <div className="bg-muted/50 rounded-lg p-4 mb-4 text-sm space-y-1.5">
        <div>
          <span className="text-muted-foreground">Bạn đang đăng ký lớp: </span>
          <strong>{course.name}</strong>
        </div>
        <div>
          <span className="text-muted-foreground">Học sinh: </span>
          <strong>{STUDENT_NAME} — Lớp {STUDENT_CLASS}</strong>
        </div>
      </div>

      {/* Similar courses suggestion when full (TC-07) */}
      {course.status === "full" && course.similarCourseIds && course.similarCourseIds.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          <p className="font-medium mb-1">Gợi ý lớp tương tự:</p>
          <div className="flex flex-wrap gap-2">
            {course.similarCourseIds.map((id) => (
              <Link
                key={id}
                href={`/courses/${id}`}
                className="underline hover:no-underline"
              >
                {id}
              </Link>
            ))}
          </div>
        </div>
      )}

      <EnrollButton
        course={course}
        studentId={STUDENT_ID}
        isAlreadyEnrolled={isEnrolled}
        onCancelClick={handleCancel}
      />
    </div>
  );
}
