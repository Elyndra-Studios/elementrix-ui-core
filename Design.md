# Elementrix UI - Complete Design System Specification

## Theme: "Elemental Minimal"

A sophisticated, accessible component library that emphasizes fundamental design principles. Light by default with an exceptional dark mode, leveraging shadow-based depth and a single strong accent color to create interfaces that feel both timeless and modern.

---

## Design Tokens

### Color System

```typescript
// Neutral Palette (9-step scale)
--el-neutral-50: #fafafa   // Lightest backgrounds
--el-neutral-100: #f5f5f5  // Subtle backgrounds
--el-neutral-200: #e5e5e5  // Borders, dividers
--el-neutral-300: #d4d4d4  // Disabled states
--el-neutral-400: #a3a3a3  // Placeholders
--el-neutral-500: #737373  // Secondary text
--el-neutral-600: #525252  // Body text
--el-neutral-700: #404040  // Headings
--el-neutral-800: #262626  // Strong emphasis
--el-neutral-900: #171717  // Darkest text

// Brand/Accent (Primary action color - choose one)
--el-primary-50: #eff6ff
--el-primary-100: #dbeafe
--el-primary-200: #bfdbfe
--el-primary-300: #93c5fd
--el-primary-400: #60a5fa
--el-primary-500: #3b82f6   // Main accent
--el-primary-600: #2563eb   // Hover states
--el-primary-700: #1d4ed8   // Active states
--el-primary-800: #1e40af
--el-primary-900: #1e3a8a

// Semantic Colors
--el-success-500: #10b981
--el-success-600: #059669
--el-warning-500: #f59e0b
--el-warning-600: #d97706
--el-error-500: #ef4444
--el-error-600: #dc2626
--el-info-500: #3b82f6
--el-info-600: #2563eb

// Surface Colors (context-aware)
--el-surface-base: #ffffff       // Main background (light)
--el-surface-raised: #ffffff     // Cards, modals
--el-surface-overlay: #ffffff    // Dropdowns, tooltips
--el-surface-subtle: #fafafa     // Secondary backgrounds

// Dark Mode Overrides
[data-theme="dark"] {
  --el-neutral-50: #171717
  --el-neutral-100: #262626
  // ... inverted scale
  --el-surface-base: #0a0a0a
  --el-surface-raised: #171717
  --el-surface-overlay: #262626
  --el-surface-subtle: #141414
}
```

### Spacing Scale (8px base)

```typescript
--el-space-0: 0
--el-space-1: 0.25rem  // 4px
--el-space-2: 0.5rem   // 8px
--el-space-3: 0.75rem  // 12px
--el-space-4: 1rem     // 16px
--el-space-5: 1.25rem  // 20px
--el-space-6: 1.5rem   // 24px
--el-space-8: 2rem     // 32px
--el-space-10: 2.5rem  // 40px
--el-space-12: 3rem    // 48px
--el-space-16: 4rem    // 64px
--el-space-20: 5rem    // 80px
--el-space-24: 6rem    // 96px
```

### Typography

```typescript
// Font Families
--el-font-sans: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif
--el-font-mono: 'SF Mono', 'Monaco', 'Cascadia Code', monospace

// Font Sizes (Modular scale: 1.25 ratio)
--el-text-xs: 0.75rem      // 12px
--el-text-sm: 0.875rem     // 14px
--el-text-base: 1rem       // 16px
--el-text-lg: 1.125rem     // 18px
--el-text-xl: 1.25rem      // 20px
--el-text-2xl: 1.5rem      // 24px
--el-text-3xl: 1.875rem    // 30px
--el-text-4xl: 2.25rem     // 36px
--el-text-5xl: 3rem        // 48px

// Font Weights
--el-weight-normal: 400
--el-weight-medium: 500
--el-weight-semibold: 600
--el-weight-bold: 700

// Line Heights
--el-leading-tight: 1.25
--el-leading-snug: 1.375
--el-leading-normal: 1.5
--el-leading-relaxed: 1.625
--el-leading-loose: 2

// Letter Spacing
--el-tracking-tight: -0.025em
--el-tracking-normal: 0
--el-tracking-wide: 0.025em
```

### Shadows (Elevation system)

```typescript
// Subtle, natural shadows for depth
--el-shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--el-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
--el-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--el-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
--el-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
--el-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)

// Focus shadow (accessibility)
--el-shadow-focus: 0 0 0 3px var(--el-primary-500 / 0.2)
```

### Border Radius

```typescript
--el-radius-none: 0
--el-radius-sm: 0.25rem    // 4px
--el-radius-base: 0.375rem // 6px
--el-radius-md: 0.5rem     // 8px
--el-radius-lg: 0.75rem    // 12px
--el-radius-xl: 1rem       // 16px
--el-radius-2xl: 1.5rem    // 24px
--el-radius-full: 9999px   // Pill shape
```

### Transitions

```typescript
// Duration
--el-duration-fast: 150ms
--el-duration-base: 200ms
--el-duration-slow: 300ms

// Easing
--el-ease-linear: linear
--el-ease-in: cubic-bezier(0.4, 0, 1, 1)
--el-ease-out: cubic-bezier(0, 0, 0.2, 1)
--el-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Borders

```typescript
--el-border-width-thin: 1px
--el-border-width-base: 1.5px
--el-border-width-thick: 2px

--el-border-color: var(--el-neutral-200)
--el-border-color-hover: var(--el-neutral-300)
--el-border-color-focus: var(--el-primary-500)
```

### Z-Index Scale

```typescript
--el-z-base: 0
--el-z-dropdown: 1000
--el-z-sticky: 1100
--el-z-overlay: 1200
--el-z-modal: 1300
--el-z-popover: 1400
--el-z-tooltip: 1500
--el-z-notification: 1600
```

---

## Core Component Library

### Atoms (Foundational Elements)

#### 1. **Button** (`el-button`)
- **Variants**: primary, secondary, tertiary, ghost, danger
- **Sizes**: xs, sm, md, lg, xl
- **States**: default, hover, active, focus, disabled, loading
- **Props**: `variant`, `size`, `disabled`, `loading`, `icon-only`, `full-width`
- **Slots**: default, `icon-left`, `icon-right`

#### 2. **Icon** (`el-icon`)
- **Props**: `name`, `size`, `color`, `stroke-width`
- **Sizes**: xs (16px), sm (20px), md (24px), lg (32px), xl (40px)
- Uses icon library (Lucide, Heroicons, or custom SVG sprite)

#### 3. **Input** (`el-input`)
- **Types**: text, email, password, number, tel, url, search
- **Sizes**: sm, md, lg
- **States**: default, focus, error, disabled, readonly
- **Props**: `type`, `size`, `placeholder`, `disabled`, `readonly`, `error`, `required`
- **Slots**: `prefix`, `suffix`
- **Features**: Clear button, password toggle, character count

#### 4. **Label** (`el-label`)
- **Props**: `for`, `required`, `optional`, `size`
- **Slots**: default, `hint`

#### 5. **Textarea** (`el-textarea`)
- **Sizes**: sm, md, lg
- **Props**: `rows`, `resize`, `max-length`, `auto-grow`
- **Features**: Character count, auto-resize

#### 6. **Checkbox** (`el-checkbox`)
- **States**: unchecked, checked, indeterminate, disabled
- **Sizes**: sm, md, lg
- **Props**: `checked`, `indeterminate`, `disabled`, `required`

#### 7. **Radio** (`el-radio`)
- **Sizes**: sm, md, lg
- **Props**: `name`, `value`, `checked`, `disabled`

#### 8. **Switch** (`el-switch`)
- **Sizes**: sm, md, lg
- **Props**: `checked`, `disabled`
- **Slots**: `label`

#### 9. **Badge** (`el-badge`)
- **Variants**: default, primary, success, warning, error, info
- **Sizes**: sm, md, lg
- **Props**: `variant`, `size`, `pill`, `dot`

#### 10. **Avatar** (`el-avatar`)
- **Sizes**: xs, sm, md, lg, xl, 2xl
- **Props**: `src`, `alt`, `size`, `shape` (circle, square)
- **Slots**: `fallback` (initials)
- **Features**: Status indicator (online, offline, away, busy)

#### 11. **Spinner** (`el-spinner`)
- **Sizes**: xs, sm, md, lg, xl
- **Props**: `size`, `color`

#### 12. **Divider** (`el-divider`)
- **Orientations**: horizontal, vertical
- **Props**: `orientation`, `spacing`, `label`
- **Slots**: default (label text)

#### 13. **Link** (`el-link`)
- **Variants**: default, primary, subtle
- **Props**: `href`, `external`, `disabled`, `underline`
- **Features**: External icon, visited state

---

### Molecules (Combined Elements)

#### 14. **Form Field** (`el-form-field`)
- Combines label, input/control, hint text, error message
- **Props**: `label`, `hint`, `error`, `required`, `optional`
- **Slots**: `label`, `control`, `hint`, `error`

#### 15. **Select** (`el-select`)
- **Variants**: native, custom dropdown
- **Sizes**: sm, md, lg
- **Props**: `options`, `value`, `placeholder`, `disabled`, `multiple`, `searchable`
- **Features**: Keyboard navigation, search/filter, multi-select with chips

#### 16. **Card** (`el-card`)
- **Variants**: elevated (shadow), outlined (border), flat
- **Props**: `variant`, `hoverable`, `clickable`
- **Slots**: `header`, `media`, default (body), `footer`
- **Features**: Optional image, hover states

#### 17. **Alert** (`el-alert`)
- **Variants**: info, success, warning, error
- **Props**: `variant`, `dismissible`, `icon`
- **Slots**: `title`, default (description), `actions`
- **Features**: Close button, custom icon

#### 18. **Toast/Notification** (`el-toast`)
- **Variants**: info, success, warning, error
- **Positions**: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
- **Props**: `variant`, `duration`, `dismissible`
- **Features**: Auto-dismiss timer, progress bar, stacking

#### 19. **Tooltip** (`el-tooltip`)
- **Placements**: top, right, bottom, left (+ variants)
- **Props**: `content`, `placement`, `trigger` (hover, click, focus)
- **Slots**: `trigger`, `content`
- **Features**: Arrow pointer, delay timing

#### 20. **Popover** (`el-popover`)
- **Placements**: top, right, bottom, left
- **Props**: `placement`, `trigger`, `offset`
- **Slots**: `trigger`, `content`
- **Features**: Click outside to close, keyboard ESC

#### 21. **Dropdown** (`el-dropdown`)
- **Props**: `placement`, `trigger`
- **Slots**: `trigger`, default (menu items)
- **Features**: Keyboard navigation, hover/click trigger

#### 22. **Menu** (`el-menu`) & **Menu Item** (`el-menu-item`)
- **Props**: `active`, `disabled`, `href`
- **Slots**: `icon`, default, `suffix`
- **Features**: Keyboard navigation, dividers, submenus

#### 23. **Breadcrumbs** (`el-breadcrumbs`)
- **Props**: `separator`, `max-items`
- **Slots**: default (breadcrumb items)
- **Features**: Overflow collapse, custom separators

#### 24. **Pagination** (`el-pagination`)
- **Variants**: simple, full
- **Props**: `total`, `page`, `page-size`, `show-size-changer`
- **Features**: Jump to page, page size selector, prev/next

#### 25. **Tabs** (`el-tabs`) & **Tab Panel** (`el-tab-panel`)
- **Variants**: line, enclosed, pills
- **Props**: `variant`, `active-tab`
- **Slots**: tabs, panels
- **Features**: Keyboard navigation, lazy loading

#### 26. **Accordion** (`el-accordion`) & **Accordion Item** (`el-accordion-item`)
- **Variants**: single, multiple (expand multiple at once)
- **Props**: `variant`, `default-open`
- **Slots**: `header`, default (content)
- **Features**: Smooth expand/collapse, icons

#### 27. **Progress Bar** (`el-progress`)
- **Variants**: bar, circle
- **Sizes**: sm, md, lg
- **Props**: `value`, `max`, `variant`, `size`, `show-value`, `indeterminate`

#### 28. **Skeleton** (`el-skeleton`)
- **Variants**: text, circle, rectangle
- **Props**: `variant`, `width`, `height`, `rows`
- **Features**: Pulse animation

#### 29. **Tag/Chip** (`el-chip`)
- **Variants**: filled, outlined
- **Sizes**: sm, md, lg
- **Props**: `variant`, `size`, `removable`, `clickable`
- **Slots**: `icon`, default, `remove`

#### 30. **Toggle Group** (`el-toggle-group`)
- Single or multiple selection
- **Props**: `type` (single, multiple), `value`
- **Slots**: default (toggle items)

---

### Organisms (Complex Components)

#### 31. **Modal/Dialog** (`el-modal`)
- **Sizes**: sm, md, lg, xl, full
- **Props**: `open`, `size`, `closable`, `close-on-backdrop`, `persistent`
- **Slots**: `header`, default (body), `footer`
- **Features**: Focus trap, backdrop, ESC to close, scroll lock

#### 32. **Drawer** (`el-drawer`)
- **Placements**: left, right, top, bottom
- **Sizes**: sm, md, lg, xl
- **Props**: `open`, `placement`, `size`, `closable`
- **Slots**: `header`, default, `footer`

#### 33. **Table** (`el-table`)
- **Features**: Sorting, filtering, pagination, row selection, expandable rows
- **Props**: `data`, `columns`, `sortable`, `selectable`, `striped`, `hoverable`
- **Slots**: Column templates, row templates, empty state
- **Components**: `el-table`, `el-table-header`, `el-table-body`, `el-table-row`, `el-table-cell`

#### 34. **Data Grid** (`el-data-grid`)
- Advanced table with virtual scrolling, column resizing, cell editing
- **Features**: All table features plus inline editing, column pinning, grouping

#### 35. **Form** (`el-form`)
- **Props**: `schema`, `validation`, `layout` (vertical, horizontal)
- **Features**: Validation, error handling, submit handling
- **Slots**: default (form fields)

#### 36. **Stepper** (`el-stepper`)
- **Variants**: horizontal, vertical
- **Props**: `steps`, `current-step`, `variant`
- **Features**: Linear/non-linear navigation, validation per step

#### 37. **Navigation** (`el-nav`)
- **Variants**: sidebar, topbar, mega-menu
- **Features**: Responsive collapse, active states, nested items
- **Components**: `el-nav`, `el-nav-item`, `el-nav-group`

#### 38. **Sidebar** (`el-sidebar`)
- **Props**: `collapsible`, `collapsed`, `placement` (left, right)
- **Features**: Collapse animation, responsive behavior

#### 39. **Command Palette** (`el-command`)
- **Features**: Keyboard shortcuts (Cmd+K), fuzzy search, recent items, categories
- **Props**: `open`, `placeholder`
- **Slots**: `input`, `list`, `empty`

#### 40. **Calendar** (`el-calendar`)
- **Views**: day, week, month, year
- **Props**: `view`, `value`, `min`, `max`, `disabled-dates`
- **Features**: Date range selection, events display

#### 41. **Date Picker** (`el-date-picker`)
- **Variants**: single, range
- **Props**: `type`, `format`, `min`, `max`
- **Features**: Calendar popup, keyboard input, time picker option

#### 42. **Time Picker** (`el-time-picker`)
- **Props**: `format` (12h, 24h), `step`
- **Features**: Dropdown or input, AM/PM toggle

#### 43. **File Upload** (`el-file-upload`)
- **Variants**: button, dropzone
- **Props**: `accept`, `multiple`, `max-size`, `max-files`
- **Features**: Drag & drop, preview, progress bar, file list

#### 44. **Carousel** (`el-carousel`)
- **Props**: `autoplay`, `interval`, `loop`, `show-indicators`, `show-arrows`
- **Features**: Touch/swipe support, keyboard navigation, thumbnails

#### 45. **Image** (`el-image`)
- **Features**: Lazy loading, placeholder, error state, lightbox/zoom
- **Props**: `src`, `alt`, `lazy`, `fit` (cover, contain, fill)

#### 46. **Empty State** (`el-empty-state`)
- **Props**: `icon`, `title`, `description`
- **Slots**: `icon`, `title`, `description`, `actions`

#### 47. **Search** (`el-search`)
- **Features**: Autocomplete, recent searches, keyboard navigation
- **Props**: `placeholder`, `suggestions`, `debounce`
- **Events**: Search, select, clear

#### 48. **Rating** (`el-rating`)
- **Props**: `value`, `max`, `readonly`, `size`, `icon`
- **Features**: Half-star support, custom icons, hover preview

#### 49. **Slider** (`el-slider`)
- **Variants**: single, range
- **Props**: `min`, `max`, `step`, `marks`, `tooltip`
- **Features**: Keyboard support, vertical orientation, marks/labels

#### 50. **Color Picker** (`el-color-picker`)
- **Features**: Hex/RGB/HSL input, eyedropper, swatches, alpha channel
- **Props**: `value`, `format`, `show-alpha`, `swatches`

---

## Layout Components

#### 51. **Container** (`el-container`)
- **Props**: `max-width` (sm, md, lg, xl, 2xl, full), `padding`

#### 52. **Grid** (`el-grid`)
- **Props**: `cols`, `gap`, `responsive` breakpoints
- CSS Grid-based layout

#### 53. **Stack** (`el-stack`)
- **Props**: `direction` (vertical, horizontal), `spacing`, `align`, `justify`
- Flexbox-based layout

#### 54. **Spacer** (`el-spacer`)
- **Props**: `size` (from spacing scale)

#### 55. **Aspect Ratio** (`el-aspect-ratio`)
- **Props**: `ratio` (16/9, 4/3, 1/1, custom)

---

## Utility Components

#### 56. **Portal** (`el-portal`)
- Renders content in a different DOM location
- **Props**: `target`

#### 57. **Transition** (`el-transition`)
- **Variants**: fade, slide, scale, collapse
- **Props**: `name`, `duration`, `appear`

#### 58. **Visually Hidden** (`el-visually-hidden`)
- Screen reader only content

#### 59. **Focus Trap** (`el-focus-trap`)
- Traps keyboard focus within a container

#### 60. **Click Outside** (`el-click-outside`)
- Detects clicks outside an element

---

## Design Principles Summary

### Visual Hierarchy
1. **Depth through shadows**, not heavy borders
2. **Whitespace** as a primary design element
3. **Single accent color** for all interactive elements
4. **Neutral palette** for content and structure

### Accessibility First
- WCAG 2.1 AA compliant contrast ratios
- Keyboard navigation for all interactive components
- Focus indicators on all focusable elements
- ARIA labels and roles throughout
- Screen reader tested

### Performance
- Lazy-loaded components where appropriate
- Virtual scrolling for large lists/tables
- Optimized shadow DOM styles
- Tree-shakeable exports

### Developer Experience
- Comprehensive TypeScript types
- Intuitive prop names
- Consistent API across components
- Extensive documentation with examples
- Storybook integration

This is a complete, production-ready component library specification. The "Elemental Minimal" theme ensures your components are versatile enough for any project while maintaining a cohesive, modern aesthetic.