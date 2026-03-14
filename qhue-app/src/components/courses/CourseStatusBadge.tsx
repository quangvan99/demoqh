"use client";

import type { CourseStatus } from "@/types/course";

interface CourseStatusBadgeProps {
  status: CourseStatus;
  openDate?: string;
  className?: string;
}

const STATUS_CONFIG: Record<
  CourseStatus,
  { label: string; dot: string; bg: string; text: string }
> = {
  open: {
    label: "Đang mở ĐK",
    dot: "🟢",
    bg: "bg-green-100",
    text: "text-green-800",
  },
  full: {
    label: "Hết chỗ",
    dot: "🔴",
    bg: "bg-red-100",
    text: "text-red-800",
  },
  not_open: {
    label: "Chưa mở",
    dot: "⚪",
    bg: "bg-gray-100",
    text: "text-gray-600",
  },
  closed: {
    label: "Đã đóng",
    dot: "🔴",
    bg: "bg-red-100",
    text: "text-red-800",
  },
};

export default function CourseStatusBadge({
  status,
  openDate,
  className = "",
}: CourseStatusBadgeProps) {
  const cfg = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text} ${className}`}
      data-status={status}
      title={
        status === "not_open" && openDate
          ? `Dự kiến mở: ${openDate}`
          : undefined
      }
    >
      <span>{cfg.dot}</span>
      <span>{cfg.label}</span>
    </span>
  );
}
