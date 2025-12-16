---
alwaysApply: true
---

# Astro Boilerplate Rules

## Core Technologies
- **Framework**: Astro 5.x | **Styling**: TailwindCSS v4 | **Deployment**: Cloudflare
- **Image Optimization**: Astro Image 

## Project Structure
```
/src
  /components
    /layout      # Header, Footer (locale-aware)
    /sections    # Page sections (grouped by feature)
    /shared      # Shared across pages
    /ui          # Reusable UI components
  /config/i18n  # Translation files ({locale}.ts, translation.ts)
  /layouts       # Layout.astro (main wrapper)
  /pages         # File-based routing
    index.astro  # Default language
    /{locale}    # Additional languages
  /styles        # global.css + Tailwind
  /utils         # Utility functions
```

## i18n Configuration
- **Default Language**: Root routes (`/`, `/about`)
- **Additional Languages**: Locale prefix (`/fr/`, `/es/`)
- **Translation Files**: `src/config/i18n/[locale]/` - Export objects per page/feature

## Component Architecture

### UI Components (`/components/ui/`)
- Reusable elements: `Button`, `Title`, `Section`, `FAQ`, `Card`, `Input`
- **Pattern**: TypeScript interfaces, TailwindCSS v4, variants/sizes, accessibility, CSS variables

### Section Components (`/components/sections/`)
- Page-specific sections grouped by feature
- **Pattern**: Accept translations, use UI components, semantic HTML

### Layout Components (`/components/layout/`)
- `Header`, `Footer` - Accept `lang` prop, locale-aware navigation

### Shared Components (`/components/shared/`)
- Reusable across multiple pages, locale-aware when needed

## Page Creation

### Required Elements
1. Use `Layout.astro` with proper props
2. Import translations (`{locale}*`)
3. Add structured data (WebPage + BreadcrumbList minimum)
4. Set `lang` prop matching locale
5. Include trailing slash in canonical URLs

### Multi-language Pattern
- Default language: `src/pages/{page-name}.astro`
- Additional languages: `src/pages/{locale}/{page-name}.astro`
- Same component structure, different translations

## SEO & Styling

### SEO Best Practices
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive `alt` for images, `aria-label` for icons
- Correct `lang` attribute, meta robots, Open Graph, Twitter Cards

### Styling Rules
- **TailwindCSS v4**: Utility classes, mobile-first, CSS variables
- **Components**: `<style>` blocks when needed, prefer Tailwind, use CSS variables
- **UI Patterns**: Variants (`primary`, `secondary`, `outline`, `ghost`), sizes (`sm`, `md`, `lg`), responsive by default

## Code Quality

### TypeScript
- Interfaces for all props, shared types in `src/config/type.ts`
- Avoid `any`, use `@ts-expect-error` sparingly with comments

### Accessibility
- `aria-label` for icons, semantic HTML, proper heading hierarchy
- Descriptive `alt` text, keyboard navigation, screen reader testing

### Performance
- Astro Image component, lazy load images, minimize client-side JS
- Static generation, optimize bundle size, preload critical resources

## Common Patterns

### Language Detection
```typescript
const lang = Astro.url.pathname.startsWith('/{locale}/') ? '{locale}' : '{default-locale}';
```

### Translation Import
```typescript
import { {locale}PageName } from '../config/i18n/{locale}';
```
```

## Checklists

### New Page
- [ ] Create default + translated pages
- [ ] Add translations to all locale files
- [ ] Create section components
- [ ] Add structured data
- [ ] Test responsive + SEO

### New Component
- [ ] Place in correct folder (UI/Section/Shared/Layout)
- [ ] TypeScript interface, TailwindCSS, accessibility
- [ ] Variants/sizes if applicable, responsive, CSS variables

## Important Notes
- Always use `Layout` component with proper meta tags
- Always test responsive design on multiple devices
- Always use semantic HTML for SEO and accessibility
- Use reusable components from `/ui` folder
- Keep translations organized per page/feature
- Use CSS variables for theming consistency
- Follow existing folder structure
