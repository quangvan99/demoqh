import { Suspense } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import Header from "@/components/courses/Header";
import type { Course, PaginatedResponse } from "@/types/course";

// Force dynamic to always fetch fresh data
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function fetchCourses(params: {
  keyword: string;
  yearId: string;
  status: string;
  page: number;
}): Promise<PaginatedResponse<Course>> {
  const query = new URLSearchParams();
  if (params.keyword) query.set("keyword", params.keyword);
  if (params.yearId) query.set("yearId", params.yearId);
  if (params.status) query.set("status", params.status);
  query.set("page", String(params.page));

  // Use relative URL for server-side fetch — use absolute in SSR
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/courses?${query.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export default async function CoursesPage({ searchParams }: PageProps) {
  const sp = await searchParams;

  const keyword = (sp.keyword as string) || "";
  const yearId = (sp.yearId as string) || "";
  const status = (sp.status as string) || "open";
  const page = parseInt((sp.page as string) || "1", 10);

  let result: PaginatedResponse<Course> | null = null;
  let fetchError = false;

  try {
    result = await fetchCourses({ keyword, yearId, status, page });
  } catch {
    fetchError = true;
  }

  const courses = result?.data ?? [];
  const total = result?.total ?? 0;
  const totalPages = result?.totalPages ?? 1;
  const currentPage = result?.page ?? 1;

  const startItem = total === 0 ? 0 : (currentPage - 1) * 12 + 1;
  const endItem = Math.min(currentPage * 12, total);

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  // Build URL helpers
  const buildUrl = (overrides: Record<string, string>) => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (yearId) params.set("yearId", yearId);
    if (status) params.set("status", status);
    params.set("page", String(page));
    Object.entries(overrides).forEach(([k, v]) => {
      if (v) params.set(k, v);
      else params.delete(k);
    });
    return `/courses?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:underline">Trang chủ</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground font-medium">Lớp học</span>
        </nav>

        <h1 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          📚 Danh sách lớp học
        </h1>

        {/* Search & Filter */}
        <form method="GET" action="/courses" className="bg-white rounded-xl border border-border p-4 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                name="keyword"
                defaultValue={keyword}
                placeholder="Nhập tên lớp, môn học, giáo viên..."
                className="w-full pl-9 pr-4 py-2.5 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
              />
            </div>
            <div className="flex gap-2">
              <select
                name="yearId"
                defaultValue={yearId}
                className="px-3 py-2.5 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
              >
                <option value="">Tất cả năm học</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2025-2026">2025-2026</option>
              </select>
              <select
                name="status"
                defaultValue={status}
                className="px-3 py-2.5 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
              >
                <option value="open">Đang mở ĐK</option>
                <option value="all">Tất cả trạng thái</option>
                <option value="full">Hết chỗ</option>
                <option value="not_open">Chưa mở</option>
              </select>
              <input type="hidden" name="page" value="1" />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <Filter className="w-4 h-4" />
                <span>Tìm kiếm</span>
              </button>
            </div>
          </div>
        </form>

        {/* Error */}
        {fetchError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-4">
            Không thể tải danh sách lớp học. Vui lòng thử lại.
          </div>
        )}

        {/* Empty state (TC-14) */}
        {!fetchError && courses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-border">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Không tìm thấy lớp học phù hợp
            </h2>
            <p className="text-muted-foreground mb-4">
              Thử thay đổi từ khóa hoặc bộ lọc để tìm lớp học khác.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Xóa bộ lọc
            </Link>
          </div>
        )}

        {/* Course grid */}
        {!fetchError && courses.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Hiển thị {startItem}–{endItem} / {total} lớp
              </p>
              <div className="flex items-center gap-1">
                <Link
                  href={isFirstPage ? "#" : buildUrl({ page: String(currentPage - 1) })}
                  aria-disabled={isFirstPage}
                  className={`flex items-center justify-center w-9 h-9 rounded-lg border text-sm font-medium transition-colors ${
                    isFirstPage
                      ? "border-border text-muted-foreground cursor-not-allowed bg-muted pointer-events-none"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Link>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={buildUrl({ page: String(p) })}
                    className={`flex items-center justify-center w-9 h-9 rounded-lg border text-sm font-medium transition-colors ${
                      p === currentPage
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {p}
                  </Link>
                ))}

                <Link
                  href={isLastPage ? "#" : buildUrl({ page: String(currentPage + 1) })}
                  aria-disabled={isLastPage}
                  className={`flex items-center justify-center w-9 h-9 rounded-lg border text-sm font-medium transition-colors ${
                    isLastPage
                      ? "border-border text-muted-foreground cursor-not-allowed bg-muted pointer-events-none"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
