import Link from "next/link";

interface LoginPageProps {
  searchParams: Promise<{ redirect?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const sp = await searchParams;
  const redirect = sp.redirect || "/courses";

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-xl border border-border shadow-md p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-primary-foreground">QH</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Đăng nhập</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.
          </p>
        </div>

        {/* Mock login form — just redirects back */}
        <form action={redirect} method="GET" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Tên đăng nhập
            </label>
            <input
              type="text"
              defaultValue="student001"
              className="w-full px-3 py-2 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              defaultValue="password"
              className="w-full px-3 py-2 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Đăng nhập
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link href="/courses" className="text-sm text-primary underline">
            Quay lại danh sách lớp
          </Link>
        </div>

        <p className="mt-3 text-xs text-center text-muted-foreground">
          Redirect sau đăng nhập: <code className="bg-muted px-1 rounded">{redirect}</code>
        </p>
      </div>
    </main>
  );
}
