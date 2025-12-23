---
alwaysApply: true
---

# Section Development Rules

## When Creating a New Section

1. **Content Location**: Always put content in `src/config/i18n/{locale}/{pageName}.ts`, never inline
2. **TypeScript Interface**: Create interface in `src/types/{pageName}.ts` for section props
3. **Component Location**: Place in `src/components/sections/{pageName}Page/{SectionName}.astro`
4. **Reusable Components**: Use `Button`, `Title`, `Section`, `Paragraph`, `Subtitle`, `Badge` from `/ui`
5. **Styling**: TailwindCSS v4 only, use CSS variables (`--color-primary`, `--color-secondary`), mobile-first
6. **Structure**: Wrap in `Section` component, use semantic HTML (`<section>`, proper heading hierarchy)

## When Switching Sections

1. **Check Existing**: Look for similar sections/components to reuse (`TextImageSection`, `Hero`, `FAQ`, `Contact`)
2. **Consistency**: Match existing patterns (spacing, variants, sizes)
3. **i18n**: Add content to both to locals that the project support
4. **Types**: Update or create type definitions if needed
5. **Integration**: Import section in page file, pass props from i18n config

## Quick Reference

- **Framework**: Astro 5.x | **Styling**: TailwindCSS v4
- **i18n**: `src/config/i18n/{locale}/` - export objects per page
- **Components**: `/ui` (reusable) | `/sections/{page}Page/` (page-specific) | `/shared` (cross-page)
- **Always**: Use reusable components, put content in i18n, TypeScript interfaces, mobile-first responsive
