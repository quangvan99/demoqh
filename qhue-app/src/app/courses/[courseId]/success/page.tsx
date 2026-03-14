import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/courses/Header";
import SuccessPageClient from "./SuccessPageClient";
import type { Course } from "@/types/course";

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

export default async function SuccessPage({ params }: PageProps) {
  const { courseId } = await params;

  let course: Course | null = null;
  try {
    course = await fetchCourse(courseId);
  } catch {
    // ignore
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold mb-2">Không tìm thấy lớp học</h1>
          <Link href="/courses" className="text-primary underline">
            Quay lại danh sách lớp
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header notificationCount={1} />

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:underline">Trang chủ</Link>
          <span className="mx-2">›</span>
          <Link href="/courses" className="hover:underline">Lớp học</Link>
          <span className="mx-2">›</span>
          <Link href={`/courses/${courseId}`} className="hover:underline">{course.name}</Link>
        </nav>

        {/* Success content */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Đăng ký thành công!
          </h1>
          <p className="text-foreground text-lg mb-1">
            Bạn đã tham gia lớp{" "}
            <strong className="text-primary">{course.name}</strong>
          </p>
          <p className="text-muted-foreground text-sm">
            Giáo viên: {course.teacher}
          </p>
          <p className="text-muted-foreground text-sm">
            Buổi học đầu tiên: {course.firstSessionDate}
          </p>
        </div>

        {/* CTAs */}
        <div className="bg-white rounded-xl border border-border shadow-sm p-6 mb-8">
          <h2 className="font-semibold text-foreground mb-4">
            📋 Tiếp theo bạn có thể:
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/courses/${courseId}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              📖 Vào học ngay
            </Link>
            <Link
              href={`/courses/${courseId}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors text-sm"
            >
              📅 Xem lịch học
            </Link>
            <Link
              href="/courses"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors text-sm"
            >
              🔍 Đăng ký lớp khác
            </Link>
          </div>
        </div>

        {/* "Lớp của bạn" section — loaded client side */}
        <SuccessPageClient currentCourseId={courseId} currentCourseName={course.name} />
      </div>
    </div>
  );
}
