---
title: Design Token Index — THPT Quốc Học Huế
category: design-system
version: 1.0.0
updated: 2026-03-11
---

# 🎨 Design Token System — THPT Quốc Học Huế

> Hệ thống quản lý trường học thông minh — Smart School Management System
> Stack: **Angular + Tailwind CSS + .NET Core**
> Standard: **WCAG AAA** — Accessible & Ethical Design

---

## 📁 Danh sách File Token

| # | File | Mô tả | Token count |
|---|------|--------|-------------|
| 00 | `00_README.md` | Index tổng hợp (file này) | — |
| 01 | `01_colors.md` | Brand palette, semantic colors, neutrals, module accents, role badges | ~120 tokens |
| 02 | `02_typography.md` | Font families, type scale, semantic text styles, weights | ~60 tokens |
| 03 | `03_spacing.md` | Base scale, semantic spacing, component spacing specs | ~50 tokens |
| 04 | `04_borders_shadows.md` | Border radius, width, colors, shadow scale | ~35 tokens |
| 05 | `05_motion.md` | Duration, easing, transition presets, reduced-motion | ~20 tokens |
| 06 | `06_components.md` | Button, form, card, table, badge, avatar, nav, modal, tooltip, alert | ~80 tokens |
| 07 | `07_layout_grid.md` | Breakpoints, containers, grid, z-index, app shell | ~25 tokens |
| 08 | `08_tailwind_config.md` | tailwind.config.ts, CSS custom properties đầy đủ, Angular Material theme | full config |

---

## 🎨 Quick Reference — Màu chính

| Token | Hex | RGB | Tailwind | Dùng cho |
|-------|-----|-----|----------|----------|
| `brand-600` | `#0F766E` | rgb(15,118,110) | `teal-700` | Primary brand, CTA chính |
| `brand-500` | `#14B8A6` | rgb(20,184,166) | `teal-500` | Secondary, highlights |
| `cta-700` | `#0369A1` | rgb(3,105,161) | `sky-700` | Links, CTA professional |
| `bg-brand` | `#F0FDFA` | rgb(240,253,250) | `teal-50` | Background tổng thể |
| `text-brand` | `#134E4A` | rgb(19,78,74) | `teal-900` | Text on light bg |
| `success` | `#16A34A` | rgb(22,163,74) | `green-600` | Trạng thái thành công |
| `warning` | `#D97706` | rgb(217,119,6) | `amber-600` | Cảnh báo |
| `error` | `#DC2626` | rgb(220,38,38) | `red-600` | Lỗi, nguy hiểm |
| `info` | `#0369A1` | rgb(3,105,161) | `sky-700` | Thông tin |

---

## 🔤 Quick Reference — Typography

| Token | Font | Size | Weight | Dùng cho |
|-------|------|------|--------|----------|
| `heading-1` | Lexend | 60px / 3.75rem | 700 | Page title |
| `heading-2` | Lexend | 48px / 3rem | 700 | Section title |
| `heading-3` | Lexend | 36px / 2.25rem | 700 | Card title lớn |
| `heading-4` | Lexend | 30px / 1.875rem | 600 | Widget title |
| `heading-5` | Lexend | 24px / 1.5rem | 600 | Sub-section |
| `heading-6` | Lexend | 20px / 1.25rem | 600 | Component title |
| `body` | Source Sans 3 | 16px / 1rem | 400 | Body text chính |
| `body-small` | Source Sans 3 | 14px / 0.875rem | 400 | Helper text |
| `caption` | Source Sans 3 | 12px / 0.75rem | 400 | Labels nhỏ |
| `code` | Fira Code | 14px / 0.875rem | 400 | Data, code |

---

## 🏫 Module Accent Colors

| Module | Color | Hex | Icon |
|--------|-------|-----|------|
| LMS / Học tập trực tuyến | Blue | `#2563EB` | 📚 |
| Thi & Kiểm tra | Indigo | `#4F46E5` | 📝 |
| AI Điểm danh camera | Cyan | `#0891B2` | 🤖 |
| Thư viện số | Amber | `#B45309` | 📖 |
| Dashboard / Báo cáo | Teal | `#0F766E` | 📊 |
| Tích hợp Sở GDĐT | Slate | `#475569` | 🏛️ |

---

## 👥 Role Badge Colors

| Role | Color | Hex | Badge class |
|------|-------|-----|-------------|
| Học sinh | Sky Blue | `#0EA5E9` | `badge-role-student` |
| Giáo viên | Emerald | `#10B981` | `badge-role-teacher` |
| Ban giám hiệu | Teal | `#0F766E` | `badge-role-principal` |
| Admin hệ thống | Purple | `#7C3AED` | `badge-role-admin` |
| Sở GD&ĐT | Slate | `#475569` | `badge-role-department` |

---

## 🔧 Accessibility Standards

| Tiêu chí | Yêu cầu | Áp dụng |
|----------|---------|---------|
| Contrast text/bg | ≥ 7:1 (AAA) | Body text |
| Contrast UI | ≥ 4.5:1 (AA) | Buttons, icons |
| Touch target | 44×44px min | Mobile |
| Focus ring | 3px minimum, visible | All interactive |
| Body font size | 16px minimum | Body text |
| Motion | Respect prefers-reduced-motion | Animations |

---

## 📦 Import / Usage

### Google Fonts (HTML `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

### CSS Variables (global stylesheet)
```css
@import './design_token/variables.css';
```

### Tailwind
```bash
# tailwind.config.ts đã có đủ custom tokens — xem 08_tailwind_config.md
```

---

## 📋 Versioning

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-11 | Initial release — full token system |

---

> **Maintainer:** Design System Team — THPT Quốc Học Huế
> **Standard:** WCAG AAA, APCA contrast algorithm
> **Reviewed by:** UI/UX Lead, Frontend Lead, Accessibility Specialist
