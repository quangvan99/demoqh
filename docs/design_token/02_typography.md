---
title: Typography Tokens — THPT Quốc Học Huế
category: design-token/typography
version: 1.0.0
updated: 2026-03-11
---

# 🔤 Typography Tokens

> Fonts được chọn cho tiêu chí: Accessible, Education-friendly, Government standard
> WCAG AAA: body ≥ 16px, line-height ≥ 1.5 for body text

---

## 2.1 Font Families

### Definitions

```css
:root {
  --font-heading: 'Lexend', system-ui, -apple-system, sans-serif;
  --font-body:    'Source Sans 3', system-ui, -apple-system, sans-serif;
  --font-mono:    'Fira Code', 'Courier New', Courier, monospace;
}
```

### Font Rationale

| Font | Token | Weights | Rationale |
|------|-------|---------|-----------|
| **Lexend** | `--font-heading` | 300, 400, 500, 600, 700, 800 | Designed for reading accessibility; reduces visual stress; excellent for headers & display text in education context |
| **Source Sans 3** | `--font-body` | 300, 400, 600, 700 (+ italic) | Adobe's humanist sans-serif; government/publication standard; optimal legibility at 14-18px; multilingual |
| **Fira Code** | `--font-mono` | 400, 500 | Programming ligatures; excellent for data tables, scores, timestamps in dashboards |

### Google Fonts Import

```html
<!-- Đặt trong <head> của index.html — TRƯỚC stylesheet -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Source+Sans+3:ital,opsz,wght@0,9..46,300;0,9..46,400;0,9..46,600;0,9..46,700;1,9..46,400&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
```

```scss
/* Hoặc trong Angular styles.scss */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Source+Sans+3:ital,opsz,wght@0,9..46,300;0,9..46,400;0,9..46,600;0,9..46,700;1,9..46,400&family=Fira+Code:wght@400;500&display=swap');
```

### Self-hosted Fallback (Offline environments)

```scss
// styles/_fonts.scss — tự host để dùng trong mạng nội bộ
@font-face {
  font-family: 'Lexend';
  src: url('/assets/fonts/lexend/Lexend-VariableFont_wght.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Source Sans 3';
  src: url('/assets/fonts/source-sans-3/SourceSans3-VariableFont.woff2') format('woff2');
  font-weight: 200 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Source Sans 3';
  src: url('/assets/fonts/source-sans-3/SourceSans3-Italic-VariableFont.woff2') format('woff2');
  font-weight: 200 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Fira Code';
  src: url('/assets/fonts/fira-code/FiraCode-VariableFont_wght.woff2') format('woff2');
  font-weight: 300 700;
  font-style: normal;
  font-display: swap;
}
```

---

## 2.2 Type Scale (Hoàn chỉnh)

> Base: 16px (1rem = 16px) — WCAG AAA requirement

| Token | px | rem | Line Height | Letter Spacing | Weight | Font | Usage |
|-------|-----|-----|-------------|----------------|--------|------|-------|
| `text-2xs` | 10px | 0.625rem | 1.4 | +0.02em | 400 | Body | Nhãn siêu nhỏ, timestamps |
| `text-xs` | 12px | 0.75rem | 1.4 | +0.01em | 400 | Body | Caption, metadata |
| `text-sm` | 14px | 0.875rem | 1.5 | 0 | 400 | Body | Helper text, secondary |
| `text-base` | 16px | 1rem | 1.6 | 0 | 400 | Body | **Body text chính** ✓ WCAG |
| `text-lg` | 18px | 1.125rem | 1.6 | -0.01em | 400 | Body | Lead paragraph |
| `text-xl` | 20px | 1.25rem | 1.4 | -0.01em | 500 | Heading | Sub-heading, lead |
| `text-2xl` | 24px | 1.5rem | 1.3 | -0.02em | 600 | Heading | H5, H6, card titles |
| `text-3xl` | 30px | 1.875rem | 1.25 | -0.02em | 600 | Heading | H4, widget titles |
| `text-4xl` | 36px | 2.25rem | 1.2 | -0.03em | 700 | Heading | H3 |
| `text-5xl` | 48px | 3rem | 1.1 | -0.04em | 700 | Heading | H2 |
| `text-6xl` | 60px | 3.75rem | 1.05 | -0.05em | 700 | Heading | H1, hero title |

### CSS Custom Properties cho Type Scale

```css
:root {
  --text-2xs-size:     0.625rem;   /* 10px */
  --text-2xs-lh:       1.4;
  --text-2xs-ls:       0.02em;

  --text-xs-size:      0.75rem;    /* 12px */
  --text-xs-lh:        1.4;
  --text-xs-ls:        0.01em;

  --text-sm-size:      0.875rem;   /* 14px */
  --text-sm-lh:        1.5;
  --text-sm-ls:        0;

  --text-base-size:    1rem;       /* 16px */
  --text-base-lh:      1.6;
  --text-base-ls:      0;

  --text-lg-size:      1.125rem;   /* 18px */
  --text-lg-lh:        1.6;
  --text-lg-ls:        -0.01em;

  --text-xl-size:      1.25rem;    /* 20px */
  --text-xl-lh:        1.4;
  --text-xl-ls:        -0.01em;

  --text-2xl-size:     1.5rem;     /* 24px */
  --text-2xl-lh:       1.3;
  --text-2xl-ls:       -0.02em;

  --text-3xl-size:     1.875rem;   /* 30px */
  --text-3xl-lh:       1.25;
  --text-3xl-ls:       -0.02em;

  --text-4xl-size:     2.25rem;    /* 36px */
  --text-4xl-lh:       1.2;
  --text-4xl-ls:       -0.03em;

  --text-5xl-size:     3rem;       /* 48px */
  --text-5xl-lh:       1.1;
  --text-5xl-ls:       -0.04em;

  --text-6xl-size:     3.75rem;    /* 60px */
  --text-6xl-lh:       1.05;
  --text-6xl-ls:       -0.05em;
}
```

---

## 2.3 Semantic Text Styles

> Named styles = composition của size + weight + line-height + font-family + color

### Headings (Lexend)

| Style | Font | Size | Weight | Line Height | Color Token | Usage |
|-------|------|------|--------|-------------|-------------|-------|
| `heading-1` | Lexend | 60px / 3.75rem | 700 | 1.05 | `--color-gray-900` | Page hero title |
| `heading-2` | Lexend | 48px / 3rem | 700 | 1.1 | `--color-gray-900` | Section title |
| `heading-3` | Lexend | 36px / 2.25rem | 700 | 1.2 | `--color-gray-800` | Page section |
| `heading-4` | Lexend | 30px / 1.875rem | 600 | 1.25 | `--color-gray-800` | Widget/card title lớn |
| `heading-5` | Lexend | 24px / 1.5rem | 600 | 1.3 | `--color-gray-800` | Card title |
| `heading-6` | Lexend | 20px / 1.25rem | 600 | 1.4 | `--color-gray-700` | Sub-section title |

### CSS Semantic Heading Classes

```css
.heading-1 {
  font-family: var(--font-heading);
  font-size: var(--text-6xl-size);     /* 3.75rem / 60px */
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.05em;
  color: var(--color-gray-900);
}

.heading-2 {
  font-family: var(--font-heading);
  font-size: var(--text-5xl-size);     /* 3rem / 48px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--color-gray-900);
}

.heading-3 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl-size);     /* 2.25rem / 36px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: var(--color-gray-800);
}

.heading-4 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl-size);     /* 1.875rem / 30px */
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--color-gray-800);
}

.heading-5 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl-size);     /* 1.5rem / 24px */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: var(--color-gray-800);
}

.heading-6 {
  font-family: var(--font-heading);
  font-size: var(--text-xl-size);      /* 1.25rem / 20px */
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--color-gray-700);
}
```

### Body Text (Source Sans 3)

| Style | Font | Size | Weight | Line Height | Color Token | Usage |
|-------|------|------|--------|-------------|-------------|-------|
| `body-large` | Source Sans 3 | 18px / 1.125rem | 400 | 1.6 | `--color-gray-700` | Lead paragraph, introductions |
| `body` | Source Sans 3 | 16px / 1rem | 400 | 1.6 | `--color-gray-700` | Default body text ✓ WCAG |
| `body-small` | Source Sans 3 | 14px / 0.875rem | 400 | 1.5 | `--color-gray-600` | Secondary info, helper text |
| `body-bold` | Source Sans 3 | 16px / 1rem | 600 | 1.6 | `--color-gray-700` | Bold body emphasis |

```css
.body-large {
  font-family: var(--font-body);
  font-size: var(--text-lg-size);      /* 1.125rem / 18px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-gray-700);
}

.body {
  font-family: var(--font-body);
  font-size: var(--text-base-size);    /* 1rem / 16px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-gray-700);
}

.body-small {
  font-family: var(--font-body);
  font-size: var(--text-sm-size);      /* 0.875rem / 14px */
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-gray-600);
}
```

### UI Text Styles

| Style | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| `label` | Source Sans 3 | 14px | 500 | 1.4 | 0 | Form labels, button text |
| `label-sm` | Source Sans 3 | 12px | 500 | 1.4 | +0.01em | Small labels, tag text |
| `caption` | Source Sans 3 | 12px | 400 | 1.4 | +0.01em | Image captions, metadata |
| `overline` | Source Sans 3 | 11px | 600 | 1.3 | +0.08em | Section overlines (uppercase) |
| `helper` | Source Sans 3 | 12px | 400 | 1.4 | 0 | Form helper/error text |

```css
.label {
  font-family: var(--font-body);
  font-size: 0.875rem;  /* 14px */
  font-weight: 500;
  line-height: 1.4;
  color: var(--color-gray-700);
}

.caption {
  font-family: var(--font-body);
  font-size: 0.75rem;   /* 12px */
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: var(--color-gray-500);
}

.overline {
  font-family: var(--font-body);
  font-size: 0.6875rem; /* 11px */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gray-500);
}
```

### Code / Data Styles (Fira Code)

| Style | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| `code-inline` | Fira Code | 13px / 0.8125rem | 400 | 1.4 | Inline code trong text |
| `code-block` | Fira Code | 14px / 0.875rem | 400 | 1.6 | Code blocks, terminal |
| `data-number` | Fira Code | 14px / 0.875rem | 500 | 1.4 | Điểm số, số liệu trong table |
| `data-large` | Fira Code | 24px / 1.5rem | 500 | 1.2 | KPI numbers, dashboard stats |

```css
code, .code-inline {
  font-family: var(--font-mono);
  font-size: 0.8125rem;   /* 13px */
  font-weight: 400;
  line-height: 1.4;
  background-color: var(--color-gray-100);
  color: var(--color-brand-800);
  padding: 0.125em 0.375em;
  border-radius: 3px;
  border: 1px solid var(--color-gray-200);
}

pre, .code-block {
  font-family: var(--font-mono);
  font-size: 0.875rem;    /* 14px */
  font-weight: 400;
  line-height: 1.6;
  background-color: var(--color-gray-900);
  color: var(--color-gray-100);
  padding: 1rem 1.25rem;
  border-radius: 8px;
  overflow-x: auto;
}

.data-number {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.01em;
}

.data-large {
  font-family: var(--font-mono);
  font-size: 1.5rem;      /* 24px */
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
}
```

### Table Typography

| Style | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| `table-header` | Source Sans 3 | 13px | 600 | `<th>` column headers |
| `table-cell` | Source Sans 3 | 14px | 400 | `<td>` cell content |
| `table-cell-num` | Fira Code | 14px | 400 | Điểm số, ngày tháng |

```css
th, .table-header {
  font-family: var(--font-body);
  font-size: 0.8125rem;   /* 13px */
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-gray-600);
}

td, .table-cell {
  font-family: var(--font-body);
  font-size: 0.875rem;    /* 14px */
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-gray-700);
}

.table-cell-numeric {
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
```

---

## 2.4 Font Weights (Named)

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `font-thin` | `--font-weight-thin` | 100 | Decorative display text (dùng hạn chế) |
| `font-light` | `--font-weight-light` | 300 | Large display text, sub-headings muted |
| `font-regular` | `--font-weight-regular` | 400 | Body text, default |
| `font-medium` | `--font-weight-medium` | 500 | Labels, slightly emphasized |
| `font-semibold` | `--font-weight-semibold` | 600 | Sub-headings, button text |
| `font-bold` | `--font-weight-bold` | 700 | Headings, strong emphasis |
| `font-extrabold` | `--font-weight-extrabold` | 800 | Hero headings, display |

```css
:root {
  --font-weight-thin:      100;
  --font-weight-light:     300;
  --font-weight-regular:   400;
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;
  --font-weight-extrabold: 800;
}
```

---

## 2.5 Responsive Typography (Fluid)

> Sử dụng clamp() để scale heading sizes giữa mobile và desktop

```css
/* Fluid heading scale — responsive auto-scaling */
.heading-1 { font-size: clamp(2rem, 5vw, 3.75rem); }       /* 32px → 60px */
.heading-2 { font-size: clamp(1.75rem, 4vw, 3rem); }        /* 28px → 48px */
.heading-3 { font-size: clamp(1.5rem, 3.5vw, 2.25rem); }    /* 24px → 36px */
.heading-4 { font-size: clamp(1.25rem, 2.5vw, 1.875rem); }  /* 20px → 30px */
.heading-5 { font-size: clamp(1.125rem, 2vw, 1.5rem); }     /* 18px → 24px */
.heading-6 { font-size: clamp(1rem, 1.5vw, 1.25rem); }      /* 16px → 20px */
```

---

## 2.6 Vietnamese Language Considerations

> Source Sans 3 hỗ trợ đầy đủ Latin Extended (Vietnamese diacritics)

```css
/* Vietnamese-specific rendering */
html[lang="vi"] body {
  font-family: var(--font-body);
  /* Source Sans 3 supports: ă, â, đ, ê, ô, ơ, ư và tất cả dấu */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Tăng line-height nhẹ cho text tiếng Việt (dấu cao) */
html[lang="vi"] .body,
html[lang="vi"] p {
  line-height: 1.7;  /* +0.1 so với default */
}

html[lang="vi"] .heading-1,
html[lang="vi"] .heading-2,
html[lang="vi"] .heading-3 {
  line-height: 1.3;  /* headings cần thêm space cho dấu */
}
```

---

## 2.7 Global Base Styles

```css
/* styles/typography.css — global base */

html {
  font-size: 16px; /* Base font size — DO NOT change */
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base-size);   /* 1rem = 16px */
  font-weight: var(--font-weight-regular);
  line-height: 1.6;
  color: var(--color-gray-700);
  background-color: var(--color-bg-page);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-800);
  margin-top: 0;
  margin-bottom: 0.5em;
}

h1 { @apply heading-1; }
h2 { @apply heading-2; }
h3 { @apply heading-3; }
h4 { @apply heading-4; }
h5 { @apply heading-5; }
h6 { @apply heading-6; }

p {
  margin-top: 0;
  margin-bottom: 1em;
  max-width: 65ch; /* Optimal line length for readability */
}

a {
  color: var(--color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
}

a:hover {
  color: var(--color-info-dark);
}

strong, b {
  font-weight: var(--font-weight-semibold);
}
```
