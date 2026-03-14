---
title: Spacing Tokens — THPT Quốc Học Huế
category: design-token/spacing
version: 1.0.0
updated: 2026-03-11
---

# 📐 Spacing Tokens

> Base unit: **4px** — Tailwind compatible 4px grid system
> Nguyên tắc: Consistency + Visual rhythm

---

## 3.1 Base Scale (4px grid)

| Token | CSS Variable | px | rem | Tailwind class | Usage Example |
|-------|-------------|-----|-----|----------------|---------------|
| `space-0` | `--space-0` | 0px | 0rem | `p-0`, `m-0` | Reset |
| `space-px` | `--space-px` | 1px | — | `p-px` | Hair line borders |
| `space-0.5` | `--space-0-5` | 2px | 0.125rem | `p-0.5` | Tiny gaps |
| `space-1` | `--space-1` | 4px | 0.25rem | `p-1`, `m-1` | Icon internal padding |
| `space-1.5` | `--space-1-5` | 6px | 0.375rem | `p-1.5` | Compact badge padding |
| `space-2` | `--space-2` | 8px | 0.5rem | `p-2`, `m-2` | Tight component padding |
| `space-2.5` | `--space-2-5` | 10px | 0.625rem | `p-2.5` | Icon button padding |
| `space-3` | `--space-3` | 12px | 0.75rem | `p-3`, `m-3` | Button padding Y |
| `space-3.5` | `--space-3-5` | 14px | 0.875rem | `p-3.5` | Tight input padding |
| `space-4` | `--space-4` | 16px | 1rem | `p-4`, `m-4` | Default card padding, component gap |
| `space-5` | `--space-5` | 20px | 1.25rem | `p-5`, `m-5` | Form field spacing |
| `space-6` | `--space-6` | 24px | 1.5rem | `p-6`, `m-6` | Card padding, section gap |
| `space-7` | `--space-7` | 28px | 1.75rem | `p-7` | Medium padding |
| `space-8` | `--space-8` | 32px | 2rem | `p-8`, `m-8` | Section padding |
| `space-9` | `--space-9` | 36px | 2.25rem | `p-9` | Larger component gap |
| `space-10` | `--space-10` | 40px | 2.5rem | `p-10`, `m-10` | Page section gap |
| `space-11` | `--space-11` | 44px | 2.75rem | `p-11` | Min touch target size |
| `space-12` | `--space-12` | 48px | 3rem | `p-12`, `m-12` | Large section padding |
| `space-14` | `--space-14` | 56px | 3.5rem | `p-14` | Nav height mobile |
| `space-16` | `--space-16` | 64px | 4rem | `p-16`, `m-16` | Nav height desktop, hero padding |
| `space-20` | `--space-20` | 80px | 5rem | `p-20` | Large layout gaps |
| `space-24` | `--space-24` | 96px | 6rem | `p-24` | Section breathing room |
| `space-28` | `--space-28` | 112px | 7rem | `p-28` | — |
| `space-32` | `--space-32` | 128px | 8rem | `p-32` | Large hero padding |
| `space-36` | `--space-36` | 144px | 9rem | `p-36` | — |
| `space-40` | `--space-40` | 160px | 10rem | `p-40` | — |
| `space-48` | `--space-48` | 192px | 12rem | `p-48` | Large decorative spacing |
| `space-56` | `--space-56` | 224px | 14rem | `p-56` | — |
| `space-64` | `--space-64` | 256px | 16rem | `p-64` | Sidebar width |
| `space-72` | `--space-72` | 288px | 18rem | `p-72` | — |
| `space-80` | `--space-80` | 320px | 20rem | `p-80` | — |
| `space-96` | `--space-96` | 384px | 24rem | `p-96` | Max content width narrow |

### CSS Custom Properties — Base Scale

```css
:root {
  --space-0:    0px;
  --space-px:   1px;
  --space-0-5:  0.125rem;  /* 2px  */
  --space-1:    0.25rem;   /* 4px  */
  --space-1-5:  0.375rem;  /* 6px  */
  --space-2:    0.5rem;    /* 8px  */
  --space-2-5:  0.625rem;  /* 10px */
  --space-3:    0.75rem;   /* 12px */
  --space-3-5:  0.875rem;  /* 14px */
  --space-4:    1rem;      /* 16px */
  --space-5:    1.25rem;   /* 20px */
  --space-6:    1.5rem;    /* 24px */
  --space-7:    1.75rem;   /* 28px */
  --space-8:    2rem;      /* 32px */
  --space-9:    2.25rem;   /* 36px */
  --space-10:   2.5rem;    /* 40px */
  --space-11:   2.75rem;   /* 44px */
  --space-12:   3rem;      /* 48px */
  --space-14:   3.5rem;    /* 56px */
  --space-16:   4rem;      /* 64px */
  --space-20:   5rem;      /* 80px */
  --space-24:   6rem;      /* 96px */
  --space-28:   7rem;      /* 112px */
  --space-32:   8rem;      /* 128px */
  --space-36:   9rem;      /* 144px */
  --space-40:   10rem;     /* 160px */
  --space-48:   12rem;     /* 192px */
  --space-56:   14rem;     /* 224px */
  --space-64:   16rem;     /* 256px */
  --space-72:   18rem;     /* 288px */
  --space-80:   20rem;     /* 320px */
  --space-96:   24rem;     /* 384px */
}
```

---

## 3.2 Semantic Spacing Tokens

### Component-level

| Token | CSS Variable | px | rem | Tailwind | Purpose |
|-------|-------------|-----|-----|----------|---------|
| `component-xs` | `--space-component-xs` | 4px | 0.25rem | `p-1` | Icon gap, inline gap |
| `component-sm` | `--space-component-sm` | 8px | 0.5rem | `p-2` | Tight padding, badge |
| `component-md` | `--space-component-md` | 12px | 0.75rem | `p-3` | Button padding Y |
| `component-lg` | `--space-component-lg` | 16px | 1rem | `p-4` | Card padding default |
| `component-xl` | `--space-component-xl` | 24px | 1.5rem | `p-6` | Section inner gap |

### Layout-level

| Token | CSS Variable | px | rem | Tailwind | Purpose |
|-------|-------------|-----|-----|----------|---------|
| `layout-sm` | `--space-layout-sm` | 24px | 1.5rem | `gap-6` | Column gap, tight layout |
| `layout-md` | `--space-layout-md` | 32px | 2rem | `p-8` | Section padding |
| `layout-lg` | `--space-layout-lg` | 48px | 3rem | `p-12` | Page section gap |
| `layout-xl` | `--space-layout-xl` | 64px | 4rem | `p-16` | Hero padding |

### Page-level (Responsive)

| Token | Mobile | Tablet | Desktop | Usage |
|-------|--------|--------|---------|-------|
| `page-x` | 16px | 24px | 48px / 64px | Horizontal page margin |
| `page-y` | 16px | 24px | 32px | Vertical page padding |

```css
:root {
  /* Component */
  --space-component-xs: 0.25rem;   /* 4px  */
  --space-component-sm: 0.5rem;    /* 8px  */
  --space-component-md: 0.75rem;   /* 12px */
  --space-component-lg: 1rem;      /* 16px */
  --space-component-xl: 1.5rem;    /* 24px */

  /* Layout */
  --space-layout-sm: 1.5rem;       /* 24px */
  --space-layout-md: 2rem;         /* 32px */
  --space-layout-lg: 3rem;         /* 48px */
  --space-layout-xl: 4rem;         /* 64px */

  /* Page — mobile default */
  --space-page-x: 1rem;            /* 16px */
  --space-page-y: 1rem;            /* 16px */
}

@media (min-width: 640px) {
  :root {
    --space-page-x: 1.5rem;        /* 24px */
    --space-page-y: 1.5rem;        /* 24px */
  }
}

@media (min-width: 1024px) {
  :root {
    --space-page-x: 3rem;          /* 48px */
    --space-page-y: 2rem;          /* 32px */
  }
}

@media (min-width: 1280px) {
  :root {
    --space-page-x: 4rem;          /* 64px */
  }
}
```

---

## 3.3 Component Spacing Specifications

### Button Spacing

> Min touch target: 44×44px (WCAG 2.5.5 AAA)

| Size | Height | Padding X | Padding Y | Font Size | Gap (icon+text) | Min Width |
|------|--------|-----------|-----------|-----------|-----------------|-----------|
| `btn-xs` | 28px | 10px | 4px | 12px | 4px | 64px |
| `btn-sm` | 36px | 14px | 8px | 14px | 6px | 80px |
| `btn-md` | 44px | 20px | 10px | 15px | 8px | 96px |
| `btn-lg` | 52px | 24px | 14px | 16px | 8px | 120px |
| `btn-xl` | 60px | 32px | 18px | 18px | 10px | 140px |

```css
/* Button sizing tokens */
:root {
  --btn-xs-h:  28px;  --btn-xs-px:  10px; --btn-xs-py:  4px;  --btn-xs-fs: 0.75rem;
  --btn-sm-h:  36px;  --btn-sm-px:  14px; --btn-sm-py:  8px;  --btn-sm-fs: 0.875rem;
  --btn-md-h:  44px;  --btn-md-px:  20px; --btn-md-py:  10px; --btn-md-fs: 0.9375rem;
  --btn-lg-h:  52px;  --btn-lg-px:  24px; --btn-lg-py:  14px; --btn-lg-fs: 1rem;
  --btn-xl-h:  60px;  --btn-xl-px:  32px; --btn-xl-py:  18px; --btn-xl-fs: 1.125rem;
}
```

### Input Sizing

| Size | Height | Padding X | Padding Y | Font Size | Usage |
|------|--------|-----------|-----------|-----------|-------|
| `input-sm` | 36px | 12px | 6px | 14px | Compact forms, tables |
| `input-md` | 44px | 14px | 10px | 16px | Default forms ✓ WCAG |
| `input-lg` | 52px | 16px | 14px | 18px | Prominent inputs |

```css
:root {
  --input-sm-h:  36px; --input-sm-px: 0.75rem; --input-sm-py: 0.375rem; --input-sm-fs: 0.875rem;
  --input-md-h:  44px; --input-md-px: 0.875rem; --input-md-py: 0.625rem; --input-md-fs: 1rem;
  --input-lg-h:  52px; --input-lg-px: 1rem;     --input-lg-py: 0.875rem; --input-lg-fs: 1.125rem;
}
```

### Card Padding

| Variant | Padding | Usage |
|---------|---------|-------|
| `card-compact` | 12px | Dense info cards, list items |
| `card-default` | 20px | Standard content cards |
| `card-comfortable` | 24px | Dashboard widgets |
| `card-spacious` | 32px | Featured/hero cards |

```css
:root {
  --card-padding-compact:     0.75rem;  /* 12px */
  --card-padding-default:     1.25rem;  /* 20px */
  --card-padding-comfortable: 1.5rem;   /* 24px */
  --card-padding-spacious:    2rem;     /* 32px */
}
```

### Modal Spacing

| Area | Value | Usage |
|------|-------|-------|
| Header padding | 20px 24px | Top padding header |
| Body padding | 24px | Content area |
| Footer padding | 16px 24px | Action buttons area |
| Gap between actions | 12px | Button gap in footer |

```css
:root {
  --modal-header-px: 1.5rem;    /* 24px */
  --modal-header-py: 1.25rem;   /* 20px */
  --modal-body-p:    1.5rem;    /* 24px */
  --modal-footer-px: 1.5rem;    /* 24px */
  --modal-footer-py: 1rem;      /* 16px */
  --modal-action-gap: 0.75rem;  /* 12px */
}
```

### Table Cell Spacing

| Type | Padding | Row Height | Usage |
|------|---------|------------|-------|
| `table-compact` | 8px 12px | 36px | Dense data tables |
| `table-default` | 12px 16px | 48px | Standard tables |
| `table-comfortable` | 16px 20px | 56px | Readable tables |

```css
:root {
  --table-cell-compact-px:  0.75rem;  /* 12px */
  --table-cell-compact-py:  0.5rem;   /* 8px */
  --table-row-compact-h:    36px;

  --table-cell-default-px:  1rem;     /* 16px */
  --table-cell-default-py:  0.75rem;  /* 12px */
  --table-row-default-h:    48px;

  --table-cell-comfortable-px: 1.25rem; /* 20px */
  --table-cell-comfortable-py: 1rem;    /* 16px */
  --table-row-comfortable-h:   56px;
}
```

### Sidebar Spacing

| Element | Value | Token |
|---------|-------|-------|
| Sidebar width (expanded) | 256px | `--sidebar-width` |
| Sidebar width (collapsed) | 64px | `--sidebar-collapsed-width` |
| Nav item height | 44px | `--nav-item-h` |
| Nav item padding X | 16px | `--nav-item-px` |
| Nav item icon size | 20px | `--nav-item-icon-size` |
| Nav item gap (icon+text) | 12px | `--nav-item-gap` |
| Nav group label padding | 8px 16px | `--nav-group-p` |

```css
:root {
  --sidebar-width:           256px;
  --sidebar-collapsed-width: 64px;
  --sidebar-transition:      0.25s ease-in-out;

  --nav-item-h:           44px;
  --nav-item-px:          1rem;      /* 16px */
  --nav-item-py:          0.625rem;  /* 10px */
  --nav-item-icon-size:   20px;
  --nav-item-gap:         0.75rem;   /* 12px */
  --nav-item-radius:      6px;

  --navbar-height-mobile:  56px;
  --navbar-height-desktop: 64px;
}
```

### Form Layout Spacing

| Element | Value | Usage |
|---------|-------|-------|
| Form group gap (between fields) | 20px | Vertical spacing between form groups |
| Label to input gap | 6px | Space between label and input |
| Input to helper text gap | 4px | Space between input and helper/error text |
| Form section gap | 32px | Between form sections |
| Inline form item gap | 16px | Horizontal gap in inline forms |

```css
:root {
  --form-group-gap:   1.25rem;   /* 20px */
  --form-label-gap:   0.375rem;  /* 6px  */
  --form-helper-gap:  0.25rem;   /* 4px  */
  --form-section-gap: 2rem;      /* 32px */
  --form-inline-gap:  1rem;      /* 16px */
}
```
