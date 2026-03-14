---
title: Component Tokens — THPT Quốc Học Huế
category: design-token/components
version: 1.0.0
updated: 2026-03-11
---

# 🧩 Component-Level Tokens

> Full spec cho từng component: sizes, variants, states
> Tất cả interactive components phải đạt: 44×44px min touch target, visible focus ring

---

## 6.1 Button

### Size Tokens

| Size | Height | Padding X | Padding Y | Font Size | Radius | Min Width | Icon Size |
|------|--------|-----------|-----------|-----------|--------|-----------|-----------|
| `btn-xs` | 28px | 10px | 4px | 12px/0.75rem | 4px | 64px | 12px |
| `btn-sm` | 36px | 14px | 8px | 14px/0.875rem | 6px | 80px | 14px |
| `btn-md` | 44px | 20px | 10px | 15px/0.9375rem | 6px | 96px | 16px |
| `btn-lg` | 52px | 24px | 14px | 16px/1rem | 6px | 120px | 18px |
| `btn-xl` | 60px | 32px | 18px | 18px/1.125rem | 8px | 140px | 20px |

> ⚠️ `btn-xs` và `btn-sm` không đủ 44px touch target — chỉ dùng trong desktop UI, KHÔNG dùng trên mobile

### Variant Color Tokens

#### btn-primary (Teal Brand)

| State | Background | Text | Border | Shadow |
|-------|-----------|------|--------|--------|
| default | `#0F766E` | `#FFFFFF` | transparent | `shadow-xs` |
| hover | `#0D9488` | `#FFFFFF` | transparent | `shadow-sm` |
| active | `#115E59` | `#FFFFFF` | transparent | `shadow-inner` |
| focus | `#0F766E` | `#FFFFFF` | transparent | `shadow-focus` |
| disabled | `#94A3B8` | `#FFFFFF` | transparent | none |
| loading | `#0F766E` opacity:70% | `#FFFFFF` | transparent | none |

#### btn-secondary (Teal Light)

| State | Background | Text | Border | Shadow |
|-------|-----------|------|--------|--------|
| default | `#F0FDFA` | `#0F766E` | `#0D9488` 1px | none |
| hover | `#CCFBF1` | `#115E59` | `#0F766E` 1px | none |
| active | `#99F6E4` | `#115E59` | `#0F766E` 2px | none |
| focus | `#F0FDFA` | `#0F766E` | `#0F766E` 1px | `shadow-focus` |
| disabled | `#F8FAFC` | `#94A3B8` | `#E2E8F0` 1px | none |

#### btn-danger (Red)

| State | Background | Text | Border | Shadow |
|-------|-----------|------|--------|--------|
| default | `#DC2626` | `#FFFFFF` | transparent | `shadow-xs` |
| hover | `#B91C1C` | `#FFFFFF` | transparent | `shadow-sm` |
| active | `#991B1B` | `#FFFFFF` | transparent | `shadow-inner` |
| focus | `#DC2626` | `#FFFFFF` | transparent | `shadow-focus-error` |
| disabled | `#94A3B8` | `#FFFFFF` | transparent | none |

#### btn-ghost

| State | Background | Text | Border |
|-------|-----------|------|--------|
| default | transparent | `#334155` | transparent |
| hover | `#F1F5F9` | `#0F172A` | transparent |
| active | `#E2E8F0` | `#0F172A` | transparent |
| focus | transparent | `#334155` | transparent (+ shadow-focus) |
| disabled | transparent | `#94A3B8` | transparent |

#### btn-outline

| State | Background | Text | Border |
|-------|-----------|------|--------|
| default | transparent | `#334155` | `#CBD5E1` 1px |
| hover | `#F8FAFC` | `#0F172A` | `#94A3B8` 1px |
| active | `#F1F5F9` | `#0F172A` | `#64748B` 1px |
| focus | transparent | `#334155` | `#0F766E` 1px (+ shadow-focus) |

#### btn-link

| State | Background | Text | Decoration |
|-------|-----------|------|------------|
| default | transparent | `#0369A1` | underline |
| hover | transparent | `#0C4A6E` | underline thick |
| active | transparent | `#0C4A6E` | underline |
| focus | transparent | `#0369A1` | underline + shadow-focus-info |

### Button CSS (Full spec)

```css
/* Base button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  transition: background-color  var(--duration-normal) var(--ease-out),
              border-color      var(--duration-normal) var(--ease-out),
              box-shadow        var(--duration-normal) var(--ease-out),
              color             var(--duration-normal) var(--ease-out),
              transform         var(--duration-fast)   var(--ease-out);
}

.btn:focus-visible { box-shadow: var(--shadow-focus-visible); }
.btn:active        { transform: scale(0.97); }
.btn:disabled,
.btn[aria-disabled="true"] {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.5;
}

/* Sizes */
.btn-xs { height: 28px;  padding: 4px  10px; font-size: 0.75rem;    border-radius: 4px; }
.btn-sm { height: 36px;  padding: 8px  14px; font-size: 0.875rem;   border-radius: 6px; }
.btn-md { height: 44px;  padding: 10px 20px; font-size: 0.9375rem;  border-radius: 6px; }
.btn-lg { height: 52px;  padding: 14px 24px; font-size: 1rem;       border-radius: 6px; }
.btn-xl { height: 60px;  padding: 18px 32px; font-size: 1.125rem;   border-radius: 8px; }

/* Variants */
.btn-primary {
  background-color: #0F766E; color: #FFFFFF;
}
.btn-primary:hover  { background-color: #0D9488; box-shadow: var(--shadow-sm); }
.btn-primary:active { background-color: #115E59; }

.btn-danger {
  background-color: #DC2626; color: #FFFFFF;
}
.btn-danger:hover { background-color: #B91C1C; }
.btn-danger:focus-visible { box-shadow: var(--shadow-focus-error); }
```

---

## 6.2 Form Inputs

### Input / Textarea / Select Tokens

| State | Border | Background | Text | Shadow |
|-------|--------|-----------|------|--------|
| default | `#CBD5E1` 1px | `#FFFFFF` | `#334155` | none |
| focus | `#0F766E` 1px | `#FFFFFF` | `#334155` | `shadow-focus` |
| error | `#EF4444` 1px | `#FFFFFF` | `#334155` | `shadow-focus-error` |
| success | `#22C55E` 1px | `#FFFFFF` | `#334155` | `shadow-focus-success` |
| disabled | `#E2E8F0` 1px | `#F8FAFC` | `#94A3B8` | none |
| readonly | `#E2E8F0` 1px | `#F1F5F9` | `#475569` | none |

### Sizes

| Size | Height | Padding X | Padding Y | Font Size | Radius |
|------|--------|-----------|-----------|-----------|--------|
| `input-sm` | 36px | 12px | 6px | 14px | 4px |
| `input-md` | 44px | 14px | 10px | 16px | 4px |
| `input-lg` | 52px | 16px | 14px | 18px | 4px |

### Label & Helper Text

```css
.form-label {
  font-size: 0.875rem;           /* 14px */
  font-weight: 500;
  color: var(--color-gray-700);
  margin-bottom: 0.375rem;       /* 6px */
  display: block;
}

.form-label.required::after {
  content: ' *';
  color: var(--color-error);
  font-weight: 600;
}

.form-helper {
  font-size: 0.75rem;            /* 12px */
  color: var(--color-gray-500);
  margin-top: 0.25rem;           /* 4px */
}

.form-error-msg {
  font-size: 0.75rem;
  color: var(--color-error-dark);
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
```

### Checkbox / Radio

| Element | Size | Color (checked) | Border | Radius |
|---------|------|----------------|--------|--------|
| Checkbox | 18×18px | `#0F766E` fill | `#CBD5E1` → `#0F766E` | 4px |
| Radio | 18×18px | `#0F766E` dot | `#CBD5E1` → `#0F766E` | full |

```css
.checkbox {
  width: 18px; height: 18px;
  border: 1.5px solid var(--color-gray-400);
  border-radius: var(--radius-sm);
  background: white;
  cursor: pointer;
  accent-color: var(--color-brand-700);
}

.checkbox:checked {
  background-color: var(--color-brand-700);
  border-color:     var(--color-brand-700);
}
```

### Toggle Switch

| State | Width | Height | Track bg | Knob |
|-------|-------|--------|---------|------|
| off | 44px | 24px | `#CBD5E1` | white, shadow-sm |
| on | 44px | 24px | `#0F766E` | white, shadow-sm |
| disabled | 44px | 24px | `#E2E8F0` | `#F8FAFC` |

---

## 6.3 Cards

### Variants

| Variant | Border | Background | Shadow | Radius |
|---------|--------|-----------|--------|--------|
| `card-default` | `#E2E8F0` 1px | `#FFFFFF` | `shadow-sm` | 8px |
| `card-elevated` | none | `#FFFFFF` | `shadow-md` | 8px |
| `card-outlined` | `#E2E8F0` 2px | `#FFFFFF` | none | 8px |
| `card-flat` | none | `#F8FAFC` | none | 8px |
| `card-brand` | `#0D9488` 1px | `#F0FDFA` | `shadow-sm` | 8px |

### Padding Specs

| Area | Compact | Default | Comfortable |
|------|---------|---------|-------------|
| Header | 12px 16px | 16px 20px | 20px 24px |
| Body | 12px 16px | 16px 20px | 20px 24px |
| Footer | 10px 16px | 12px 20px | 16px 24px |

```css
.card { border-radius: var(--radius-lg); overflow: hidden; }
.card-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-default);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-gray-800);
}
.card-body   { padding: 1.25rem; }
.card-footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--border-default);
  background: var(--color-gray-50);
}
```

---

## 6.4 Tables

### Header Row

| Property | Value |
|----------|-------|
| Background | `#F8FAFC` (gray-50) |
| Text color | `#475569` (gray-600) |
| Font size | 13px |
| Font weight | 600 |
| Letter spacing | 0.03em |
| Text transform | uppercase |
| Border bottom | 2px solid `#E2E8F0` |
| Padding | 12px 16px |
| Min height | 44px |

### Data Row

| Property | Normal | Striped (even) | Hover |
|----------|--------|----------------|-------|
| Background | `#FFFFFF` | `#F8FAFC` | `#F0FDFA` |
| Text color | `#334155` | `#334155` | `#0F172A` |
| Border bottom | `#F1F5F9` 1px | `#F1F5F9` 1px | `#E2E8F0` 1px |
| Row height | 48px (default) | 48px | 48px |
| Padding | 12px 16px | 12px 16px | 12px 16px |

### Sticky Header

```css
.table-wrapper {
  overflow: auto;
  max-height: 600px;
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
}

.table-sticky thead th {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #F8FAFC;
  box-shadow: 0 1px 0 var(--border-strong);
}

/* Frozen first column */
.table-freeze td:first-child,
.table-freeze th:first-child {
  position: sticky;
  left: 0;
  z-index: 5;
  background: inherit;
  box-shadow: 1px 0 0 var(--border-default);
}
```

---

## 6.5 Badges / Tags

### Sizes

| Size | Height | Padding X | Font Size | Radius | Usage |
|------|--------|-----------|-----------|--------|-------|
| `badge-xs` | 16px | 5px | 10px | 2px | Notification dot + number |
| `badge-sm` | 20px | 7px | 11px | 4px | Status inline |
| `badge-md` | 24px | 10px | 12px | 4px | Default badge |
| `badge-pill` | 20px | 10px | 11px | 9999px | Role, category pill |

### Color Variants (Semantic)

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| `badge-success` | `#DCFCE7` | `#14532D` | `#86EFAC` |
| `badge-warning` | `#FEF3C7` | `#78350F` | `#FCD34D` |
| `badge-error` | `#FEE2E2` | `#7F1D1D` | `#FCA5A5` |
| `badge-info` | `#E0F2FE` | `#0C4A6E` | `#7DD3FC` |
| `badge-neutral` | `#F1F5F9` | `#334155` | `#CBD5E1` |
| `badge-brand` | `#CCFBF1` | `#134E4A` | `#5EEAD4` |

### Role Badges

| Role | Background | Text | Border |
|------|-----------|------|--------|
| Học sinh | `#E0F2FE` | `#0C4A6E` | `#0EA5E9` |
| Giáo viên | `#D1FAE5` | `#064E3B` | `#10B981` |
| BGH | `#CCFBF1` | `#134E4A` | `#0F766E` |
| Admin | `#EDE9FE` | `#3B0764` | `#7C3AED` |
| Sở GDĐT | `#F1F5F9` | `#0F172A` | `#475569` |

---

## 6.6 Avatar

### Sizes

| Size | px | Font Size | Border | Usage |
|------|-----|-----------|--------|-------|
| `avatar-2xs` | 24px | 9px | — | Table rows, dense lists |
| `avatar-xs` | 32px | 12px | — | Compact lists |
| `avatar-sm` | 40px | 14px | 2px white | Comment threads |
| `avatar-md` | 48px | 16px | 2px white | Default, card headers |
| `avatar-lg` | 56px | 18px | 3px white | Profile preview |
| `avatar-xl` | 64px | 20px | 3px white | User settings page |
| `avatar-2xl` | 80px | 24px | 4px white | Profile page |
| `avatar-3xl` | 96px | 28px | 4px white | Profile hero |

### Role Avatar Colors (bg for initials)

| Role | Background | Initials color |
|------|-----------|----------------|
| Học sinh | `#0EA5E9` | `#FFFFFF` |
| Giáo viên | `#10B981` | `#FFFFFF` |
| BGH | `#0F766E` | `#FFFFFF` |
| Admin | `#7C3AED` | `#FFFFFF` |
| Sở GDĐT | `#475569` | `#FFFFFF` |

```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-weight: 600;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.avatar-2xs { width: 24px; height: 24px; font-size: 9px;  }
.avatar-xs  { width: 32px; height: 32px; font-size: 12px; }
.avatar-sm  { width: 40px; height: 40px; font-size: 14px; }
.avatar-md  { width: 48px; height: 48px; font-size: 16px; }
.avatar-lg  { width: 56px; height: 56px; font-size: 18px; }
.avatar-xl  { width: 64px; height: 64px; font-size: 20px; }
.avatar-2xl { width: 80px; height: 80px; font-size: 24px; }
.avatar-3xl { width: 96px; height: 96px; font-size: 28px; }
```

---

## 6.7 Navigation / Sidebar

### Sidebar Tokens

| Property | Value | Token |
|----------|-------|-------|
| Width expanded | 256px | `--sidebar-width` |
| Width collapsed | 64px | `--sidebar-collapsed-width` |
| Background | `#FFFFFF` | — |
| Border right | `#E2E8F0` 1px | `--border-default` |
| Shadow | `shadow-sm` | — |
| Transition | 300ms ease-in-out | — |

### Nav Item Tokens

| Property | Default | Hover | Active | Disabled |
|----------|---------|-------|--------|---------|
| Height | 44px | 44px | 44px | 44px |
| Padding | 10px 16px | 10px 16px | 10px 16px | 10px 16px |
| Background | transparent | `#F0FDFA` | `#CCFBF1` | transparent |
| Text color | `#334155` | `#0F766E` | `#115E59` | `#94A3B8` |
| Icon color | `#64748B` | `#0F766E` | `#0F766E` | `#CBD5E1` |
| Border-left | none | none | `#0F766E` 3px | none |
| Border-radius | 6px | 6px | 6px | 6px |
| Font-weight | 400 | 500 | 600 | 400 |

### Top Navbar Tokens

| Property | Desktop | Mobile |
|----------|---------|--------|
| Height | 64px | 56px |
| Background | `#FFFFFF` | `#FFFFFF` |
| Border bottom | `#E2E8F0` 1px | `#E2E8F0` 1px |
| Shadow | `shadow-sm` | `shadow-sm` |
| Z-index | 200 | 200 |
| Padding X | 24px | 16px |
| Position | fixed top-0 | fixed top-0 |

---

## 6.8 Modal / Dialog

### Size Tokens

| Size | Width | Max Height | Radius |
|------|-------|-----------|--------|
| `modal-sm` | 400px | 90vh | 12px |
| `modal-md` | 560px | 90vh | 12px |
| `modal-lg` | 720px | 90vh | 12px |
| `modal-xl` | 900px | 90vh | 12px |
| `modal-full` | 100vw | 100vh | 0px |

### Overlay

| Property | Value |
|----------|-------|
| Background | `rgba(15,23,42, 0.6)` |
| Backdrop-filter | `blur(4px)` |
| Z-index | 400 |

### Structure Padding

| Area | Padding |
|------|---------|
| Header | 20px 24px |
| Body | 24px |
| Footer | 16px 24px |
| Footer button gap | 12px |

```css
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal {
  background: var(--color-gray-0);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--color-gray-200);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-gray-800);
  flex-shrink: 0;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0;
  background: var(--color-gray-50);
}
```

---

## 6.9 Tooltip

| Property | Value |
|----------|-------|
| Max width | 280px |
| Padding | 6px 10px |
| Background | `#0F172A` (gray-900) |
| Text color | `#F8FAFC` (gray-50) |
| Font size | 12px |
| Font weight | 400 |
| Line height | 1.4 |
| Border radius | 4px |
| Shadow | `shadow-md` |
| Arrow size | 6px |
| Z-index | 600 |

```css
.tooltip {
  max-width: 280px;
  padding: 0.375rem 0.625rem;
  background: var(--color-gray-900);
  color: var(--color-gray-50);
  font-family: var(--font-body);
  font-size: 0.75rem;
  line-height: 1.4;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  z-index: var(--z-tooltip);
  pointer-events: none;
}
```

---

## 6.10 Notification / Alert / Toast

### Alert (Inline)

| Variant | Background | Border left | Icon color | Title color | Text color |
|---------|-----------|-------------|-----------|-------------|------------|
| success | `#F0FDF4` | `#16A34A` 4px | `#16A34A` | `#14532D` | `#334155` |
| warning | `#FFFBEB` | `#D97706` 4px | `#D97706` | `#78350F` | `#334155` |
| error | `#FEF2F2` | `#DC2626` 4px | `#DC2626` | `#7F1D1D` | `#334155` |
| info | `#F0F9FF` | `#0369A1` 4px | `#0369A1` | `#0C4A6E` | `#334155` |

### Alert Structure

```
[Icon 20px] [Title (semibold, 14px)]
            [Message (regular, 14px)]
                                      [×  close button]
```

```css
.alert {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  border-left: 4px solid;
}

.alert-success { background: #F0FDF4; border-color: #16A34A; }
.alert-warning { background: #FFFBEB; border-color: #D97706; }
.alert-error   { background: #FEF2F2; border-color: #DC2626; }
.alert-info    { background: #F0F9FF; border-color: #0369A1; }

.alert-title {
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}
.alert-body { font-size: 0.875rem; line-height: 1.5; }
```

### Toast (Floating)

| Property | Value |
|----------|-------|
| Position | Fixed, bottom-right (desktop) / bottom-center (mobile) |
| Width | 360px desktop / calc(100vw - 32px) mobile |
| Padding | 14px 16px |
| Border radius | 8px |
| Shadow | `shadow-lg` |
| Z-index | 500 |
| Stack gap | 8px |
| Auto-dismiss | 5000ms (success/info), 8000ms (warning), manual (error) |

```css
.toast-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: var(--z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  pointer-events: none;
}

.toast {
  width: 360px;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  pointer-events: all;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  border: 1px solid;
}

@media (max-width: 640px) {
  .toast-container {
    right: 1rem; left: 1rem; bottom: 1rem;
  }
  .toast { width: 100%; }
}
```
