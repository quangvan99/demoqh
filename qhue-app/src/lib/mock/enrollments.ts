import type { Enrollment } from "@/types/course";

// ============================================================
// In-memory enrollment store (simulates DB)
// ============================================================

// Key: `${studentId}:${courseId}` → Enrollment
const enrollmentStore = new Map<string, Enrollment>();

// Pre-seed: student-001 already enrolled in vatly-12b and hoahoc-12c
// Used to test TC-02 (Lớp của bạn) and cross-navigation on success page
const SEED_ENROLLMENTS: Enrollment[] = [
  {
    enrollmentId: "enroll-seed-001",
    courseId: "uuid-vatly-12b",
    courseName: "Vật Lý Lý thuyết 12B",
    studentId: "student-001",
    enrolledAt: "2025-08-15T08:00:00.000Z",
    status: "active",
  },
  {
    enrollmentId: "enroll-seed-002",
    courseId: "uuid-hoahoc-12c",
    courseName: "Hóa học Hữu cơ 12C",
    studentId: "student-001",
    enrolledAt: "2025-08-16T09:30:00.000Z",
    status: "active",
  },
];

// Initialize store with seeds
SEED_ENROLLMENTS.forEach((e) => {
  enrollmentStore.set(`${e.studentId}:${e.courseId}`, e);
});

// ── CRUD helpers ──────────────────────────────────────────────

export function getEnrollment(
  studentId: string,
  courseId: string
): Enrollment | undefined {
  return enrollmentStore.get(`${studentId}:${courseId}`);
}

export function addEnrollment(enrollment: Enrollment): void {
  enrollmentStore.set(
    `${enrollment.studentId}:${enrollment.courseId}`,
    enrollment
  );
}

export function getEnrollmentsByStudent(studentId: string): Enrollment[] {
  const result: Enrollment[] = [];
  for (const enroll of enrollmentStore.values()) {
    if (enroll.studentId === studentId && enroll.status === "active") {
      result.push(enroll);
    }
  }
  return result;
}

export function getEnrollmentCountByCourse(courseId: string): number {
  let count = 0;
  for (const enroll of enrollmentStore.values()) {
    if (enroll.courseId === courseId && enroll.status === "active") {
      count++;
    }
  }
  return count;
}

/** Reset store (useful for testing) */
export function resetStore(): void {
  enrollmentStore.clear();
  SEED_ENROLLMENTS.forEach((e) => {
    enrollmentStore.set(`${e.studentId}:${e.courseId}`, e);
  });
}

export { enrollmentStore };
