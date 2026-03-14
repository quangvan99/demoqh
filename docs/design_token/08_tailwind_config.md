---
title: Tailwind Config & CSS Variables — THPT Quốc Học Huế
category: design-token/config
version: 1.0.0
updated: 2026-03-11
---

# ⚙️ Tailwind Config & CSS Variables

> Ready-to-use configuration — copy paste vào project Angular + Tailwind CSS

---

## 8.1 Full `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{html,ts,scss}',
    './projects/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {

      // ================================================
      // COLORS
      // ================================================
      colors: {
        // Brand — Teal
        brand: {
          50:  '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',  // PRIMARY
          800: '#115E59',
          900: '#134E4A',
          950: '#0D2F2C',
        },

        // CTA / Info — Sky Blue
        cta: {
          50:  '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',  // PRIMARY CTA
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },

        // Semantic
        success: {
          surface: '#F0FDF4',
          light:   '#DCFCE7',
          border:  '#86EFAC',
          DEFAULT: '#16A34A',
          dark:    '#14532D',
        },
        warning: {
          surface: '#FFFBEB',
          light:   '#FEF3C7',
          border:  '#FCD34D',
          DEFAULT: '#D97706',
          dark:    '#78350F',
        },
        error: {
          surface: '#FEF2F2',
          light:   '#FEE2E2',
          border:  '#FCA5A5',
          DEFAULT: '#DC2626',
          dark:    '#7F1D1D',
        },
        info: {
          surface: '#F0F9FF',
          light:   '#E0F2FE',
          border:  '#7DD3FC',
          DEFAULT: '#0369A1',
          dark:    '#0C4A6E',
        },

        // Module Accents
        'lms':       '#2563EB',   // Blue-600   — Học tập
        'exam':      '#4F46E5',   // Indigo-600 — Thi kiểm tra
        'ai-cam':    '#0891B2',   // Cyan-600   — AI Điểm danh
        'library':   '#B45309',   // Amber-700  — Thư viện số
        'dashboard': '#0F766E',   // Teal-700   — Dashboard
        'dept':      '#475569',   // Slate-600  — Sở GDĐT

        // Module Surfaces
        'surface-lms':     '#EFF6FF',
        'surface-exam':    '#EEF2FF',
        'surface-ai':      '#ECFEFF',
        'surface-library': '#FFFBEB',
        'surface-dept':    '#F8FAFC',

        // Role Colors
        'role-student':   '#0EA5E9',
        'role-teacher':   '#10B981',
        'role-principal': '#0F766E',
        'role-admin':     '#7C3AED',
        'role-dept':      '#475569',
      },

      // ================================================
      // TYPOGRAPHY
      // ================================================
      fontFamily: {
        heading: ['Lexend', 'system-ui', '-apple-system', 'sans-serif'],
        body:    ['Source Sans 3', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['Fira Code', 'Courier New', 'Courier', 'monospace'],
        sans:    ['Source Sans 3', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        '2xs': ['0.625rem',  { lineHeight: '1.4', letterSpacing: '0.02em' }],  // 10px
        'xs':  ['0.75rem',   { lineHeight: '1.4', letterSpacing: '0.01em' }],  // 12px
        'sm':  ['0.875rem',  { lineHeight: '1.5', letterSpacing: '0' }],       // 14px
        'base':['1rem',      { lineHeight: '1.6', letterSpacing: '0' }],       // 16px
        'lg':  ['1.125rem',  { lineHeight: '1.6', letterSpacing: '-0.01em' }], // 18px
        'xl':  ['1.25rem',   { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 20px
        '2xl': ['1.5rem',    { lineHeight: '1.3', letterSpacing: '-0.02em' }], // 24px
        '3xl': ['1.875rem',  { lineHeight: '1.25',letterSpacing: '-0.02em' }], // 30px
        '4xl': ['2.25rem',   { lineHeight: '1.2', letterSpacing: '-0.03em' }], // 36px
        '5xl': ['3rem',      { lineHeight: '1.1', letterSpacing: '-0.04em' }], // 48px
        '6xl': ['3.75rem',   { lineHeight: '1.05',letterSpacing: '-0.05em' }], // 60px
      },

      fontWeight: {
        thin:      '100',
        light:     '300',
        regular:   '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
      },

      // ================================================
      // SPACING
      // ================================================
      spacing: {
        // Semantic component
        'comp-xs': '0.25rem',   // 4px
        'comp-sm': '0.5rem',    // 8px
        'comp-md': '0.75rem',   // 12px
        'comp-lg': '1rem',      // 16px
        'comp-xl': '1.5rem',    // 24px
        // Layout
        'layout-sm': '1.5rem',  // 24px
        'layout-md': '2rem',    // 32px
        'layout-lg': '3rem',    // 48px
        'layout-xl': '4rem',    // 64px
        // Sidebar
        'sidebar': '16rem',           // 256px
        'sidebar-sm': '4rem',         // 64px collapsed
        // Navbar
        'navbar': '4rem',             // 64px desktop
        'navbar-mobile': '3.5rem',    // 56px mobile
      },

      // ================================================
      // BORDER RADIUS
      // ================================================
      borderRadius: {
        'none': '0px',
        'xs':   '2px',
        'sm':   '4px',
        DEFAULT:'6px',
        'md':   '6px',
        'lg':   '8px',
        'xl':   '12px',
        '2xl':  '16px',
        '3xl':  '24px',
        'full': '9999px',
      },

      // ================================================
      // BOX SHADOW
      // ================================================
      boxShadow: {
        'none':  'none',
        'xs':    '0 1px 2px rgba(0,0,0,0.05)',
        'sm':    '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.06)',
        DEFAULT: '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'md':    '0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.06)',
        'lg':    '0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.06)',
        'xl':    '0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.06)',
        '2xl':   '0 25px 50px -12px rgba(0,0,0,0.25)',
        'inner': 'inset 0 2px 4px rgba(0,0,0,0.05)',
        // Focus rings
        'focus':         '0 0 0 3px rgba(15,118,110,0.40)',
        'focus-visible': '0 0 0 3px rgba(15,118,110,0.50), 0 0 0 1px #0F766E',
        'focus-error':   '0 0 0 3px rgba(220,38,38,0.40)',
        'focus-success': '0 0 0 3px rgba(22,163,74,0.40)',
        'focus-info':    '0 0 0 3px rgba(3,105,161,0.40)',
        // Module tinted shadows
        'lms':       '0 4px 12px rgba(37,99,235,0.15)',
        'exam':      '0 4px 12px rgba(79,70,229,0.15)',
        'ai':        '0 4px 12px rgba(8,145,178,0.15)',
        'library':   '0 4px 12px rgba(180,83,9,0.15)',
        'dashboard': '0 4px 12px rgba(15,118,110,0.15)',
      },

      // ================================================
      // TRANSITION
      // ================================================
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
        'linear':    'linear',
        'in':        'cubic-bezier(0.4, 0, 1, 1)',
        'out':       'cubic-bezier(0, 0, 0.2, 1)',
        'in-out':    'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'overshoot': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'sharp':     'cubic-bezier(0.4, 0, 0.6, 1)',
      },

      // ================================================
      // Z-INDEX
      // ================================================
      zIndex: {
        'base':     '0',
        'raised':   '10',
        'dropdown': '100',
        'sticky':   '200',
        'overlay':  '300',
        'modal':    '400',
        'toast':    '500',
        'tooltip':  '600',
        'max':      '9999',
      },

      // ================================================
      // SCREENS (BREAKPOINTS)
      // ================================================
      screens: {
        'xs':  '375px',   // not in Tailwind default
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },

      // ================================================
      // LINE HEIGHT
      // ================================================
      lineHeight: {
        'tight':    '1.05',
        'snug':     '1.2',
        'normal':   '1.4',
        'relaxed':  '1.5',
        'loose':    '1.6',
        'looser':   '1.7',
      },

    },
  },
  plugins: [
    // Uncomment plugins as needed:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
```

---

## 8.2 Full CSS Custom Properties

> Dán vào `src/styles/variables.css` hoặc `:root` trong `styles.scss`

```css
/* ================================================================
   CSS Custom Properties — THPT Quốc Học Huế Design System
   Version: 1.0.0 | Updated: 2026-03-11
   ================================================================ */

:root {

  /* ============================================================
     BRAND PALETTE — Teal
     ============================================================ */
  --color-brand-50:   #F0FDFA;
  --color-brand-100:  #CCFBF1;
  --color-brand-200:  #99F6E4;
  --color-brand-300:  #5EEAD4;
  --color-brand-400:  #2DD4BF;
  --color-brand-500:  #14B8A6;
  --color-brand-600:  #0D9488;
  --color-brand-700:  #0F766E;   /* PRIMARY */
  --color-brand-800:  #115E59;
  --color-brand-900:  #134E4A;
  --color-brand-950:  #0D2F2C;

  /* ============================================================
     SEMANTIC — SUCCESS (Green)
     ============================================================ */
  --color-success-surface: #F0FDF4;
  --color-success-light:   #DCFCE7;
  --color-success-border:  #86EFAC;
  --color-success:         #16A34A;
  --color-success-dark:    #14532D;

  /* ============================================================
     SEMANTIC — WARNING (Amber)
     ============================================================ */
  --color-warning-surface: #FFFBEB;
  --color-warning-light:   #FEF3C7;
  --color-warning-border:  #FCD34D;
  --color-warning:         #D97706;
  --color-warning-dark:    #78350F;

  /* ============================================================
     SEMANTIC — ERROR (Red)
     ============================================================ */
  --color-error-surface: #FEF2F2;
  --color-error-light:   #FEE2E2;
  --color-error-border:  #FCA5A5;
  --color-error:         #DC2626;
  --color-error-dark:    #7F1D1D;

  /* ============================================================
     SEMANTIC — INFO / CTA (Sky Blue)
     ============================================================ */
  --color-info-surface: #F0F9FF;
  --color-info-light:   #E0F2FE;
  --color-info-border:  #7DD3FC;
  --color-info:         #0369A1;   /* CTA Blue */
  --color-info-dark:    #0C4A6E;

  /* ============================================================
     NEUTRAL GRAY — Slate
     ============================================================ */
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

  /* ============================================================
     MODULE ACCENT COLORS
     ============================================================ */
  --color-lms:             #2563EB;   /* Blue-600   */
  --color-exam:            #4F46E5;   /* Indigo-600 */
  --color-ai:              #0891B2;   /* Cyan-600   */
  --color-library:         #B45309;   /* Amber-700  */
  --color-dashboard:       #0F766E;   /* Teal-700   */
  --color-dept:            #475569;   /* Slate-600  */

  --color-surface-lms:     #EFF6FF;
  --color-surface-exam:    #EEF2FF;
  --color-surface-ai:      #ECFEFF;
  --color-surface-library: #FFFBEB;
  --color-surface-dept:    #F8FAFC;

  /* ============================================================
     ROLE BADGE COLORS
     ============================================================ */
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

  /* ============================================================
     SEMANTIC UI ALIASES
     ============================================================ */
  --color-bg-page:        var(--color-brand-50);
  --color-bg-surface:     var(--color-gray-0);
  --color-bg-elevated:    var(--color-gray-50);
  --color-bg-subtle:      var(--color-gray-100);

  --color-text-primary:   var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-text-muted:     var(--color-gray-500);
  --color-text-disabled:  var(--color-gray-400);
  --color-text-inverse:   var(--color-gray-0);
  --color-text-brand:     var(--color-brand-700);
  --color-text-link:      var(--color-info);

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

  /* ============================================================
     TYPOGRAPHY
     ============================================================ */
  --font-heading: 'Lexend', system-ui, -apple-system, sans-serif;
  --font-body:    'Source Sans 3', system-ui, -apple-system, sans-serif;
  --font-mono:    'Fira Code', 'Courier New', Courier, monospace;

  --font-weight-thin:      100;
  --font-weight-light:     300;
  --font-weight-regular:   400;
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;
  --font-weight-extrabold: 800;

  --text-2xs-size:  0.625rem;   --text-2xs-lh:  1.4;
  --text-xs-size:   0.75rem;    --text-xs-lh:   1.4;
  --text-sm-size:   0.875rem;   --text-sm-lh:   1.5;
  --text-base-size: 1rem;       --text-base-lh: 1.6;
  --text-lg-size:   1.125rem;   --text-lg-lh:   1.6;
  --text-xl-size:   1.25rem;    --text-xl-lh:   1.4;
  --text-2xl-size:  1.5rem;     --text-2xl-lh:  1.3;
  --text-3xl-size:  1.875rem;   --text-3xl-lh:  1.25;
  --text-4xl-size:  2.25rem;    --text-4xl-lh:  1.2;
  --text-5xl-size:  3rem;       --text-5xl-lh:  1.1;
  --text-6xl-size:  3.75rem;    --text-6xl-lh:  1.05;

  /* ============================================================
     SPACING — Base Scale (4px grid)
     ============================================================ */
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
  --space-32:   8rem;      /* 128px */
  --space-40:   10rem;     /* 160px */
  --space-48:   12rem;     /* 192px */
  --space-64:   16rem;     /* 256px */
  --space-96:   24rem;     /* 384px */

  /* Semantic spacing */
  --space-component-xs: 0.25rem;
  --space-component-sm: 0.5rem;
  --space-component-md: 0.75rem;
  --space-component-lg: 1rem;
  --space-component-xl: 1.5rem;

  --space-layout-sm: 1.5rem;
  --space-layout-md: 2rem;
  --space-layout-lg: 3rem;
  --space-layout-xl: 4rem;

  --space-page-x: 1.5rem;   /* 24px — overridden by breakpoints */
  --space-page-y: 1.5rem;

  /* ============================================================
     BORDER RADIUS
     ============================================================ */
  --radius-none: 0px;
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-3xl:  24px;
  --radius-full: 9999px;

  /* ============================================================
     BORDER WIDTHS
     ============================================================ */
  --border-0: 0px;
  --border-1: 1px;
  --border-2: 2px;
  --border-4: 4px;
  --border-8: 8px;

  /* ============================================================
     SHADOWS
     ============================================================ */
  --shadow-none:  none;
  --shadow-xs:    0 1px 2px rgba(0,0,0,0.05);
  --shadow-sm:    0 1px 3px rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.06);
  --shadow-md:    0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.06);
  --shadow-lg:    0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.06);
  --shadow-xl:    0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.06);
  --shadow-2xl:   0 25px 50px -12px rgba(0,0,0,0.25);
  --shadow-inner: inset 0 2px 4px rgba(0,0,0,0.05);

  --shadow-focus:         0 0 0 3px rgba(15,118,110,0.40);
  --shadow-focus-visible: 0 0 0 3px rgba(15,118,110,0.50), 0 0 0 1px #0F766E;
  --shadow-focus-error:   0 0 0 3px rgba(220,38,38,0.40);
  --shadow-focus-success: 0 0 0 3px rgba(22,163,74,0.40);
  --shadow-focus-info:    0 0 0 3px rgba(3,105,161,0.40);

  --shadow-lms:       0 4px 12px rgba(37,99,235,0.15);
  --shadow-exam:      0 4px 12px rgba(79,70,229,0.15);
  --shadow-ai:        0 4px 12px rgba(8,145,178,0.15);
  --shadow-library:   0 4px 12px rgba(180,83,9,0.15);
  --shadow-dashboard: 0 4px 12px rgba(15,118,110,0.15);

  /* ============================================================
     MOTION
     ============================================================ */
  --duration-instant:    0ms;
  --duration-fast:       100ms;
  --duration-normal:     200ms;
  --duration-moderate:   300ms;
  --duration-slow:       400ms;
  --duration-slower:     600ms;
  --duration-deliberate: 800ms;

  --ease-linear:    linear;
  --ease-in:        cubic-bezier(0.4, 0, 1, 1);
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-overshoot: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-sharp:     cubic-bezier(0.4, 0, 0.6, 1);

  /* ============================================================
     Z-INDEX
     ============================================================ */
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-toast:    500;
  --z-tooltip:  600;
  --z-max:      9999;

  /* ============================================================
     LAYOUT
     ============================================================ */
  --screen-xs:  375px;
  --screen-sm:  640px;
  --screen-md:  768px;
  --screen-lg:  1024px;
  --screen-xl:  1280px;
  --screen-2xl: 1536px;

  --sidebar-width:           256px;
  --sidebar-collapsed-width: 64px;
  --navbar-height:           64px;
  --navbar-height-mobile:    56px;

  /* ============================================================
     COMPONENT SIZES
     ============================================================ */
  /* Buttons */
  --btn-xs-h: 28px;  --btn-xs-px: 10px; --btn-xs-py:  4px;  --btn-xs-fs: 0.75rem;
  --btn-sm-h: 36px;  --btn-sm-px: 14px; --btn-sm-py:  8px;  --btn-sm-fs: 0.875rem;
  --btn-md-h: 44px;  --btn-md-px: 20px; --btn-md-py:  10px; --btn-md-fs: 0.9375rem;
  --btn-lg-h: 52px;  --btn-lg-px: 24px; --btn-lg-py:  14px; --btn-lg-fs: 1rem;
  --btn-xl-h: 60px;  --btn-xl-px: 32px; --btn-xl-py:  18px; --btn-xl-fs: 1.125rem;

  /* Inputs */
  --input-sm-h: 36px;  --input-sm-px: 0.75rem;  --input-sm-fs: 0.875rem;
  --input-md-h: 44px;  --input-md-px: 0.875rem; --input-md-fs: 1rem;
  --input-lg-h: 52px;  --input-lg-px: 1rem;     --input-lg-fs: 1.125rem;

  /* Modal widths */
  --modal-sm: 400px;
  --modal-md: 560px;
  --modal-lg: 720px;
  --modal-xl: 900px;
}

/* Responsive page spacing */
@media (min-width: 640px) {
  :root {
    --space-page-x: 1.5rem;   /* 24px */
    --space-page-y: 1.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --space-page-x: 2rem;     /* 32px */
    --space-page-y: 2rem;
  }
}

@media (min-width: 1280px) {
  :root {
    --space-page-x: 3rem;     /* 48px */
  }
}

/* Reduced motion override */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration:        0.01ms !important;
    animation-iteration-count: 1      !important;
    transition-duration:       0.01ms !important;
    scroll-behavior:           auto   !important;
  }
}
```

---

## 8.3 Angular styles.scss Integration

```scss
// src/styles.scss

// 1. Import Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Source+Sans+3:ital,opsz,wght@0,9..46,300;0,9..46,400;0,9..46,600;0,9..46,700;1,9..46,400&family=Fira+Code:wght@400;500&display=swap');

// 2. Tailwind directives
@tailwind base;
@tailwind components;
@tailwind utilities;

// 3. CSS Custom Properties
@import './styles/variables.css';

// 4. Base styles
@layer base {
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-body);
    font-size: var(--text-base-size);
    line-height: 1.6;
    color: var(--color-text-primary);
    background-color: var(--color-bg-page);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--color-gray-800);
    font-weight: 700;
  }

  a {
    color: var(--color-text-link);
    text-underline-offset: 2px;
  }

  :focus-visible {
    outline: none;
    box-shadow: var(--shadow-focus-visible);
  }

  code, pre {
    font-family: var(--font-mono);
  }
}

// 5. Component overrides
@import './styles/components/button';
@import './styles/components/forms';
@import './styles/components/cards';
@import './styles/components/tables';
@import './styles/layout/app-shell';
```

---

## 8.4 Angular Material Custom Theme

```scss
// src/styles/_material-theme.scss
// Angular Material custom theme using design tokens

@use '@angular/material' as mat;
@use 'sass:map';

// ── Include core styles once ──────────────────────
@include mat.core();

// ── Brand Teal Palette ────────────────────────────
$brand-teal-palette: (
  50:  #F0FDFA,
  100: #CCFBF1,
  200: #99F6E4,
  300: #5EEAD4,
  400: #2DD4BF,
  500: #14B8A6,
  600: #0D9488,
  700: #0F766E,    // Primary
  800: #115E59,
  900: #134E4A,
  contrast: (
    50:  #134E4A,
    100: #134E4A,
    200: #134E4A,
    300: #134E4A,
    400: #FFFFFF,
    500: #FFFFFF,
    600: #FFFFFF,
    700: #FFFFFF,
    800: #FFFFFF,
    900: #FFFFFF,
  ),
);

// ── CTA Blue Palette ──────────────────────────────
$cta-blue-palette: (
  50:  #F0F9FF,
  100: #E0F2FE,
  200: #BAE6FD,
  300: #7DD3FC,
  400: #38BDF8,
  500: #0EA5E9,
  600: #0284C7,
  700: #0369A1,   // Accent
  800: #075985,
  900: #0C4A6E,
  contrast: (
    50:  #0C4A6E,
    100: #0C4A6E,
    200: #0C4A6E,
    300: #0C4A6E,
    400: #FFFFFF,
    500: #FFFFFF,
    600: #FFFFFF,
    700: #FFFFFF,
    800: #FFFFFF,
    900: #FFFFFF,
  ),
);

// ── Warning Palette ───────────────────────────────
$warning-palette: (
  50:  #FFFBEB,
  100: #FEF3C7,
  200: #FDE68A,
  300: #FCD34D,
  400: #FBBF24,
  500: #F59E0B,
  600: #D97706,
  700: #B45309,
  800: #92400E,
  900: #78350F,
  contrast: (
    50:  #78350F,
    100: #78350F,
    200: #78350F,
    300: #78350F,
    400: #FFFFFF,
    500: #FFFFFF,
    600: #FFFFFF,
    700: #FFFFFF,
    800: #FFFFFF,
    900: #FFFFFF,
  ),
);

// ── Define Theme ──────────────────────────────────
$qh-theme: mat.define-theme((
  color: (
    theme-type:   light,
    primary:      mat.define-palette($brand-teal-palette,   700, 100, 900),
    accent:       mat.define-palette($cta-blue-palette,     700, 100, 900),
    warn:         mat.define-palette($warning-palette,      600, 100, 900),
  ),
  typography: (
    brand-family:   'Source Sans 3, system-ui, sans-serif',
    bold-weight:    700,
    medium-weight:  500,
    regular-weight: 400,
  ),
  density: (
    scale: 0,
  ),
));

// ── Apply Theme ───────────────────────────────────
html {
  @include mat.all-component-themes($qh-theme);
}

// ── Custom Overrides ──────────────────────────────
.mat-mdc-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button {
  font-family: var(--font-body) !important;
  font-weight: 600 !important;
  min-height: 44px;  /* WCAG touch target */
  border-radius: var(--radius-md) !important;
}

.mat-mdc-form-field {
  font-family: var(--font-body) !important;
}

.mat-mdc-dialog-container {
  border-radius: var(--radius-xl) !important;
}

.mat-mdc-snack-bar-container {
  --mdc-snackbar-container-color: var(--color-gray-900);
  --mdc-snackbar-supporting-text-color: var(--color-gray-50);
  border-radius: var(--radius-lg) !important;
}

// Focus override — use our design token focus ring
.mat-mdc-button:focus-visible,
.mat-mdc-icon-button:focus-visible {
  box-shadow: var(--shadow-focus-visible) !important;
}
```

---

## 8.5 Angular `angular.json` Styles Config

```json
// angular.json — projects[*].architect.build.options.styles
{
  "styles": [
    "src/styles.scss"
  ],
  "stylePreprocessorOptions": {
    "includePaths": [
      "src/styles"
    ]
  }
}
```

---

## 8.6 TypeScript Token Constants (Optional)

> Dùng trong Angular components để reference tokens programmatically

```typescript
// src/app/design-system/tokens.ts

export const COLORS = {
  brand: {
    50:  '#F0FDFA', 100: '#CCFBF1', 200: '#99F6E4',
    300: '#5EEAD4', 400: '#2DD4BF', 500: '#14B8A6',
    600: '#0D9488', 700: '#0F766E', 800: '#115E59',
    900: '#134E4A', 950: '#0D2F2C',
  },
  semantic: {
    success: '#16A34A',
    warning: '#D97706',
    error:   '#DC2626',
    info:    '#0369A1',
  },
  module: {
    lms:       '#2563EB',
    exam:      '#4F46E5',
    ai:        '#0891B2',
    library:   '#B45309',
    dashboard: '#0F766E',
    dept:      '#475569',
  },
  role: {
    student:   '#0EA5E9',
    teacher:   '#10B981',
    principal: '#0F766E',
    admin:     '#7C3AED',
    dept:      '#475569',
  },
} as const;

export const BREAKPOINTS = {
  xs:  375,
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  xxl: 1536,
} as const;

export const DURATIONS = {
  instant:    0,
  fast:       100,
  normal:     200,
  moderate:   300,
  slow:       400,
  slower:     600,
  deliberate: 800,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type ColorRole = keyof typeof COLORS.role;
export type ModuleKey = keyof typeof COLORS.module;
```
