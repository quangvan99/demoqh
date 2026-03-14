---
title: Motion & Animation Tokens — THPT Quốc Học Huế
category: design-token/motion
version: 1.0.0
updated: 2026-03-11
---

# ✨ Motion & Animation Tokens

> Triết lý: Animation phải có **mục đích rõ ràng** — communicate state, guide attention, provide feedback
> Anti-patterns: Loading screens thuần cosmetic, intro animations, AI purple/pink effects
> Standard: WCAG 2.3.3 — respect `prefers-reduced-motion`

---

## 5.1 Duration Tokens

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `duration-instant` | `--duration-instant` | 0ms | Immediate state changes, no animation needed |
| `duration-fast` | `--duration-fast` | 100ms | Icon swaps, checkboxes, toggle flips |
| `duration-normal` | `--duration-normal` | 200ms | Hover states, focus rings, color transitions |
| `duration-moderate` | `--duration-moderate` | 300ms | Dropdowns appear, tooltips, badge updates |
| `duration-slow` | `--duration-slow` | 400ms | Modals enter/exit, drawers, sidebars |
| `duration-slower` | `--duration-slower` | 600ms | Page transitions, large content reveals |
| `duration-deliberate` | `--duration-deliberate` | 800ms | Onboarding flows, guided tours |

```css
:root {
  --duration-instant:    0ms;
  --duration-fast:       100ms;
  --duration-normal:     200ms;
  --duration-moderate:   300ms;
  --duration-slow:       400ms;
  --duration-slower:     600ms;
  --duration-deliberate: 800ms;
}
```

### Duration Decision Guide

```
0ms   (instant)   → Input value changes, tab panel content swap
100ms (fast)      → Checkbox check ✓, radio select, icon change, toggle
200ms (normal)    → Button hover bg, link underline, input border color, focus ring
300ms (moderate)  → Tooltip appear, dropdown open, menu unfold, badge count
400ms (slow)      → Modal enter, drawer slide, sidebar collapse/expand
600ms (slower)    → Page route transition, large list animation, chart draw
800ms (deliberate)→ Onboarding step, celebration animation, progress completion
```

---

## 5.2 Easing Functions

| Token | CSS Variable | Value | Best for |
|-------|-------------|-------|---------|
| `ease-linear` | `--ease-linear` | `linear` | Progress bars, loading spinners |
| `ease-in` | `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting (leaving screen) |
| `ease-out` | `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering — **most UI elements** |
| `ease-in-out` | `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Bidirectional moves (expand/collapse) |
| `ease-spring` | `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful bounce — icons, like buttons |
| `ease-overshoot` | `--ease-overshoot` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Dropdown pop, modal arrival |
| `ease-sharp` | `--ease-sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | Quick in-out, dismissals |

```css
:root {
  --ease-linear:    linear;
  --ease-in:        cubic-bezier(0.4, 0, 1, 1);
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-overshoot: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-sharp:     cubic-bezier(0.4, 0, 0.6, 1);
}
```

### Easing Pairing Guide

```
Enter  (appear/open)  → ease-out  + normal/moderate duration
Exit   (disappear)    → ease-in   + fast/normal duration
Toggle (both ways)    → ease-in-out + moderate duration
Bounce (fun confirm)  → ease-spring + fast duration
Pop    (modal/dialog) → ease-overshoot + moderate duration
```

---

## 5.3 Transition Presets

> Tailwind-compatible utility classes — định nghĩa trong global CSS

### Standard Transitions

```css
/* Copy-paste vào global styles, hoặc dùng @layer utilities trong Tailwind */

.transition-colors {
  transition-property: color, background-color, border-color,
                       text-decoration-color, fill, stroke;
  transition-timing-function: var(--ease-out);
  transition-duration: var(--duration-normal);  /* 200ms */
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: var(--ease-out);
  transition-duration: var(--duration-normal);  /* 200ms */
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: var(--ease-out);
  transition-duration: var(--duration-normal);  /* 200ms */
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: var(--ease-out);
  transition-duration: var(--duration-normal);  /* 200ms */
}

.transition-width {
  transition-property: width, max-width;
  transition-timing-function: var(--ease-in-out);
  transition-duration: var(--duration-slow);    /* 400ms */
}

/* Dùng hạn chế — all có thể gây performance issues */
.transition-all {
  transition-property: all;
  transition-timing-function: var(--ease-in-out);
  transition-duration: var(--duration-moderate); /* 300ms */
}
```

### Component-specific Transitions

```css
/* Button hover */
.btn {
  transition: background-color  var(--duration-normal) var(--ease-out),
              border-color      var(--duration-normal) var(--ease-out),
              box-shadow        var(--duration-normal) var(--ease-out),
              color             var(--duration-normal) var(--ease-out),
              transform         var(--duration-fast)   var(--ease-out);
}

.btn:active {
  transform: scale(0.97);  /* Micro-interaction: press feedback */
}

/* Input focus */
.input {
  transition: border-color  var(--duration-normal) var(--ease-out),
              box-shadow    var(--duration-normal) var(--ease-out);
}

/* Card hover lift */
.card {
  transition: box-shadow    var(--duration-normal) var(--ease-out),
              border-color  var(--duration-normal) var(--ease-out),
              transform     var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-2px);  /* Subtle lift — không layout shift */
}

/* Nav item */
.nav-item {
  transition: background-color  var(--duration-fast)   var(--ease-out),
              color             var(--duration-fast)   var(--ease-out),
              border-color      var(--duration-fast)   var(--ease-out);
}

/* Link */
a {
  transition: color var(--duration-fast) var(--ease-out);
}

/* Focus ring */
:focus-visible {
  transition: box-shadow var(--duration-fast) var(--ease-out);
}
```

---

## 5.4 Angular Animation Definitions

```typescript
// animations/transitions.ts
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

// ─── Fade ──────────────────────────────────────────
export const fadeAnimation = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('200ms ease-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('150ms ease-in', style({ opacity: 0 }))
  ]),
]);

// ─── Slide Down (Dropdown/Tooltip) ─────────────────
export const slideDownAnimation = trigger('slideDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-8px)' })),
  transition(':enter', [
    animate('250ms cubic-bezier(0, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('150ms cubic-bezier(0.4, 0, 1, 1)',
      style({ opacity: 0, transform: 'translateY(-8px)' }))
  ]),
]);

// ─── Slide In from Right (Drawer/Sidebar) ──────────
export const slideInRightAnimation = trigger('slideInRight', [
  state('void', style({ transform: 'translateX(100%)' })),
  transition(':enter', [
    animate('350ms cubic-bezier(0, 0, 0.2, 1)',
      style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('300ms cubic-bezier(0.4, 0, 1, 1)',
      style({ transform: 'translateX(100%)' }))
  ]),
]);

// ─── Modal Scale (Pop) ──────────────────────────────
export const modalAnimation = trigger('modal', [
  state('void', style({ opacity: 0, transform: 'scale(0.95)' })),
  transition(':enter', [
    animate('280ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      style({ opacity: 1, transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    animate('200ms cubic-bezier(0.4, 0, 1, 1)',
      style({ opacity: 0, transform: 'scale(0.95)' }))
  ]),
]);

// ─── List Stagger (Dashboard cards) ───────────────
export const listStaggerAnimation = trigger('listStagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(16px)' }),
      stagger('60ms', [
        animate('300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
    ], { optional: true }),
  ]),
]);

// ─── Sidebar Collapse ───────────────────────────────
export const sidebarAnimation = trigger('sidebar', [
  state('expanded', style({ width: '256px' })),
  state('collapsed', style({ width: '64px' })),
  transition('expanded <=> collapsed', [
    animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
  ]),
]);
```

---

## 5.5 Reduced Motion

> WCAG 2.3.3 — Animation from Interactions (Level AAA)
> Bắt buộc implement cho Government/Education software

```css
/* ===================================================
   REDUCED MOTION — Global Override
   Applies when user has set "Reduce motion" in OS
   =================================================== */
@media (prefers-reduced-motion: reduce) {
  /* Kill all animations and transitions */
  *,
  *::before,
  *::after {
    animation-duration:        0.01ms !important;
    animation-iteration-count: 1      !important;
    transition-duration:       0.01ms !important;
    scroll-behavior:           auto   !important;
  }

  /* Specific overrides */
  .card:hover        { transform: none; }
  .btn:active        { transform: none; }
  .transition-all    { transition: none; }

  /* Keep focus rings visible but instant */
  :focus-visible {
    transition: none !important;
    box-shadow: var(--shadow-focus-visible) !important;
  }
}
```

```typescript
// Angular: check reduced motion preference
// services/motion.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MotionService {
  get prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  getDuration(normal: number): number {
    return this.prefersReducedMotion ? 0 : normal;
  }
}
```

---

## 5.6 Tailwind Config Extension

```typescript
// tailwind.config.ts — motion tokens
export default {
  theme: {
    extend: {
      transitionDuration: {
        'instant':    '0ms',
        'fast':       '100ms',
        'normal':     '200ms',
        'moderate':   '300ms',
        'slow':       '400ms',
        'slower':     '600ms',
        'deliberate': '800ms',
      },
      transitionTimingFunction: {
        'in':        'cubic-bezier(0.4, 0, 1, 1)',
        'out':       'cubic-bezier(0, 0, 0.2, 1)',
        'in-out':    'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'overshoot': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'sharp':     'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
};
```

---

## 5.7 Animation Guidelines & Anti-patterns

### ✅ Sử dụng animation khi:

| Use case | Duration | Easing | Notes |
|----------|---------|--------|-------|
| Form validation feedback | 100-200ms | ease-out | Immediate, clear |
| Button hover/active state | 100-200ms | ease-out | Subtle, not distracting |
| Dropdown/menu open | 200-300ms | ease-out | Enter from top, fade in |
| Modal open | 250-300ms | ease-overshoot | Scale from 95% to 100% |
| Toast notification | 300ms in / 200ms out | ease-out / ease-in | Slide from corner |
| Sidebar collapse | 300-400ms | ease-in-out | Smooth width change |
| Page route change | 200-300ms | ease-out | Fade or slide |
| Loading skeleton | Infinite pulse | ease-in-out | Accessibility: reduce motion |
| Success confirmation | 300ms | ease-spring | Small bounce for delight |
| Table row highlight | 150ms | ease-out | Color only, no movement |

### ❌ KHÔNG dùng animation cho:

```
✗ Intro/loading screens thuần cosmetic
✗ Continuous background animations (floating particles, waves)
✗ Auto-playing decorative motion
✗ Scroll-triggered animations không có fallback
✗ Long loading animations > 3s
✗ Flashing content (> 3 flashes/second — WCAG 2.3.1)
✗ Animation file size > 150KB (Lottie/SVG)
✗ Parallax scrolling effects
✗ AI purple/pink glowing effects
```

### Performance Budget

| Animation type | Max duration | Max file size | Format |
|----------------|-------------|---------------|--------|
| CSS transition | 600ms | — | CSS |
| CSS keyframe | 2000ms | — | CSS |
| Lottie/JSON | 3000ms | 150KB | JSON |
| SVG animation | 3000ms | 50KB | SVG |
| Video bg | — | ❌ Không dùng | — |
