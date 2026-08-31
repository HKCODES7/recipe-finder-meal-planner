# Recipe Finder and Meal Planner

A complete Svelte 5 + SvelteKit application that consumes a reusable StencilJS Web Component library. Recipe data comes from TheMealDB public API. Favorites, custom recipes, and the weekly plan persist in browser localStorage.

## Workspaces
- `apps/recipe-app`: SvelteKit application
- `packages/recipe-ui`: Stencil component library

## Quick start
```bash
npm install
npm run dev
```
Open `http://localhost:5173`.

## Production check
```bash
npm run check
npm run build
npm run preview -w apps/recipe-app
```

## npm publication
Change the package scope from `@hitainkakkar/recipe-ui` to your real npm scope in both package files, build and publish from `packages/recipe-ui`, then replace `workspace:*` in the app with the published version, for example `^1.0.0`.

## Assumptions
- One planned recipe per weekday is sufficient because meal slots were not specified.
- API recipes are read-only. Only user-created recipes can be edited or deleted.
- Browser localStorage is used because authentication and a backend were not required.
- TheMealDB test API is used without a secret key.

## Required submission links
- npm: https://www.npmjs.com/package/@hitainkakkar/recipe-ui
- GitHub: add after push
- Deployment: add after deployment
