# Recipe Finder and Meal Planner

A complete Svelte 5 + SvelteKit application that consumes a reusable StencilJS Web Component library. Recipe data comes from TheMealDB public API. Favorites, custom recipes, and the weekly plan persist in browser localStorage.

## Live Links

- **Live Application:** https://hknagp-recipe-planner.netlify.app
- **Published npm Package:** https://www.npmjs.com/package/@hitainkakkar/recipe-ui
- **GitHub Repository:** https://github.com/HKCODES7/recipe-finder-meal-planner

## Workspaces

- `apps/recipe-app`: SvelteKit application
- `packages/recipe-ui`: StencilJS Web Component library

## Features

- Browse recipes from TheMealDB
- Search recipes by name
- Filter recipes by category
- View recipe ingredients and cooking instructions
- Add and remove favorite recipes
- Create custom recipes
- Validate recipe input before saving
- Edit and delete user-created recipes
- Assign recipes to days of the week
- Change or remove planned meals
- Persist favorites, custom recipes, and meal plans in browser localStorage
- Responsive layout for desktop, tablet, and mobile devices

## Technology Stack

- Svelte 5
- SvelteKit
- TypeScript
- Vite
- StencilJS
- Web Components
- TheMealDB API
- Browser localStorage
- npm
- GitHub
- Netlify

## Prerequisites

Install the following before running the project:

- Node.js 20 or later
- npm 10 or later

The project was developed and tested with:

```text
Node.js v24.14.1
npm 11.11.0
```

## Quick Start

Install dependencies from the repository root:

```bash
npm install
```

Build the StencilJS component library:

```bash
npm run build:ui
```

Start the SvelteKit development server:

```bash
npm run dev -w apps/recipe-app
```

Open:

```text
http://localhost:5173
```

## Development Commands

Check the SvelteKit application:

```bash
npm run check -w apps/recipe-app
```

Build the StencilJS component library:

```bash
npm run build:ui
```

Build the complete project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview -w apps/recipe-app
```

The production preview normally runs at:

```text
http://localhost:4173
```

## Published StencilJS Component Library

The reusable component library is published as:

```text
@hitainkakkar/recipe-ui
```

Install it independently with:

```bash
npm install @hitainkakkar/recipe-ui
```

Published package:

https://www.npmjs.com/package/@hitainkakkar/recipe-ui

The library includes these Web Components:

- `<recipe-card>`
- `<recipe-search>`
- `<meal-day>`
- `<app-modal>`

The SvelteKit application integrates with the Web Components through:

- Component properties
- Custom events
- Slots
- Custom-element registration
- Shadow DOM

## Project Structure

```text
recipe-finder-meal-planner/
├── apps/
│   └── recipe-app/
│       ├── src/
│       │   ├── lib/
│       │   └── routes/
│       ├── package.json
│       ├── svelte.config.js
│       ├── tsconfig.json
│       └── vite.config.ts
├── packages/
│   └── recipe-ui/
│       ├── src/
│       │   └── components/
│       ├── package.json
│       ├── stencil.config.ts
│       └── tsconfig.json
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Application Routes

```text
/                              Landing page
/recipes                       Discover recipes
/recipes/[source]/[id]         Recipe details
/favorites                     Favorite recipes
/my-recipes                    User-created recipes
/my-recipes/new                Create a recipe
/my-recipes/[id]/edit          Edit a custom recipe
/meal-plan                     Weekly meal planner
```

## Data Storage

The application stores the following information in browser localStorage:

- Favorite recipes
- User-created recipes
- Weekly meal-plan assignments

Stored information belongs to the current browser and website origin. Therefore:

- Localhost data is separate from deployed-site data
- Different browsers maintain separate data
- Clearing browser storage removes saved application data
- Private browsing may use temporary storage

## Assumptions

- Public recipe data is provided by TheMealDB.
- API availability and remote recipe images depend on the external service.
- User-created recipes are stored locally and are not uploaded to TheMealDB.
- Discover Recipes displays recipes obtained from the public API.
- Custom recipes appear under My Recipes.
- Only user-created recipes can be edited or deleted.
- An image URL is optional for a custom recipe.
- A supplied image URL should be a complete public URL beginning with `https://`.
- One recipe can be assigned to each day of the weekly planner.
- The same recipe may be assigned to multiple days.
- No user account, backend server, or database is required.

## Deployment

The application is deployed on Netlify:

https://hknagp-recipe-planner.netlify.app

Netlify builds the project using:

```bash
npm run build
```

The generated static application is located at:

```text
apps/recipe-app/build
```

## Security

Generated files, dependencies, credentials, and environment files should not be committed:

```text
node_modules/
.svelte-kit/
build/
.stencil/
.idea/
.env
.env.*
.npmrc
*.log
*.tgz
```

npm access tokens and other credentials must never be committed to the repository.

## Author

Hitain Kakkar
