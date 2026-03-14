import { NextRequest, NextResponse } from "next/server";
import { getCourseById } from "@/lib/mock/courses";

// GET /api/courses/[courseId]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) {
    return NextResponse.json(
      { error: "Không tìm thấy lớp học này", code: "COURSE_NOT_FOUND" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: course });
}
