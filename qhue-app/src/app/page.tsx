export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 px-4">
      {/* Logo placeholder */}
      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg">
        <span className="text-4xl font-bold text-primary-foreground">QH</span>
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Trường THPT Quốc Học Huế
        </h1>
        <p className="text-muted-foreground text-lg">
          Hệ thống quản lý trường học thông minh
        </p>
      </div>

      {/* Status badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        Đang xây dựng…
      </span>
    </main>
  );
}
