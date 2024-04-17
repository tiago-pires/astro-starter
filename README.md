# Astro Starter:

- [x] Git/gh Repo
- [x] Add Tailwind
- [x] Add React
- [ ] Add shadcn/ui
- [ ] Add Nav
- [ ] Add blog (content collection)
- [ ] Add mdx support

## Adding shadcn to Astro

Add react and tailwind first

`pnpm astro add react`
`pnpm astor add tailwind`

```
pnpm dlx shadcn-ui init
```

✔ Would you like to use TypeScript (recommended)? yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? … src/styles/global.css
✔ Would you like to use CSS variables for colors? … yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) … (blank)
✔ Where is your tailwind.config.js located? … tailwind.config.mjs
✔ Configure the import alias for components: … @/components
✔ Configure the import alias for utils: … @/lib/utils
✔ Are you using React Server Components? … yes
✔ Write configuration to components.json. Proceed? … yes

### Setup

Shadcn in Astro needed some adjustments

Install `tailwind` and `react` integration first

The `pnpm dlx shadcn-ui init` will create `components.json` and change a few files, overview bellow.

```
.
├── README.md
├── astro.config.mjs <- manage tailwind css yourself
├── components.json <- shadcn add its paths
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── Card.astro
│   │   ├── Test.tsx
│   │   └── ui <- shadcn components folder
│   │       └── sheet.tsx
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro <- import `@/styles/global.css` here
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── global.css <- tailwind directives and shadcn vars
├── tailwind.config.mjs <- shadcn vars, check `content` prop
└── tsconfig.json <- add baseUrl & paths

```

shadcn component configs

`components.json`

```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "./src/styles/global.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

Manage tailwind CSS file yourself

Tell Astro you will manage tailwind CSS file yourself

```javascript
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
```

Check that `src/styles/global.css` was created by shadcn with tailwind directives and shadcn CSS vars.

In `tsconfig.json` you need `baseUrl` and `paths` set.

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

shadcn may change your `tailwind.config.mjs` content prop. Make sure `.astro` extension is there. It may add some extra ones as if it was a Next app.

```javascript
content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
```

Now you import that style in your `Layout.astro`, or wherever you need it.

```astro
---
import '@/styles/globals.css', that is where shadcn css goes
---
```

Install shadcn components with

```
pnpm dlx shadcn-ui add button
```

Components will be added to `@/components/ui/`

```
src
├── components
│   ├── Card.astro
│   ├── Test.tsx
│   └── ui
│       └── sheet.tsx
├── env.d.ts
├── layouts
│   └── Layout.astro
├── lib
│   └── utils.ts
├── pages
│   └── index.astro
└── styles
    └── global.css
```
