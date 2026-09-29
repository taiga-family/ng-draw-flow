# Contributing

> Thank you for considering contributing to our project. Your help if very welcome!

When contributing, it's better to first discuss the change you wish to make via issue, email, or any other method with
the owners of this repository before making a change.

All members of our community are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Please make sure you are
welcoming and friendly in all of our spaces.

## Getting started

In order to make your contribution please make a fork of the repository. After you've pulled the code, follow these
steps to kick-start the development:

1. Run `npm ci` to install dependencies
2. Run `npm start` to launch demo project where you could test your changes
3. Use following commands to ensure code quality

```bash
npm run lint
npm run build
npm run test
```

### Regression tests and coverage

Run `npm run typecheck:tests` as well as Jest: successful test execution does not prove test fixtures are type-correct.

Use `npm run test:coverage` to measure all library source files, including files not imported by a test. Each library
has its own minimum statement, branch, function and line coverage. Reports are saved under `coverage/projects/`. Raise
these floors when adding coverage; do not reduce them to accommodate a change. Prefer observable behavior, real Angular
form bindings and controlled timers over assertions about private fields or arbitrary delays.

Run one spec with `npx nx test ng-draw-flow --runInBand --testPathPattern=filename.spec.ts`. A bug fix should have a
regression that fails before the fix. Keep library unit tests in Jest; browser interaction belongs in Playwright.

### Browser tests

Install Chromium once with `npm run e2e:install`, then run `npm run e2e`. The dedicated fixture uses the real editor,
node components, connectors and Reactive Forms integration. It is excluded from the public demo entry. The runner uses a
fixed viewport and web-first assertions, and saves reports and failure traces under `coverage/`. CI installs its own
pinned browser and uploads these artifacts. Do not commit generated reports or update screenshots implicitly.

For a local diagnostic run with an installed Google Chrome, use `PW_CHANNEL=chrome npm run e2e`. Record the channel and
version: this does not replace CI verification with Playwright's pinned Chromium. Browser exceptions and console errors
fail the scenarios.

### Performance reports

Run `npm run benchmark` for deterministic chain, star, balanced-tree, disconnected and dense-DAG algorithm fixtures. The
runner records warmups, raw samples, median/p95, source hashes, revision and machine details in JSON/CSV under
`coverage/performance/`. It times source algorithms, including allocation costs. Angular rendering and package
compatibility require separate checks.

After building both libraries, run `npm run benchmark:bundles` to check emitted entry points, declared runtime imports,
core/layouts boundaries and the absence of Signal Forms imports in declarations, and record raw/gzip FESM sizes. These
sizes exclude runtime peers and consumer tree shaking. Timing reports are observational: compare repeated runs on the
same idle machine before introducing performance budgets. CI archives metrics without arbitrary timing thresholds.

`npm run e2e:perf` runs the functional Chromium prerequisite followed by a browser measurement with 500 nodes. It
records five samples after one warmup, DOM counts and environment/fixture metadata as a JSON attachment in the browser
report. This development-build metric includes automation/assertion overhead and is not a pure rendering duration.

## Pull Request Process

1. We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) in our commit messages, i.e.
   `feat(core): improve typing`
2. Update [README.md](README.md) to reflect changes related to public API and everything relevant
3. Make sure you cover all code changes with unit tests
4. When you are ready, create Pull Request of your fork into original repository
