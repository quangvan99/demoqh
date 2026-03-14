import Link from "next/link";
import Header from "@/components/courses/Header";

export default function CourseNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Không tìm thấy lớp học này
        </h2>
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
