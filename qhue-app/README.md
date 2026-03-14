# THPT Quốc Học Huế — Hệ thống quản lý trường học thông minh

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Container:** Docker (node:20-alpine, multi-stage build)

## Getting Started

### Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

### Production (Docker)
```bash
cp .env.example .env.local
docker compose up --build
# → http://localhost:3001
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Tailwind + design tokens (brand teal)
└── components/
    └── ui/             # shadcn/ui components
```
