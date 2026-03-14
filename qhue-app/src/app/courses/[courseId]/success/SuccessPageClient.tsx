"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Enrollment } from "@/types/course";

interface SuccessPageClientProps {
  currentCourseId: string;
  currentCourseName: string;
}

const STUDENT_ID = "student-001";

export default function SuccessPageClient({
  currentCourseId,
  currentCourseName,
}: SuccessPageClientProps) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEnrollments() {
      try {
        const res = await fetch(`/api/enrollments?studentId=${STUDENT_ID}`);
        if (res.ok) {
          const data = await res.json();
          setEnrollments(data.data || []);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    fetchEnrollments();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-border p-4 animate-pulse">
        <div className="h-4 bg-muted rounded w-1/3 mb-3" />
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (enrollments.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm p-6">
      <h2 className="font-semibold text-foreground mb-4">
        💡 Lớp của bạn ({enrollments.length})
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {enrollments.map((enrollment) => {
          const isNew = enrollment.courseId === currentCourseId;
          return (
            <Link
              key={enrollment.enrollmentId}
              href={`/courses/${enrollment.courseId}`}
              className="block p-3 border border-border rounded-lg hover:bg-muted transition-colors text-center"
            >
              <p className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                {enrollment.courseName}
              </p>
              {isNew ? (
                <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                  🟢 Mới ĐK
                </span>
              ) : (
                <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                  ▶ Đang học
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
