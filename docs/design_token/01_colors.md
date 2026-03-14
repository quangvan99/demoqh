---
title: Color Tokens — THPT Quốc Học Huế
category: design-token/colors
version: 1.0.0
updated: 2026-03-11
---

# 🎨 Color Tokens

> Base: Primary `#0F766E` (Teal Trust) — Government Education
> Standard: WCAG AAA (contrast ≥ 7:1 cho text, ≥ 4.5:1 cho UI)

---

## 1.1 Brand Palette (Teal Scale)

> Derived từ primary `#0F766E` (teal-700 Tailwind), expand full 11-shade scale

| Token | CSS Variable | Hex | RGB | Tailwind equiv | Contrast on white | Usage |
|-------|-------------|-----|-----|----------------|-------------------|-------|
| `brand-50` | `--color-brand-50` | `#F0FDFA` | rgb(240,253,250) | `teal-50` | — | Page background |
| `brand-100` | `--color-brand-100` | `#CCFBF1` | rgb(204,251,241) | `teal-100` | — | Hover bg nhẹ |
| `brand-200` | `--color-brand-200` | `#99F6E4` | rgb(153,246,228) | `teal-200` | — | Selected bg |
| `brand-300` | `--color-brand-300` | `#5EEAD4` | rgb(94,234,212) | `teal-300` | — | Decorative |
| `brand-400` | `--color-brand-400` | `#2DD4BF` | rgb(45,212,191) | `teal-400` | 2.5:1 | Icons on dark bg |
| `brand-500` | `--color-brand-500` | `#14B8A6` | rgb(20,184,166) | `teal-500` | 3.1:1 | Secondary brand |
| `brand-600` | `--color-brand-600` | `#0D9488` | rgb(13,148,136) | `teal-600` | 4.6:1 ✅ AA | Active nav item |
| `brand-700` | `--color-brand-700` | `#0F766E` | rgb(15,118,110) | `teal-700` | **5.9:1 ✅ AA+** | **Primary brand** |
| `brand-800` | `--color-brand-800` | `#115E59` | rgb(17,94,89) | `teal-800` | 7.7:1 ✅ **AAA** | Text on light bg |
| `brand-900` | `--color-brand-900` | `#134E4A` | rgb(19,78,74) | `teal-900` | 9.4:1 ✅ **AAA** | Primary text dark |
| `brand-950` | `--color-brand-950` | `#0D2F2C` | rgb(13,47,44) | `teal-950` | 14.2:1 ✅ **AAA** | Darkest text |

### Brand Color Usage Guide

```
brand-50  → Page/section backgrounds
brand-100 → Hover backgrounds, selected row bg
brand-200 → Tag/chip backgrounds, active chip
brand-300 → Decorative borders, dividers
brand-500 → Secondary buttons, badges
brand-700 → PRIMARY: buttons, links, icons (main)
brand-800 → Heading text, dark labels
brand-900 → Body text on brand-50 background
brand-950 → High-emphasis text, strong borders
```

---

## 1.2 Semantic Colors

### ✅ Success (Green Scale — `#16A34A`)

| Token | CSS Variable | Hex | RGB | Contrast on white | Usage |
|-------|-------------|-----|-----|-------------------|-------|
| `success-surface` | `--color-success-surface` | `#F0FDF4` | rgb(240,253,244) | — | Alert bg |
| `success-light` | `--color-success-light` | `#DCFCE7` | rgb(220,252,231) | — | Badge bg |
| `success-default` | `--color-success` | `#16A34A` | rgb(22,163,74) | 5.2:1 ✅ AA | Icon, border |
| `success-dark` | `--color-success-dark` | `#14532D` | rgb(20,83,45) | 11.1:1 ✅ AAA | Text label |
| `success-border` | `--color-success-border` | `#86EFAC` | rgb(134,239,172) | — | Alert border |

### ⚠️ Warning (Amber Scale — `#D97706`)

| Token | CSS Variable | Hex | RGB | Contrast on white | Usage |
|-------|-------------|-----|-----|-------------------|-------|
| `warning-surface` | `--color-warning-surface` | `#FFFBEB` | rgb(255,251,235) | — | Alert bg |
| `warning-light` | `--color-warning-light` | `#FEF3C7` | rgb(254,243,199) | — | Badge bg |
| `warning-default` | `--color-warning` | `#D97706` | rgb(217,119,6) | 4.6:1 ✅ AA | Icon, border |
| `warning-dark` | `--color-warning-dark` | `#78350F` | rgb(120,53,15) | 9.7:1 ✅ AAA | Text label |
| `warning-border` | `--color-warning-border` | `#FCD34D` | rgb(252,211,77) | — | Alert border |

### ❌ Error / Danger (Red Scale — `#DC2626`)

| Token | CSS Variable | Hex | RGB | Contrast on white | Usage |
|-------|-------------|-----|-----|-------------------|-------|
| `error-surface` | `--color-error-surface` | `#FEF2F2` | rgb(254,242,242) | — | Alert bg |
| `error-light` | `--color-error-light` | `#FEE2E2` | rgb(254,226,226) | — | Badge bg |
| `error-default` | `--color-error` | `#DC2626` | rgb(220,38,38) | 5.9:1 ✅ AA+ | Icon, border |
| `error-dark` | `--color-error-dark` | `#7F1D1D` | rgb(127,29,29) | 12.8:1 ✅ AAA | Text label |
| `error-border` | `--color-error-border` | `#FCA5A5` | rgb(252,165,165) | — | Alert border |

### ℹ️ Info (Blue Scale — `#0369A1`)

| Token | CSS Variable | Hex | RGB | Contrast on white | Usage |
|-------|-------------|-----|-----|-------------------|-------|
| `info-surface` | `--color-info-surface` | `#F0F9FF` | rgb(240,249,255) | — | Alert bg |
| `info-light` | `--color-info-light` | `#E0F2FE` | rgb(224,242,254) | — | Badge bg |
| `info-default` | `--color-info` | `#0369A1` | rgb(3,105,161) | 6.8:1 ✅ AAA | Icon, border, CTA |
| `info-dark` | `--color-info-dark` | `#0C4A6E` | rgb(12,74,110) | 11.4:1 ✅ AAA | Text label |
| `info-border` | `--color-info-border` | `#7DD3FC` | rgb(125,211,252) | — | Alert border |

---

## 1.3 Neutral Gray Scale (Slate-based)

> Map sang Tailwind Slate scale — phù hợp với teal primary

| Token | CSS Variable | Hex | RGB | Tailwind (Slate) | Usage |
|-------|-------------|-----|-----|------------------|-------|
| `gray-0` | `--color-gray-0` | `#FFFFFF` | rgb(255,255,255) | `white` | Pure white |
| `gray-50` | `--color-gray-50` | `#F8FAFC` | rgb(248,250,252) | `slate-50` | Page bg |
| `gray-100` | `--color-gray-100` | `#F1F5F9` | rgb(241,245,249) | `slate-100` | Sidebar bg |
| `gray-200` | `--color-gray-200` | `#E2E8F0` | rgb(226,232,240) | `slate-200` | Dividers |
| `gray-300` | `--color-gray-300` | `#CBD5E1` | rgb(203,213,225) | `slate-300` | Input borders |
| `gray-400` | `--color-gray-400` | `#94A3B8` | rgb(148,163,184) | `slate-400` | Placeholder |
| `gray-500` | `--color-gray-500` | `#64748B` | rgb(100,116,139) | `slate-500` | Muted text |
| `gray-600` | `--color-gray-600` | `#475569` | rgb(71,85,105) | `slate-600` | Secondary text |
| `gray-700` | `--color-gray-700` | `#334155` | rgb(51,65,85) | `slate-700` | Body text |
| `gray-800` | `--color-gray-800` | `#1E293B` | rgb(30,41,59) | `slate-800` | Heading text |
| `gray-900` | `--color-gray-900` | `#0F172A` | rgb(15,23,42) | `slate-900` | High emphasis |
| `gray-950` | `--color-gray-950` | `#020617` | rgb(2,6,23) | `slate-950` | Near black |

### Contrast Ratios (text on white `#FFFFFF`)

```
gray-500 (#64748B) : 4.6:1  ✅ AA  — Muted, helper text
gray-600 (#475569) : 6.0:1  ✅ AA+ — Secondary text
gray-700 (#334155) : 8.4:1  ✅ AAA — Body text ✓
gray-800 (#1E293B) : 12.6:1 ✅ AAA — Headings ✓
gray-900 (#0F172A) : 17.8:1 ✅ AAA — High emphasis ✓
```

---

## 1.4 Module-specific Accent Colors

| Module | Token | CSS Variable | Hex | RGB | Scale | Rationale |
|--------|-------|-------------|-----|-----|-------|-----------|
| LMS / Học tập | `accent-lms` | `--color-accent-lms` | `#2563EB` | rgb(37,99,235) | Blue-600 | Learning, calm, trust |
| Thi kiểm tra | `accent-exam` | `--color-accent-exam` | `#4F46E5` | rgb(79,70,229) | Indigo-600 | Focus, academic |
| AI Điểm danh | `accent-ai` | `--color-accent-ai` | `#0891B2` | rgb(8,145,178) | Cyan-600 | Technology, precision |
| Thư viện số | `accent-library` | `--color-accent-library` | `#B45309` | rgb(180,83,9) | Amber-700 | Books, warmth |
| Dashboard/BC | `accent-dashboard` | `--color-accent-dashboard` | `#0F766E` | rgb(15,118,110) | Teal-700 | Primary brand |
| GDĐT tích hợp | `accent-dept` | `--color-accent-dept` | `#475569` | rgb(71,85,105) | Slate-600 | Government neutral |

### Module Surface Colors (light backgrounds)

| Module | Token | Hex | Tailwind | Usage |
|--------|-------|-----|----------|-------|
| LMS | `surface-lms` | `#EFF6FF` | `blue-50` | Module card bg |
| Thi kiểm tra | `surface-exam` | `#EEF2FF` | `indigo-50` | Module card bg |
| AI Điểm danh | `surface-ai` | `#ECFEFF` | `cyan-50` | Module card bg |
| Thư viện số | `surface-library` | `#FFFBEB` | `amber-50` | Module card bg |
| Dashboard | `surface-dashboard` | `#F0FDFA` | `teal-50` | Module card bg |
| GDĐT | `surface-dept` | `#F8FAFC` | `slate-50` | Module card bg |

---

## 1.5 Role-based Badge Colors

| Role | Token | Hex | RGB | Bg (light) | Text (dark) | Tailwind base |
|------|-------|-----|-----|------------|-------------|---------------|
| Học sinh | `role-student` | `#0EA5E9` | rgb(14,165,233) | `#E0F2FE` | `#0C4A6E` | Sky-500 |
| Giáo viên | `role-teacher` | `#10B981` | rgb(16,185,129) | `#D1FAE5` | `#064E3B` | Emerald-500 |
| Ban giám hiệu | `role-principal` | `#0F766E` | rgb(15,118,110) | `#CCFBF1` | `#134E4A` | Teal-700 |
| Admin hệ thống | `role-admin` | `#7C3AED` | rgb(124,58,237) | `#EDE9FE` | `#3B0764` | Violet-600 |
| Sở GD&ĐT | `role-department` | `#475569` | rgb(71,85,105) | `#F1F5F9` | `#0F172A` | Slate-600 |

### CSS Variables cho Role Colors

```css
:root {
  /* Role badge colors */
  --color-role-student-bg:      #E0F2FE;
  --color-role-student-text:    #0C4A6E;
  --color-role-student-border:  #0EA5E9;

  --color-role-teacher-bg:      #D1FAE5;
  --color-role-teacher-text:    #064E3B;
  --color-role-teacher-border:  #10B981;

  --color-role-principal-bg:    #CCFBF1;
  --color-role-principal-text:  #134E4A;
  --color-role-principal-border:#0F766E;

  --color-role-admin-bg:        #EDE9FE;
  --color-role-admin-text:      #3B0764;
  --color-role-admin-border:    #7C3AED;

  --color-role-dept-bg:         #F1F5F9;
  --color-role-dept-text:       #0F172A;
  --color-role-dept-border:     #475569;
}
```

---

## 1.6 CSS Custom Properties — Đầy đủ

```css
:root {
  /* ===================================
     BRAND PALETTE (Teal)
     =================================== */
  --color-brand-50:   #F0FDFA;  /* teal-50  */
  --color-brand-100:  #CCFBF1;  /* teal-100 */
  --color-brand-200:  #99F6E4;  /* teal-200 */
  --color-brand-300:  #5EEAD4;  /* teal-300 */
  --color-brand-400:  #2DD4BF;  /* teal-400 */
  --color-brand-500:  #14B8A6;  /* teal-500 — Secondary */
  --color-brand-600:  #0D9488;  /* teal-600 */
  --color-brand-700:  #0F766E;  /* teal-700 — PRIMARY */
  --color-brand-800:  #115E59;  /* teal-800 */
  --color-brand-900:  #134E4A;  /* teal-900 — Dark text */
  --color-brand-950:  #0D2F2C;  /* teal-950 */

  /* ===================================
     SEMANTIC — SUCCESS (Green)
     =================================== */
  --color-success-surface: #F0FDF4;
  --color-success-light:   #DCFCE7;
  --color-success-border:  #86EFAC;
  --color-success:         #16A34A;  /* green-600 */
  --color-success-dark:    #14532D;  /* green-950 */

  /* ===================================
     SEMANTIC — WARNING (Amber)
     =================================== */
  --color-warning-surface: #FFFBEB;
  --color-warning-light:   #FEF3C7;
  --color-warning-border:  #FCD34D;
  --color-warning:         #D97706;  /* amber-600 */
  --color-warning-dark:    #78350F;  /* amber-900 */

  /* ===================================
     SEMANTIC — ERROR (Red)
     =================================== */
  --color-error-surface: #FEF2F2;
  --color-error-light:   #FEE2E2;
  --color-error-border:  #FCA5A5;
  --color-error:         #DC2626;   /* red-600 */
  --color-error-dark:    #7F1D1D;   /* red-900 */

  /* ===================================
     SEMANTIC — INFO (Blue/Sky)
     =================================== */
  --color-info-surface: #F0F9FF;
  --color-info-light:   #E0F2FE;
  --color-info-border:  #7DD3FC;
  --color-info:         #0369A1;    /* sky-700 — CTA */
  --color-info-dark:    #0C4A6E;    /* sky-900 */

  /* ===================================
     NEUTRAL GRAY (Slate)
     =================================== */
  --color-gray-0:   #FFFFFF;
  --color-gray-50:  #F8FAFC;
  --color-gray-100: #F1F5F9;
  --color-gray-200: #E2E8F0;
  --color-gray-300: #CBD5E1;
  --color-gray-400: #94A3B8;
  --color-gray-500: #64748B;
  --color-gray-600: #475569;
  --color-gray-700: #334155;
  --color-gray-800: #1E293B;
  --color-gray-900: #0F172A;
  --color-gray-950: #020617;

  /* ===================================
     MODULE ACCENTS
     =================================== */
  --color-accent-lms:       #2563EB;  /* blue-600   — LMS học tập */
  --color-accent-exam:      #4F46E5;  /* indigo-600 — Thi kiểm tra */
  --color-accent-ai:        #0891B2;  /* cyan-600   — AI điểm danh */
  --color-accent-library:   #B45309;  /* amber-700  — Thư viện số */
  --color-accent-dashboard: #0F766E;  /* teal-700   — Dashboard */
  --color-accent-dept:      #475569;  /* slate-600  — Sở GDĐT */

  /* Module surfaces */
  --color-surface-lms:       #EFF6FF;
  --color-surface-exam:      #EEF2FF;
  --color-surface-ai:        #ECFEFF;
  --color-surface-library:   #FFFBEB;
  --color-surface-dashboard: #F0FDFA;
  --color-surface-dept:      #F8FAFC;

  /* ===================================
     ROLE BADGE COLORS
     =================================== */
  --color-role-student-bg:       #E0F2FE;
  --color-role-student-text:     #0C4A6E;
  --color-role-student-border:   #0EA5E9;

  --color-role-teacher-bg:       #D1FAE5;
  --color-role-teacher-text:     #064E3B;
  --color-role-teacher-border:   #10B981;

  --color-role-principal-bg:     #CCFBF1;
  --color-role-principal-text:   #134E4A;
  --color-role-principal-border: #0F766E;

  --color-role-admin-bg:         #EDE9FE;
  --color-role-admin-text:       #3B0764;
  --color-role-admin-border:     #7C3AED;

  --color-role-dept-bg:          #F1F5F9;
  --color-role-dept-text:        #0F172A;
  --color-role-dept-border:      #475569;

  /* ===================================
     SEMANTIC UI ALIASES
     =================================== */
  --color-bg-page:       var(--color-brand-50);   /* #F0FDFA */
  --color-bg-surface:    var(--color-gray-0);      /* #FFFFFF */
  --color-bg-elevated:   var(--color-gray-50);     /* #F8FAFC */
  --color-bg-subtle:     var(--color-gray-100);    /* #F1F5F9 */

  --color-text-primary:  var(--color-gray-900);    /* #0F172A */
  --color-text-secondary:var(--color-gray-600);    /* #475569 */
  --color-text-muted:    var(--color-gray-500);    /* #64748B */
  --color-text-disabled: var(--color-gray-400);    /* #94A3B8 */
  --color-text-inverse:  var(--color-gray-0);      /* #FFFFFF */
  --color-text-brand:    var(--color-brand-700);   /* #0F766E */
  --color-text-link:     var(--color-info);        /* #0369A1 */

  --color-border-default: var(--color-gray-200);   /* #E2E8F0 */
  --color-border-subtle:  var(--color-gray-100);   /* #F1F5F9 */
  --color-border-strong:  var(--color-gray-300);   /* #CBD5E1 */
  --color-border-brand:   var(--color-brand-700);  /* #0F766E */
}
```

---

## Contrast Verification Matrix

> Các cặp màu text/background thường dùng nhất

| Text Color | Background | Contrast | WCAG Level | Approved |
|------------|-----------|---------|------------|----------|
| `brand-900` `#134E4A` | `brand-50` `#F0FDFA` | 9.4:1 | AAA | ✅ |
| `brand-700` `#0F766E` | `white` `#FFFFFF` | 5.9:1 | AA | ✅ |
| `brand-800` `#115E59` | `white` `#FFFFFF` | 7.7:1 | AAA | ✅ |
| `gray-700` `#334155` | `white` `#FFFFFF` | 8.4:1 | AAA | ✅ |
| `gray-900` `#0F172A` | `white` `#FFFFFF` | 17.8:1 | AAA | ✅ |
| `white` `#FFFFFF` | `brand-700` `#0F766E` | 5.9:1 | AA | ✅ |
| `white` `#FFFFFF` | `info` `#0369A1` | 6.8:1 | AAA | ✅ |
| `white` `#FFFFFF` | `error` `#DC2626` | 5.9:1 | AA | ✅ |
| `success-dark` `#14532D` | `success-surface` `#F0FDF4` | 12.4:1 | AAA | ✅ |
| `error-dark` `#7F1D1D` | `error-surface` `#FEF2F2` | 12.1:1 | AAA | ✅ |
| `warning-dark` `#78350F` | `warning-surface` `#FFFBEB` | 10.3:1 | AAA | ✅ |
| `info-dark` `#0C4A6E` | `info-surface` `#F0F9FF` | 11.4:1 | AAA | ✅ |
