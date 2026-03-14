---
title: Layout, Grid & Breakpoints — THPT Quốc Học Huế
category: design-token/layout
version: 1.0.0
updated: 2026-03-11
---

# 📐 Layout, Grid & Breakpoints

> Responsive-first layout system — Mobile 375px → Large Desktop 1536px

---

## 7.1 Breakpoints

| Token | CSS Variable | px | Tailwind prefix | Target device |
|-------|-------------|-----|-----------------|---------------|
| `screen-xs` | `--screen-xs` | 375px | — (mobile default) | Small phone (iPhone SE) |
| `screen-sm` | `--screen-sm` | 640px | `sm:` | Phone landscape, large phone |
| `screen-md` | `--screen-md` | 768px | `md:` | Tablet portrait |
| `screen-lg` | `--screen-lg` | 1024px | `lg:` | Tablet landscape, laptop |
| `screen-xl` | `--screen-xl` | 1280px | `xl:` | Desktop |
| `screen-2xl` | `--screen-2xl` | 1536px | `2xl:` | Large desktop, wide monitor |

```css
:root {
  --screen-xs:  375px;
  --screen-sm:  640px;
  --screen-md:  768px;
  --screen-lg:  1024px;
  --screen-xl:  1280px;
  --screen-2xl: 1536px;
}
```

### Breakpoint Usage Patterns

```css
/* Mobile-first approach */

/* Base (xs: 375px+) — Mobile default */
.component { ... }

/* sm: 640px+ — Phone landscape */
@media (min-width: 640px) { .component { ... } }

/* md: 768px+ — Tablet */
@media (min-width: 768px) { .component { ... } }

/* lg: 1024px+ — Laptop (sidebar appears) */
@media (min-width: 1024px) { .component { ... } }

/* xl: 1280px+ — Desktop */
@media (min-width: 1280px) { .component { ... } }

/* 2xl: 1536px+ — Wide desktop */
@media (min-width: 1536px) { .component { ... } }
```

---

## 7.2 Container Widths

| Layout Type | Max Width | Horizontal Padding | Usage |
|-------------|-----------|-------------------|-------|
| `container-narrow` | 640px | 24px | Forms, auth pages, simple content |
| `container-content` | 768px | 24px | Article, blog, documentation |
| `container-default` | 1024px | 32px | Standard app pages |
| `container-wide` | 1280px | 48px | Dashboard, wide tables |
| `container-full` | 1536px | 64px | Ultra-wide layouts |

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--space-page-x);
}

.container-narrow  { max-width: 640px;  }
.container-content { max-width: 768px;  }
.container-default { max-width: 1024px; }
.container-wide    { max-width: 1280px; }
.container-full    { max-width: 1536px; }

/* Responsive padding */
@media (max-width: 640px) {
  .container { padding-inline: 1rem; }      /* 16px mobile */
}
@media (min-width: 640px) and (max-width: 1024px) {
  .container { padding-inline: 1.5rem; }    /* 24px tablet */
}
@media (min-width: 1024px) {
  .container { padding-inline: 2rem; }      /* 32px desktop */
}
@media (min-width: 1280px) {
  .container-wide { padding-inline: 3rem; } /* 48px wide */
}
```

---

## 7.3 Grid System

### 12-Column Grid

| Breakpoint | Columns | Gutter | Margin |
|-----------|---------|--------|--------|
| xs (375px) | 4 cols | 16px | 16px |
| sm (640px) | 8 cols | 16px | 24px |
| md (768px) | 12 cols | 24px | 24px |
| lg (1024px) | 12 cols | 24px | 32px |
| xl (1280px) | 12 cols | 32px | 48px |
| 2xl (1536px) | 12 cols | 32px | 64px |

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;  /* 16px default */
}

@media (min-width: 768px)  { .grid-12 { gap: 1.5rem; } }   /* 24px */
@media (min-width: 1280px) { .grid-12 { gap: 2rem; } }     /* 32px */

/* Tailwind classes */
/* grid grid-cols-12 gap-4 md:gap-6 xl:gap-8 */
```

### Common Layout Patterns

#### Sidebar + Content (Desktop)

```css
/* Sidebar 256px + auto content */
.layout-sidebar-content {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

/* Sidebar collapsed */
.layout-sidebar-content.collapsed {
  grid-template-columns: var(--sidebar-collapsed-width) 1fr;
}

/* Mobile: sidebar becomes drawer */
@media (max-width: 1023px) {
  .layout-sidebar-content {
    grid-template-columns: 1fr;
  }
}
```

#### Common Column Layouts

```
2-col equal:       col-span-6  col-span-6
2-col 1/3 + 2/3:  col-span-4  col-span-8
3-col equal:       col-span-4  col-span-4  col-span-4
4-col equal:       col-span-3  col-span-3  col-span-3  col-span-3
Dashboard (main+side): col-span-8  col-span-4
Narrow form:       col-span-6 col-start-4 (centered)
```

```html
<!-- Tailwind usage -->
<div class="grid grid-cols-12 gap-6">
  <!-- 2-col -->
  <div class="col-span-12 md:col-span-6">...</div>
  <div class="col-span-12 md:col-span-6">...</div>

  <!-- Dashboard: main + sidebar -->
  <main class="col-span-12 lg:col-span-8">...</main>
  <aside class="col-span-12 lg:col-span-4">...</aside>

  <!-- 4-col card grid -->
  <div class="col-span-12 sm:col-span-6 xl:col-span-3">...</div>
  <div class="col-span-12 sm:col-span-6 xl:col-span-3">...</div>
  <div class="col-span-12 sm:col-span-6 xl:col-span-3">...</div>
  <div class="col-span-12 sm:col-span-6 xl:col-span-3">...</div>
</div>
```

---

## 7.4 Z-Index Scale

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `z-base` | `--z-base` | 0 | Normal flow elements |
| `z-raised` | `--z-raised` | 10 | Cards hover, sticky table cells |
| `z-dropdown` | `--z-dropdown` | 100 | Dropdowns, select menus, popovers |
| `z-sticky` | `--z-sticky` | 200 | Sticky table headers, fixed top bar |
| `z-overlay` | `--z-overlay` | 300 | Backdrop overlays |
| `z-modal` | `--z-modal` | 400 | Modals, dialogs, drawers |
| `z-toast` | `--z-toast` | 500 | Toast notifications |
| `z-tooltip` | `--z-tooltip` | 600 | Tooltips (always on top of modals) |
| `z-max` | `--z-max` | 9999 | Critical system overlays, dev tools |

```css
:root {
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-toast:    500;
  --z-tooltip:  600;
  --z-max:      9999;
}
```

### Z-Index Stack Diagram

```
z: 9999 ──── 🔧 Dev/admin critical overlays
z: 600  ──── 💬 Tooltips
z: 500  ──── 🔔 Toast notifications
z: 400  ──── 🪟 Modals, dialogs, drawers
z: 300  ──── 🌫️  Backdrop overlays
z: 200  ──── 📌 Fixed navbar, sticky headers
z: 100  ──── 📋 Dropdowns, select menus
z: 10   ──── 🎴 Hovered cards, sticky cells
z: 0    ──── 📄 Normal page content
```

---

## 7.5 App Shell Layout

> Complete app structure cho Smart School Management System

### Structure Overview

```
┌──────────────────────────────────────────────────┐
│  NAVBAR (fixed, 64px height, z:200)              │
│  [Logo] [Breadcrumb] [Search] [Notif] [Avatar]   │
├──────────┬───────────────────────────────────────┤
│          │                                       │
│ SIDEBAR  │  MAIN CONTENT                         │
│ (fixed)  │  (scrollable)                         │
│ 256px    │  padding: 24-32px                     │
│ (64px    │                                       │
│  when    │                                       │
│ collapsed│                                       │
│          │                                       │
│          │                                       │
├──────────┴───────────────────────────────────────┤
│  FOOTER (optional, 48px)                         │
└──────────────────────────────────────────────────┘
```

### App Shell Tokens

| Element | Property | Value |
|---------|----------|-------|
| Navbar | Height | 64px desktop / 56px mobile |
| Navbar | Background | `#FFFFFF` |
| Navbar | Border bottom | `#E2E8F0` 1px |
| Navbar | Z-index | 200 |
| Navbar | Position | fixed top-0 left-0 right-0 |
| Sidebar | Width (expanded) | 256px |
| Sidebar | Width (collapsed) | 64px |
| Sidebar | Background | `#FFFFFF` |
| Sidebar | Border right | `#E2E8F0` 1px |
| Sidebar | Z-index | 10 (raised) |
| Sidebar | Position | fixed left-0, top: 64px |
| Main content | Margin left | 256px → 64px (collapsed) |
| Main content | Margin top | 64px (navbar height) |
| Main content | Padding | 24px all sides |
| Main content | Min height | calc(100vh - 64px) |
| Footer | Height | 48px |
| Footer | Background | `#F8FAFC` |
| Footer | Border top | `#E2E8F0` 1px |

### Angular App Shell CSS

```css
/* styles/app-shell.css */

.app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-page);
}

/* ── Navbar ── */
.app-navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;
  background: var(--color-gray-0);
  border-bottom: 1px solid var(--border-default);
  box-shadow: var(--shadow-sm);
  z-index: var(--z-sticky);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
}

@media (max-width: 1023px) {
  .app-navbar { height: 56px; padding: 0 1rem; }
}

/* ── Sidebar ── */
.app-sidebar {
  position: fixed;
  left: 0;
  top: 64px;
  bottom: 0;
  width: var(--sidebar-width);        /* 256px */
  background: var(--color-gray-0);
  border-right: 1px solid var(--border-default);
  z-index: var(--z-raised);
  overflow-y: auto;
  overflow-x: hidden;
  transition: width var(--duration-slow) var(--ease-in-out);
}

.app-sidebar.collapsed {
  width: var(--sidebar-collapsed-width); /* 64px */
}

@media (max-width: 1023px) {
  .app-sidebar {
    top: 56px;
    transform: translateX(-100%);
    transition: transform var(--duration-slow) var(--ease-in-out);
    z-index: var(--z-modal);
    width: var(--sidebar-width);
  }

  .app-sidebar.open {
    transform: translateX(0);
  }

  .app-sidebar-overlay {
    position: fixed;
    inset: 56px 0 0 0;
    background: rgba(15,23,42,0.4);
    z-index: calc(var(--z-modal) - 1);
  }
}

/* ── Main Content ── */
.app-main {
  margin-top: 64px;
  margin-left: var(--sidebar-width);   /* 256px */
  min-height: calc(100vh - 64px);
  padding: var(--space-layout-sm);     /* 24px */
  transition: margin-left var(--duration-slow) var(--ease-in-out);
}

.app-main.sidebar-collapsed {
  margin-left: var(--sidebar-collapsed-width); /* 64px */
}

@media (max-width: 1023px) {
  .app-main {
    margin-top: 56px;
    margin-left: 0;
    padding: 1rem;
  }
}

/* ── Footer ── */
.app-footer {
  height: 48px;
  background: var(--color-gray-50);
  border-top: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 0.75rem;
  color: var(--color-gray-500);
}
```

### Angular Component Structure

```typescript
// app-shell.component.ts structure
/*
AppShellComponent
  ├── NavbarComponent
  │     ├── LogoComponent
  │     ├── BreadcrumbComponent
  │     ├── SearchBarComponent
  │     ├── NotificationBellComponent
  │     └── UserAvatarMenuComponent
  │
  ├── SidebarComponent
  │     ├── SidebarNavGroupComponent (×n)
  │     │     └── SidebarNavItemComponent (×n)
  │     └── SidebarFooterComponent
  │
  ├── <router-outlet>  (main content)
  │
  └── AppFooterComponent (optional)
*/
```

---

## 7.6 Page-level Layout Patterns

### Dashboard Page

```
┌─────────────────────────────────────┐
│ Page Header (title + actions)       │  height: auto, mb: 24px
├──────┬──────┬──────┬────────────────┤
│ KPI  │ KPI  │ KPI  │ KPI            │  4 col: col-span-3 each
├──────┴──────┴──────┴────────────────┤
│                              │       │  8 + 4 col split
│  Chart (line/bar)            │ Stats │
│                              │       │
├─────────────────────────────────────┤
│ Recent Activity Table               │  12 col
└─────────────────────────────────────┘
```

### List / Table Page

```
┌─────────────────────────────────────┐
│ [Title]            [+ Add] [Export] │  justify-between
├─────────────────────────────────────┤
│ [Search] [Filter] [Status▾]         │  filter bar
├─────────────────────────────────────┤
│ TABLE                               │  full width, sticky header
│ ...rows...                          │
├─────────────────────────────────────┤
│ [Prev] [1][2][3] [Next]  20/page▾   │  pagination
└─────────────────────────────────────┘
```

### Form Page

```
┌─────────────────────────────────────┐
│ Page title + breadcrumb             │
├────────────────────────────┬────────┤
│                             │       │  8 + 4 (form + help)
│  Form sections              │ Help  │
│  ─── Section 1 ──────────  │ Panel │
│  [field] [field]            │       │
│  [field] [field]            │       │
│  ─── Section 2 ──────────  │       │
│  ...                        │       │
├────────────────────────────┴────────┤
│             [Cancel] [Save]         │  sticky footer on mobile
└─────────────────────────────────────┘
```

---

## 7.7 Scroll Behavior

```css
/* Smooth scroll for anchor navigation */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

/* Scroll margin for fixed navbar */
[id] {
  scroll-margin-top: calc(64px + 1rem);
}

/* Custom scrollbar (WebKit) */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-gray-100);
}

::-webkit-scrollbar-thumb {
  background: var(--color-gray-300);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-400);
}
```
