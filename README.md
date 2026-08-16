# Luigi Palermo — Portfolio

A CMS-driven personal portfolio built with Next.js 15 (App Router), React 19, and TypeScript. All content is managed in Contentful and rendered dynamically at request time. Deployed on Vercel.

---

## Getting Started

```bash
yarn install
yarn dev       # starts dev server on http://localhost:3000
yarn test      # runs Jest test suite
yarn build     # production build
yarn lint      # ESLint + Next.js lint
```

Required environment variables:

| Variable           | Description                   |
| ------------------ | ----------------------------- |
| `CMS_SPACE`        | Contentful space ID           |
| `CMS_ACCESS_TOKEN` | Contentful delivery API token |
| `CMS_HOST`         | Contentful API host           |

---

## How It Works

All pages query Contentful for an `appSection` entry keyed by `fields.id`. Each entry contains a list of nested content entries; each entry's `sys.contentType.sys.id` is looked up in `COMPONENT_MAP` to determine which React component to render, and the entry's `fields` are passed directly as props.

```
Contentful appSection (fields.id = "/")
  └── fields[]
        ├── { contentType: "section", fields: { ... } }   → <Section>
        ├── { contentType: "card",    fields: { ... } }   → <CardWithImage>
        └── ...
```

The shared layout fetches `fields.id: "static-content"` for persistent UI (header, nav, footer). Dynamic pages use the `[path]` segment as the key.

---

## Software Design Choices

### Next.js

Next.js provides flexibility over rendering strategy (SSG, SSR, ISR) without requiring a framework change. The site currently renders at request time using React Server Components, with the option to adopt ISR or full SSR as needed.

### Folder Structure

Two folders sit inside `/app`, following Next.js conventions:

- `_/` — private folder excluded from routing. Contains all components, helpers, and the page-module.
- `(routes)/` — route group for the root layout, the home page, and the `[path]` catch-all. Keeps routing concerns separate from application logic.

### Semantic HTML and Accessibility

All interactive elements have meaningful `aria-label` attributes. Links carry short, descriptive labels rather than wrapping entire card contents, which prevents confusing output for screen readers. The `Section` component chooses between `ul`/`li` and plain `span` wrappers based on its `htmlRole` prop, so list semantics are only used where content is genuinely list-like.

### REM Units over Pixels

All sizing uses `rem` units so that users who increase their browser base font size get a proportionally scaled layout rather than overflowing fixed-pixel elements.

### BEM with CSS Modules

CSS class names follow BEM convention (`block__element--modifier`) scoped inside CSS Modules. This keeps styles co-located with their component, avoids global collisions, and makes the relationship between a parent and its children explicit from the class name alone.

### Component Map Pattern

`COMPONENT_MAP` (`src/app/_/components/index.ts`) is a plain object that maps Contentful content type IDs to React components. Adding a new content type means registering one entry in this map — no conditional rendering chains or switch statements scattered across the codebase.

| Contentful type | Component               |
| --------------- | ----------------------- |
| `headerGroup`   | `Header`                |
| `card`          | `CardWithImage`         |
| `section`       | `Section` _(recursive)_ |
| `textBlock`     | `ContentfulRichText`    |
| `pillList`      | `PillList`              |
| `footer`        | `Footer`                |
| `link`          | `Link`                  |
| `videoContent`  | `Video`                 |
| `image`         | `Image`                 |

### Husky & GitHub Actions

Husky runs the test and build scripts on every commit. GitHub Actions enforce the same checks on every pull request, preventing broken code from being merged.
