import { NextRequest, NextResponse } from "next/server";
import { MOCK_COURSES } from "@/lib/mock/courses";
import type { Course } from "@/types/course";

// GET /api/courses?status=open&keyword=Toán&yearId=2024-2025&page=1
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const status = searchParams.get("status"); // open | full | not_open | closed | all
  const keyword = searchParams.get("keyword") || "";
  const yearId = searchParams.get("yearId") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const pageSize = 12;

  let filtered: Course[] = [...MOCK_COURSES];

  // Filter by status (default: show all)
  if (status && status !== "all") {
    filtered = filtered.filter((c) => c.status === status);
  }

  // Filter by yearId
  if (yearId) {
    filtered = filtered.filter((c) => c.yearId === yearId);
  }

  // Filter by keyword (name, teacher, subject — case-insensitive)
  if (keyword.trim()) {
    const kw = keyword.trim().toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(kw) ||
        c.teacher.toLowerCase().includes(kw) ||
        c.subject.toLowerCase().includes(kw)
    );
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    data: items,
    total,
    page,
    pageSize,
    totalPages,
  });
}
