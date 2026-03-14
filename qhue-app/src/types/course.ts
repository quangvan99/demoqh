// ============================================================
// TypeScript Types — Course Enrollment Feature
// ============================================================

export type CourseStatus = "open" | "full" | "not_open" | "closed";

export type LearningMode = "online" | "offline" | "hybrid";

export interface Course {
  id: string;
  name: string;
  subject: string;
  teacher: string;
  yearId: string; // e.g. "2024-2025"
  startDate: string; // ISO date string
  endDate: string;
  schedule: string; // e.g. "Thứ 3, Thứ 5 — 07:00-08:30"
  firstSessionDate: string; // human-readable first session date
  learningMode: LearningMode;
  room?: string;
  maxStudents: number;
  enrolledCount: number;
  status: CourseStatus;
  openDate?: string; // when status is not_open
  description: string;
  contents: string[];
  similarCourseIds?: string[];
}

export interface Enrollment {
  enrollmentId: string;
  courseId: string;
  courseName: string;
  studentId: string;
  enrolledAt: string; // ISO datetime string
  status: "active" | "cancelled";
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  error: string;
  code?: string;
}

export interface EnrollmentRequest {
  courseId: string;
  studentId: string;
}
