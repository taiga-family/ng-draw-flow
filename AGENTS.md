# Repository Guidelines

## Project Structure & Module Organization

- Nx workspace keeps both apps and libs under `projects/`. The shipping Angular library lives in `projects/ng-draw-flow`
  (`src/lib` for components/services, `src/assets` for icons, `src/index.ts` for the public API barrel), while
  `projects/demo` hosts the showcase app used during development.
- Root configs (`nx.json`, `tsconfig*.json`, `eslint.config.ts`, `jest.config.ts`) govern every target; build artifacts
  land in `dist/` and Jest output in `coverage/`.
- Co-locate feature code (e.g., create a node renderer under `projects/ng-draw-flow/src/lib/components/<feature>`) and
  expose it through the nearest `index.ts` to keep imports tree-shakable.

## Build, Test, and Development Commands

- `npm ci` installs the locked dependency tree before any work.
- `npm start` runs `nx serve demo`, hot-reloading the demo against your linked library build.
- `npm run build` executes `nx run-many --target=build --configuration=production` and emits publishable bundles to
  `dist/`.
- `npm run test` runs the Jest suite for `ng-draw-flow`; add `-- --watch` for TDD loops.
- `npm run lint` / `npm run lint:fix` apply ESLint across the workspace; `npm run stylelint(:fix)` handles `.less`, and
  `npm run prettier` formats TS/HTML/JSON/SVG (excluding `package-lock.json`).

## Coding Style & Naming Conventions

- Source files use 4-space indentation, strict TypeScript settings, and Angular standalone components. Classes,
  services, and tokens use `PascalCase`, while selectors and Less class names stay `kebab-case` with optional BEM
  modifiers.
- Barrels aggregate exports, so new symbols should be surfaced through `projects/ng-draw-flow/src/index.ts`.
- Prettier (`@taiga-ui/prettier-config`), ESLint (`eslint.config.ts` + `@taiga-ui/eslint-plugin-experience-next`), and
  Stylelint guard formatting—run them before committing.

## Testing Guidelines

- Jest (configured via `jest.preset.js`, `ts-jest`, and `projects/ng-draw-flow/src/test-setup.ts`) is the only unit-test
  runner; place specs next to sources as `*.spec.ts`.
- Use `npm run test -- --runInBand` when a spec mutates timers/DOM APIs, and prefer `TestBed` helpers supplied in
  `test-setup.ts`.
- Codecov reporting is advisory yet expected; keep meaningful assertions on every new public API and document any
  intentionally uncovered paths inside the PR.

## Commit & Pull Request Guidelines

- Husky + commitlint enforce Conventional Commits, e.g., `feat(ng-draw-flow): add snap-to-grid`. Scope names should
  match folders (`demo`, `ng-draw-flow`).
- Every PR must state intent, testing evidence, and link an issue/feature. Update `README.md` and the demo when public
  behavior changes, and attach screenshots/GIFs for UI tweaks.
- Lint, build, and test locally before requesting review; avoid mixing unrelated changes, and keep syncer-managed files
  (`projects/**`, `package-lock.json`) in lockstep.
