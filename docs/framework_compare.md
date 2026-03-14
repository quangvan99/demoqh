---
title: "So sánh Framework Frontend — THPT Quốc Học Huế"
updated: 2026-03-14
decision: "✅ CHỌN: Next.js 15 (App Router + React 19)"
context: "Hệ thống quản lý trường học thông minh — Angular vs Next.js"
---

# 🏗️ So sánh Framework Frontend

> **Ngữ cảnh:** Lựa chọn tech stack để code giao diện web cho hệ thống THPT Quốc Học Huế,
> tương thích với design token đã định nghĩa (Tailwind CSS + CSS Variables).

---

## 🏆 ĐỀ XUẤT CHÍNH THỨC: Next.js 15

> **→ Lý do chọn Next.js 15** cho dự án THPT Quốc Học Huế:
>
> 1. **Bắt đầu từ đầu** — không có legacy code Angular → không bị ràng buộc
> 2. **SSR native** — trang OPAC thư viện public cần SEO tốt
> 3. **shadcn/ui** — copy-paste component, khớp 100% design token (CSS vars)
> 4. **next-auth v5** — tích hợp SSO HUE-S dễ hơn Angular guards
> 5. **Hệ sinh thái 2026** — React/Next.js đang tăng trưởng, Angular thu hẹp dần
> 6. **Developer pool** — dễ tuyển React dev hơn Angular dev
> 7. **TanStack Query + Table** — xử lý data-heavy (DataTable học sinh, thư viện) tốt hơn PrimeNG

---

## 🔑 Kết luận nhanh

| Tình huống | Khuyến nghị |
|---|---|
| **Dự án này (bắt đầu từ đầu)** | 🏆 **Next.js 15** ← **ĐÃ CHỌN** |
| Bắt đầu từ đầu, team quen React | ✅ **Next.js 15** |
| Team đã có Angular / đã code 30%+ | ✅ **Angular 19** |
| Muốn tốc độ phát triển UI nhanh nhất | ✅ **Next.js 15** |
| Cần convention chặt, team lớn > 10 người | ✅ **Angular 19** |

---

## ⚡ So sánh trực tiếp

| Tiêu chí | Angular 19 | Next.js 15 | Winner |
|---|---|---|---|
| **Tương thích design token** | ✅ Tailwind + Material SCSS | ✅ Tailwind + shadcn CSS vars | 🤝 Ngang |
| **Tốc độ code UI** | Trung bình (boilerplate nhiều) | **Nhanh hơn 40–60%** (shadcn copy-paste) | Next.js |
| **Component ecosystem** | Angular Material + PrimeNG | **shadcn/ui + Radix + headlessui** | Next.js |
| **Form phức tạp** | ✅ Reactive Forms mạnh nhất | React Hook Form + Zod (tốt) | Angular |
| **State management** | NgRx Signals (tốt) | **Zustand / Jotai (đơn giản hơn)** | Next.js |
| **Table / DataGrid** | PrimeNG Table | **TanStack Table v8** | Next.js |
| **TypeScript** | ✅ First-class | ✅ First-class | 🤝 Ngang |
| **SSR** | ❌ Yếu (SPA) | ✅ Native (App Router + RSC) | Next.js |
| **SEO** | ❌ Yếu | ✅ Tốt (thư viện OPAC public) | Next.js |
| **Bundle size** | Lớn hơn | **Nhỏ hơn** (tree-shake tốt) | Next.js |
| **Learning curve** | Cao (DI, decorators, modules) | **Thấp hơn** (React phổ biến hơn) | Next.js |
| **Tích hợp .NET Core API** | ✅ HttpClient | ✅ fetch / TanStack Query | 🤝 Ngang |
| **Real-time (AI điểm danh)** | RxJS + WebSocket | SWR + WebSocket | 🤝 Ngang |
| **Auth / SSO (HUE-S)** | Angular guards | **next-auth v5** | Next.js |
| **Deploy** | Nginx static | **Vercel / Docker / Nginx** | Next.js |
| **Community 2026** | Thu hẹp dần | **Đang tăng mạnh** | Next.js |

---

## 🧩 Tech Stack đề xuất — Angular 19

```
Angular 19 (Standalone Components + Signals)
├── TypeScript
├── Tailwind CSS v3              ← tailwind.config.ts từ design_token/08
├── Angular Material v19         ← SCSS theme từ design_token/08
├── PrimeNG v19                  ← DataTable, Tree, FileUpload, rich-text
├── Angular CDK                  ← DragDrop, VirtualScroll, Overlay
├── NgRx Signal Store            ← State management
├── Angular HttpClient + RxJS    ← API calls, real-time
├── TanStack Query for Angular   ← Cache + refetch
├── ECharts (ngx-echarts)        ← Charts dashboard
├── ng-icons + Heroicons         ← Icon set
└── Angular Router + Guards      ← Auth, phân quyền
```

**Setup:**
```bash
ng new qhue-app --style=scss --routing=true --standalone
ng add @angular/material
npm install primeng @primeng/themes primeicons
npm install @ngrx/signals
npm install echarts ngx-echarts
npm install @tanstack/angular-query-experimental
npm install @ng-icons/core @ng-icons/heroicons
```

---

## 🧩 Tech Stack đề xuất — Next.js 15

```
Next.js 15 (App Router + React 19)
├── TypeScript
├── Tailwind CSS v3              ← tailwind.config.ts từ design_token/08 (y chang)
├── shadcn/ui                    ← thay Angular Material, native Tailwind
├── Radix UI Primitives          ← headless base của shadcn
├── React Hook Form + Zod        ← Form validation type-safe
├── TanStack Query v5            ← Server state, cache, refetch
├── TanStack Table v8            ← DataTable LMS, Thư viện
├── Zustand                      ← Client state (auth, UI state)
├── ECharts (echarts-for-react)  ← Charts dashboard
├── next-auth v5                 ← SSO HUE-S
└── Lucide React                 ← Icons (built-in shadcn)
```

**Setup:**
```bash
npx create-next-app@latest qhue-app \
  --typescript --tailwind --app --src-dir

npx shadcn@latest init
npx shadcn@latest add button input table dialog
npx shadcn@latest add dashboard-01

npm install @tanstack/react-query @tanstack/react-table
npm install react-hook-form zod @hookform/resolvers
npm install zustand
npm install next-auth@beta
npm install echarts echarts-for-react
```

---

## 🎨 Tương thích Design Token

| File Design Token | Angular 19 | Next.js 15 |
|---|---|---|
| `tailwind.config.ts` | ✅ Copy paste trực tiếp | ✅ Copy paste trực tiếp |
| CSS Custom Properties (`:root`) | ✅ `styles.scss` | ✅ `globals.css` |
| Brand colors, spacing, radius | ✅ Tailwind classes | ✅ Tailwind classes |
| Angular Material SCSS theme | ✅ `_material-theme.scss` | ❌ Không dùng |
| shadcn/ui CSS variables | ❌ Không dùng | ✅ Tốt hơn (native Tailwind) |

**Lưu ý Next.js:** Thay Angular Material SCSS bằng shadcn CSS vars — map 1-1 với `01_colors.md`:

```css
/* globals.css — shadcn theme khớp design token */
:root {
  --primary:            168 85% 25%;   /* brand-700  #0F766E */
  --primary-foreground: 0   0%  100%;
  --secondary:          173 80% 40%;   /* brand-500  #14B8A6 */
  --background:         166 100% 97%;  /* brand-50   #F0FDFA */
  --foreground:         174 61%  19%;  /* brand-900  #134E4A */
  --destructive:        0   72%  51%;  /* error      #DC2626 */
  --radius:             0.5rem;        /* radius-lg           */
  --ring:               168 85% 25%;   /* focus ring brand    */
}
```

---

## 🏗️ Kiến trúc thư mục — Next.js 15 (App Router)

```
src/
├── app/
│   ├── (auth)/
│   │   └── login/               # SSO HUE-S → next-auth
│   ├── (dashboard)/
│   │   ├── layout.tsx            # AppShell: Sidebar + Navbar
│   │   ├── page.tsx              # Dashboard tổng quan BGH
│   │   ├── lms/                  # Phân hệ học tập trực tuyến
│   │   │   ├── classes/
│   │   │   ├── content/
│   │   │   └── results/
│   │   ├── exam/                 # Thi & kiểm tra
│   │   ├── ai-attendance/        # AI điểm danh
│   │   ├── library/              # Thư viện số
│   │   └── admin/                # Quản trị hệ thống
│   └── api/                      # Route handlers → proxy .NET Core
├── components/
│   ├── ui/                       # shadcn components (auto-generated)
│   └── shared/                   # Custom shared components
├── lib/
│   ├── api.ts                    # HTTP client wrapper
│   ├── auth.ts                   # next-auth config
│   └── query-client.ts           # TanStack Query setup
├── stores/                       # Zustand stores
├── styles/
│   └── globals.css               # CSS vars + Tailwind base
└── tailwind.config.ts            # ← Copy từ design_token/08
```

---

## 🏗️ Kiến trúc thư mục — Angular 19

```
src/
├── app/
│   ├── core/                     # Singleton: guards, interceptors, stores
│   │   ├── auth/
│   │   ├── http/
│   │   └── stores/
│   ├── shared/                   # Components/pipes/directives dùng chung
│   │   ├── components/
│   │   ├── pipes/
│   │   └── directives/
│   ├── features/                 # Lazy-loaded feature modules
│   │   ├── lms/
│   │   ├── exam/
│   │   ├── ai-attendance/
│   │   ├── library/
│   │   ├── dashboard/
│   │   └── admin/
│   └── layout/                   # AppShell, Sidebar, Navbar
├── styles/
│   ├── _tokens.scss              # CSS variables từ design_token/08
│   ├── _material-theme.scss      # Angular Material theme
│   └── styles.scss
└── tailwind.config.ts            # ← Copy từ design_token/08
```

---

## 🔍 Quyết định theo module

| Module | Angular | Next.js | Ghi chú |
|---|---|---|---|
| Dashboard & Charts | ✅ | ✅ | ECharts tốt ở cả hai |
| LMS — Form tạo nội dung | ✅✅ Reactive Forms | ✅ RHF + Zod | Angular nhỉnh hơn cho form phức tạp |
| LMS — DataTable học sinh | ✅ PrimeNG | ✅✅ TanStack Table | Next.js nhỉnh hơn |
| Thi kiểm tra — Timer UI | ✅ | ✅ | Như nhau |
| AI Điểm danh — Real-time | ✅ RxJS | ✅ SWR/SSE | Như nhau |
| Thư viện — OPAC public | ❌ SEO yếu | ✅✅ SSR native | Next.js hơn hẳn |
| Auth SSO HUE-S | ✅ Guards | ✅✅ next-auth | Next.js dễ hơn |
| Admin phân quyền | ✅✅ Angular guards | ✅ Middleware | Angular nhỉnh hơn |

---

## 📋 Checklist trước khi quyết định

- [x] Team đã có kinh nghiệm framework nào? → **React/Next.js** (bắt đầu mới)
- [x] Đã có code sẵn chưa? → **Chưa có** — bắt đầu từ đầu
- [x] Có yêu cầu SEO cho trang thư viện OPAC public không? → **Có** → Next.js SSR
- [x] Timeline dự án → **Cần ra nhanh** → Next.js nhanh hơn 40–60%
- [x] Số lượng developer → **Nhỏ** → Hệ sinh thái React dễ onboard hơn

> **→ Tất cả điều kiện đều trỏ về Next.js 15. Quyết định: ✅ DÙNG NEXT.JS 15**

---

## 🚀 Next Steps

1. ✅ Design Token đã hoàn thành (`docs/design_token/`)
2. ✅ Framework đã chọn: **Next.js 15**
3. → **Tiếp theo:** Xem `docs/skeleton.md` để bootstrap project với cấu trúc thư mục trên

---

*Tài liệu tham khảo: `docs/design_token/08_tailwind_config.md`, `docs/design_token/01_colors.md`*
*Cập nhật: 2026-03-14 — **Quyết định chính thức: Next.js 15***
