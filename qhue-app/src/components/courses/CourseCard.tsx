import Link from "next/link";
import type { Course } from "@/types/course";
import CourseStatusBadge from "./CourseStatusBadge";
import { BookOpen, User, Calendar, Users, Monitor } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const LEARNING_MODE_LABEL: Record<string, string> = {
  online: "Trực tuyến",
  offline: "Trực tiếp",
  hybrid: "Trực tuyến + Trực tiếp",
};

export default function CourseCard({ course }: CourseCardProps) {
  const remaining = course.maxStudents - course.enrolledCount;

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col p-5 gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-5 h-5 text-primary shrink-0" />
          <h3 className="font-semibold text-foreground leading-tight line-clamp-2">
            {course.name}
          </h3>
        </div>
        <CourseStatusBadge status={course.status} openDate={course.openDate} />
      </div>

      {/* Meta info */}
      <div className="space-y-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 shrink-0" />
          <span>GV: {course.teacher}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 shrink-0" />
          <span>
            {course.startDate} – {course.endDate}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 shrink-0" />
          <span>
            {course.enrolledCount}/{course.maxStudents} học sinh
            {course.status === "open" && remaining > 0 && (
              <span className="ml-1 text-green-600 font-medium">
                (còn {remaining} chỗ)
              </span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 shrink-0" />
          <span>{LEARNING_MODE_LABEL[course.learningMode] ?? course.learningMode}</span>
        </div>
      </div>

      {/* Action */}
      <div className="mt-auto pt-2">
        <Link
          href={`/courses/${course.id}`}
          className="block w-full text-center px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}
