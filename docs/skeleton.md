---
title: "Skeleton — THPT Quốc Học Huế"
updated: 2026-03-14
goal: "Docker chạy được + homepage hiển thị đúng design token"
stack: "Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui"
---

# 🦴 Project Skeleton — THPT Quốc Học Huế

> **Mục tiêu giai đoạn này:** `docker compose up` → mở `localhost:3000` thấy homepage.
> Chưa có feature nào. Chưa có auth. Chưa có API call. Chỉ cần **build được + render được**.

---

## 📁 Cấu trúc thư mục

```
qhue-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (html + body + font)
│   │   ├── page.tsx            # Homepage — placeholder "Quốc Học Huế"
│   │   └── globals.css         # Tailwind base + CSS vars (design token)
│   └── components/
│       └── ui/                 # shadcn/ui components (auto-generated, để trống)
│
├── public/
│   └── logo.svg                # Logo trường (placeholder)
│
├── tailwind.config.ts          # Copy từ design_token/08
├── components.json             # shadcn/ui config
├── next.config.ts              # Next.js config (standalone output cho Docker)
├── tsconfig.json               # TypeScript config (tự sinh bởi create-next-app)
├── package.json
│
├── Dockerfile                  # Multi-stage build (node:20-alpine)
├── docker-compose.yml          # dev + prod profiles
└── .env.example                # Biến môi trường mẫu
```

---

## 🐳 Docker

### `Dockerfile`

```dockerfile
# ── Stage 1: deps ──────────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ── Stage 2: builder ───────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ── Stage 3: runner ────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Next.js standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

### `docker-compose.yml`

```yaml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env.local
    restart: unless-stopped
```

### `next.config.ts` — bắt buộc cho standalone

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",   // ← cần thiết để Docker chạy được
};

export default nextConfig;
```

---

## 🎨 Design Token — `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ── Brand (Quốc Học Huế — teal) ── */
    --primary:            168 85% 25%;   /* brand-700  #0F766E */
    --primary-foreground: 0   0%  100%;
    --secondary:          173 80% 40%;   /* brand-500  #14B8A6 */
    --background:         166 100% 97%;  /* brand-50   #F0FDFA */
    --foreground:         174 61%  19%;  /* brand-900  #134E4A */
    --muted:              166 30%  92%;
    --muted-foreground:   174 20%  45%;
    --destructive:        0   72%  51%;  /* error      #DC2626 */
    --border:             168 20%  85%;
    --ring:               168 85%  25%;
    --radius:             0.5rem;
  }
}
```

---

## 🏠 Homepage — `app/page.tsx`

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-foreground">
        Trường THPT Quốc Học Huế
      </h1>
      <p className="text-muted-foreground text-lg">
        Hệ thống quản lý trường học thông minh
      </p>
      <span className="text-sm text-muted-foreground">
        🚧 Đang xây dựng…
      </span>
    </main>
  );
}
```

---

## ⚙️ Bootstrap — lệnh khởi tạo project

```bash
# 1. Tạo project
npx create-next-app@latest qhue-app \
  --typescript --tailwind --app --src-dir --no-git

cd qhue-app

# 2. Cài shadcn/ui
npx shadcn@latest init
# → chọn: Default style, CSS variables, Yes overwrite globals.css

# 3. Chạy dev để kiểm tra
npm run dev
# → mở http://localhost:3000

# 4. Build + chạy Docker
docker compose up --build
# → mở http://localhost:3000
```

---

## ✅ Definition of Done (giai đoạn skeleton)

| Kiểm tra | Kết quả mong đợi |
|---|---|
| `npm run dev` | Trang load, không lỗi console |
| `npm run build` | Build thành công, không lỗi TypeScript |
| `docker compose up --build` | Container start, `localhost:3000` trả về 200 |
| Homepage | Hiển thị tên trường + màu teal đúng design token |
| `next/image`, `next/font` | Không lỗi (chưa dùng, không cần cấu hình thêm) |

---

## 🔜 Giai đoạn tiếp theo (phân tích sau)

Skeleton này là nền. Các module sẽ được thêm vào `src/app/` sau khi phân tích xong:

- `(auth)/login` — SSO HUE-S
- `(dashboard)/` — AppShell: Sidebar + Navbar
- `lms/`, `exam/`, `ai-attendance/`, `library/`, `admin/`

> Xem `raw/` để biết thêm chi tiết từng module.

---

*Stack: Next.js 15 · TypeScript · Tailwind CSS v3 · shadcn/ui · Docker (node:20-alpine)*
*Cập nhật: 2026-03-14*
