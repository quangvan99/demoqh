---
title: Borders, Radius & Shadow Tokens — THPT Quốc Học Huế
category: design-token/borders-shadows
version: 1.0.0
updated: 2026-03-11
---

# 🔲 Borders, Radius & Shadow Tokens

> Consistent depth, separation và focus visibility cho Government Education UI

---

## 4.1 Border Radius

| Token | CSS Variable | Value | Tailwind | Usage |
|-------|-------------|-------|----------|-------|
| `radius-none` | `--radius-none` | 0px | `rounded-none` | Tables full-width, flush elements |
| `radius-xs` | `--radius-xs` | 2px | `rounded-sm` | Inline badges, small tags |
| `radius-sm` | `--radius-sm` | 4px | `rounded` | Inputs, textarea, tags, chips |
| `radius-md` | `--radius-md` | 6px | `rounded-md` | Buttons, form elements |
| `radius-lg` | `--radius-lg` | 8px | `rounded-lg` | Cards, dropdowns, panels |
| `radius-xl` | `--radius-xl` | 12px | `rounded-xl` | Modals, dialogs, large cards |
| `radius-2xl` | `--radius-2xl` | 16px | `rounded-2xl` | Feature panels, app sections |
| `radius-3xl` | `--radius-3xl` | 24px | `rounded-3xl` | Featured/hero cards |
| `radius-full` | `--radius-full` | 9999px | `rounded-full` | Avatars, pills, toggle |

```css
:root {
  --radius-none: 0px;
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-3xl:  24px;
  --radius-full: 9999px;
}
```

### Radius Usage Guide

```
radius-none → Tables, horizontal rules, full-width bars
radius-xs   → Inline badges (e.g. "Mới", "Beta"), tooltip arrows
radius-sm   → Text inputs, selects, textarea, small tags
radius-md   → Buttons (all sizes), checkboxes, radios, switches
radius-lg   → Standard cards, dropdown menus, list boxes
radius-xl   → Modals, dialogs, sidebar panels, notifications
radius-2xl  → Dashboard panels, large info sections
radius-3xl  → Featured content cards, marketing panels
radius-full → Avatars, pill badges, toggle/switch, search bar
```

---

## 4.2 Border Widths

| Token | CSS Variable | Value | Tailwind | Usage |
|-------|-------------|-------|----------|-------|
| `border-0` | `--border-0` | 0px | `border-0` | Remove border |
| `border-1` | `--border-1` | 1px | `border` | Default border |
| `border-2` | `--border-2` | 2px | `border-2` | Active state, focus indicator |
| `border-4` | `--border-4` | 4px | `border-4` | Strong divider, error highlight |
| `border-8` | `--border-8` | 8px | `border-8` | Accent left-border cards |

```css
:root {
  --border-0: 0px;
  --border-1: 1px;
  --border-2: 2px;
  --border-4: 4px;
  --border-8: 8px;
}
```

---

## 4.3 Border Colors (Semantic)

| Token | CSS Variable | Hex | RGB | Usage |
|-------|-------------|-----|-----|-------|
| `border-default` | `--border-default` | `#E2E8F0` | rgb(226,232,240) | Standard input/card borders |
| `border-subtle` | `--border-subtle` | `#F1F5F9` | rgb(241,245,249) | Dividers, subtle separation |
| `border-strong` | `--border-strong` | `#CBD5E1` | rgb(203,213,225) | Table borders, emphasized |
| `border-focus` | `--border-focus` | `#0F766E` | rgb(15,118,110) | Focus state — brand teal |
| `border-brand` | `--border-brand` | `#0D9488` | rgb(13,148,136) | Active/selected elements |
| `border-error` | `--border-error` | `#EF4444` | rgb(239,68,68) | Input error state |
| `border-success` | `--border-success` | `#22C55E` | rgb(34,197,94) | Input success/valid state |
| `border-warning` | `--border-warning` | `#F59E0B` | rgb(245,158,11) | Input warning state |
| `border-info` | `--border-info` | `#38BDF8` | rgb(56,189,248) | Info highlight |
| `border-disabled` | `--border-disabled` | `#E2E8F0` | rgb(226,232,240) | Disabled inputs |

```css
:root {
  --border-default:  #E2E8F0;
  --border-subtle:   #F1F5F9;
  --border-strong:   #CBD5E1;
  --border-focus:    #0F766E;
  --border-brand:    #0D9488;
  --border-error:    #EF4444;
  --border-success:  #22C55E;
  --border-warning:  #F59E0B;
  --border-info:     #38BDF8;
  --border-disabled: #E2E8F0;
}
```

### Border Usage States

```css
/* Input default */
.input {
  border: var(--border-1) solid var(--border-default);
  border-radius: var(--radius-sm);
}

/* Input focus */
.input:focus {
  border-color: var(--border-focus);
  outline: none;
  box-shadow: var(--shadow-focus);
}

/* Input error */
.input.error {
  border-color: var(--border-error);
  box-shadow: var(--shadow-focus-error);
}

/* Input disabled */
.input:disabled {
  border-color: var(--border-disabled);
  background-color: var(--color-gray-100);
  cursor: not-allowed;
}
```

---

## 4.4 Shadow Scale

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `shadow-none` | `--shadow-none` | `none` | Flat/borderless elements |
| `shadow-xs` | `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle card lift, chip |
| `shadow-sm` | `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.06)` | Cards, form elements |
| `shadow-md` | `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)` | Dropdowns, popovers |
| `shadow-lg` | `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.06)` | Modals, sticky headers |
| `shadow-xl` | `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.06)` | Drawers, side panels |
| `shadow-2xl` | `--shadow-2xl` | `0 25px 50px -12px rgba(0,0,0,0.25)` | Full-screen overlays |
| `shadow-inner` | `--shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.05)` | Pressed states, concave inputs |
| `shadow-none` | `--shadow-none` | `0 0 #0000` | Remove shadow |

### Focus Ring Shadows (Accessibility)

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `shadow-focus` | `--shadow-focus` | `0 0 0 3px rgba(15,118,110,0.4)` | Default focus — brand teal |
| `shadow-focus-visible` | `--shadow-focus-visible` | `0 0 0 3px rgba(15,118,110,0.5), 0 0 0 1px #0F766E` | High visibility focus |
| `shadow-focus-error` | `--shadow-focus-error` | `0 0 0 3px rgba(220,38,38,0.4)` | Error input focus |
| `shadow-focus-success` | `--shadow-focus-success` | `0 0 0 3px rgba(22,163,74,0.4)` | Success input focus |
| `shadow-focus-info` | `--shadow-focus-info` | `0 0 0 3px rgba(3,105,161,0.4)` | Info/link focus |

```css
:root {
  --shadow-none:  none;
  --shadow-xs:    0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm:    0 1px 3px rgba(0, 0, 0, 0.10),
                  0 1px 2px -1px rgba(0, 0, 0, 0.06);
  --shadow-md:    0 4px 6px -1px rgba(0, 0, 0, 0.10),
                  0 2px 4px -2px rgba(0, 0, 0, 0.06);
  --shadow-lg:    0 10px 15px -3px rgba(0, 0, 0, 0.10),
                  0 4px 6px -4px rgba(0, 0, 0, 0.06);
  --shadow-xl:    0 20px 25px -5px rgba(0, 0, 0, 0.10),
                  0 8px 10px -6px rgba(0, 0, 0, 0.06);
  --shadow-2xl:   0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.05);

  /* Focus rings — WCAG 2.4.7 / 2.4.11 */
  --shadow-focus:         0 0 0 3px rgba(15, 118, 110, 0.40);
  --shadow-focus-visible: 0 0 0 3px rgba(15, 118, 110, 0.50),
                          0 0 0 1px #0F766E;
  --shadow-focus-error:   0 0 0 3px rgba(220, 38, 38, 0.40);
  --shadow-focus-success: 0 0 0 3px rgba(22, 163, 74, 0.40);
  --shadow-focus-info:    0 0 0 3px rgba(3, 105, 161, 0.40);
}
```

---

## 4.5 Tinted / Colored Shadows (Module-specific)

> Dùng cho module cards — tạo visual hierarchy theo màu module

| Module | Token | Value |
|--------|-------|-------|
| LMS | `--shadow-lms` | `0 4px 12px rgba(37,99,235,0.15)` |
| Thi kiểm tra | `--shadow-exam` | `0 4px 12px rgba(79,70,229,0.15)` |
| AI Điểm danh | `--shadow-ai` | `0 4px 12px rgba(8,145,178,0.15)` |
| Thư viện số | `--shadow-library` | `0 4px 12px rgba(180,83,9,0.15)` |
| Dashboard | `--shadow-dashboard` | `0 4px 12px rgba(15,118,110,0.15)` |

```css
:root {
  --shadow-lms:       0 4px 12px rgba(37, 99, 235, 0.15);
  --shadow-exam:      0 4px 12px rgba(79, 70, 229, 0.15);
  --shadow-ai:        0 4px 12px rgba(8, 145, 178, 0.15);
  --shadow-library:   0 4px 12px rgba(180, 83, 9, 0.15);
  --shadow-dashboard: 0 4px 12px rgba(15, 118, 110, 0.15);
}
```

---

## 4.6 Component-specific Border & Shadow Specs

### Card

```css
.card {
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);          /* 8px */
  box-shadow: var(--shadow-sm);
  background-color: var(--color-gray-0);
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-strong);
}

.card--elevated {
  border: none;
  box-shadow: var(--shadow-md);
}

.card--outlined {
  border: 2px solid var(--border-default);
  box-shadow: none;
}

.card--flat {
  border: none;
  box-shadow: none;
  background-color: var(--color-gray-50);
}
```

### Modal / Dialog

```css
.modal-overlay {
  background-color: rgba(15, 23, 42, 0.6);  /* gray-900 @ 60% */
  backdrop-filter: blur(4px);
}

.modal {
  border-radius: var(--radius-xl);           /* 12px */
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--color-gray-200);
}
```

### Dropdown / Menu

```css
.dropdown {
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);           /* 8px */
  box-shadow: var(--shadow-md);
  background: var(--color-gray-0);
}
```

### Tooltip

```css
.tooltip {
  border-radius: var(--radius-sm);           /* 4px */
  box-shadow: var(--shadow-md);
  border: none;
  background: var(--color-gray-900);
}
```

### Input Focus Appearance

```css
/* Global focus-visible rule — WCAG 2.4.11 (Level AA) */
:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus-visible);
}

/* Button focus override */
button:focus-visible,
[role="button"]:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.5),
              0 0 0 1px #0F766E;
}

/* Skip to content link */
.skip-link:focus {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 9999;
  padding: 12px 24px;
  background: var(--color-brand-700);
  color: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-weight: 600;
}
```
