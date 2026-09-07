# Repository Guidelines

## Scope and Working Agreement

- Keep changes focused on the user's request. Analysis and review requests do not authorize implementation.
- Read the relevant source, nearby tests, and package configuration before editing. Check `git status` and preserve
  unrelated changes. Prefer `rg` for navigation.
- Treat manifests, lockfiles, and project configuration as the source of truth for versions and commands. Update this
  file when an authorized change makes its guidance obsolete.
- Do not commit, push, publish, deploy, or run release automation unless explicitly requested.

## Repository Map

This is an Nx workspace with two publishable Angular libraries and a documentation/demo application.

| Directory               | Nx project             | Purpose                                        |
| ----------------------- | ---------------------- | ---------------------------------------------- |
| `projects/ng-draw-flow` | `ng-draw-flow`         | `@ng-draw-flow/core`: editor and graph APIs    |
| `projects/layouts`      | `ng-draw-flow-layouts` | `@ng-draw-flow/layouts`: optional tree layouts |
| `projects/demo`         | `demo`                 | Documentation, examples, and browser/SSR app   |

- Each library's public entry point is `src/index.ts`; implementation belongs under its `src/lib/` directory.
- Core owns rendering, connectors, interactions, graph state, validation, and camera behavior. Keep automatic tree
  layout algorithms and `d3-hierarchy` in the optional layouts package; core must not depend on layouts or demo.
- Demo documentation and examples live under `projects/demo/src/`. Root `README.md`, package READMEs, and
  `CONTRIBUTING.md` provide user-facing guidance.
- Build output belongs in `dist/`; test reports belong in `coverage/`. Do not edit generated bundles as the solution.

## Setup and Commands

Use npm and the existing `package-lock.json`. Run commands from the repository root. Install with `npm ci` when
dependencies are needed; a documentation-only edit does not require installing the full workspace.

```bash
npm start                                         # Serve the demo
npx nx test ng-draw-flow --runInBand               # Core unit tests
npx nx test ng-draw-flow-layouts --runInBand        # Layouts unit tests
npm run test                                      # Both library test suites
npx nx build ng-draw-flow --configuration=production
npx nx build ng-draw-flow-layouts --configuration=production
npm run build                                     # All production build targets
npm run lint                                      # Workspace ESLint
npm run stylelint                                 # Workspace Less/CSS checks
npx prettier --check AGENTS.md                     # Example: check a specific changed file
```

- For a focused spec, use the relevant Nx test target with `--runTestsByPath` and its repository-relative path.
- `npm run prettier`, `npm run lint:fix`, and `npm run stylelint:fix` modify files. Prefer formatting only the files
  touched by the task; do not introduce workspace-wide formatting churn.
- CI also builds the GitHub Pages demo with `npx nx build-gh-pages demo`, including prerendering. Check this target when
  changes affect documentation rendering or browser/server behavior.
- `npm run release` runs syncer and package publishing. It is not a verification command.

## Coding and Architecture

- Follow `.editorconfig`, the Taiga UI Prettier/Stylelint configurations, and `eslint.config.ts`. Use four-space
  indentation and existing naming conventions: `Df` for relevant public types, `DF_*` for tokens, and kebab-case files.
- Follow nearby standalone Angular components, `OnPush`, dependency injection, and signal/RxJS patterns. Do not convert
  unrelated working code between signals and Observables as part of a feature or bug fix.
- Preserve strict TypeScript and template checking. Narrow unknown external data with explicit type guards; do not hide
  compatibility issues with broad `any`, `$any`, `@ts-ignore`, or disabled compiler checks.
- Export only intentionally public symbols through the library entry point. Consumers and cross-package code must use
  public exports, not private source paths. Preserve existing exports, selectors, configuration, and event shapes unless
  a breaking change is explicitly part of the task.
- Graph data can contain custom node data, Angular component references, and Polymorpheus content. Do not JSON-clone the
  model. Preserve application-owned values and use targeted immutable updates where change notification needs new
  references.
- Keep graph coordinates separate from viewport pan/zoom. Preserve node/connector identity and avoid unnecessary
  whole-graph recomputation in pointer-move, resize, or animation paths.
- Keep application-specific form schemas and business rules outside core. Avoid changing service/provider scope or store
  attachment semantics incidentally; cover lifecycle and multiple-editor behavior when touching those areas.
- Clean up subscriptions, DOM listeners, observers, and animation frames on destruction. Respect existing platform
  abstractions and SSR guards when accessing browser APIs.

## Angular and Forms Compatibility

The current workspace builds with Angular 19; package manifests declare Angular 19+ peer support. Keep this baseline
unless the user explicitly requests an upgrade. Do not upgrade Angular, CLI, TypeScript, Nx, or the minimum peer range
merely to make a compatibility test pass.

When implementing or changing Signal Forms compatibility:

- Preserve the existing `ControlValueAccessor` (CVA) integration and Reactive Forms API. Use the newer consumer's CVA
  interoperability path while core stays on Angular 19; do not add a second editor component or combine CVA with a
  native `FormValueControl` contract without an explicit architectural request.
- Do not import `@angular/forms/signals` into the Angular 19 libraries or their public declarations, including type-only
  imports. Keep newer Angular dependencies and imports in an isolated integration consumer.
- Do not assume injected `NgControl.control` is a full `AbstractControl`. Compatibility controls can lack
  `statusChanges` and `valueChanges`; guard required capabilities and handle absent form bindings safely.
- Keep validation algorithms pure and reusable. Preserve existing Reactive Forms validators and error shapes. Any Signal
  Forms adapters must be structurally type-checked in the consumer, not forced through unsafe casts.
- Normalize external errors at the boundary. Test legacy error maps, Signal Forms error arrays, wrapped error contexts,
  empty errors, and unrecognized errors. Graph-level errors must coexist with custom node validation; clearing one
  source must not erase the other or affect another editor instance.
- Debounce internal form value notifications by 10ms while keeping graph/store updates immediate and atomic. Flush
  pending values before touch/blur; cancel them on reset, model replacement, public commands and destruction. Public
  commands remain synchronous. `writeValue` must not echo `onChange` or mark the field dirty/touched.
- Treat the editor as a composite control: moving focus between its children is not leaving the editor. Report touch
  when focus leaves it, and ensure `touch -> reset -> touch` works without a permanent local touched latch. Preserve
  focus behavior of editable content inside custom nodes.
- Disabled handling must block applicable pointer and keyboard edits, not just set CSS. Respect existing interaction
  options, propagate accessibility state, and keep programmatic model writes working while disabled.
- Test with a pinned newer Angular consumer that installs a tarball built by this workspace. Source path aliases, mocks
  alone, or the already-published package do not prove distribution compatibility. Compile templates and public types,
  then exercise `[formField]`, value propagation, validation, disabled, focus/touched, and reset behavior.
- Verify the chosen consumer version's official Angular contract before relying on optional inputs or newer APIs. Record
  tested versions and distinguish CVA interoperability from native Signal Forms support in documentation.

These are requirements for forms-related work, not an instruction to implement a migration during unrelated tasks. Do
not claim Signal Forms compatibility until the packaged-consumer checks pass. Internal Reactive Forms controls can
remain in place; they do not have to be rewritten as signals.

## Tests and Verification

- Co-locate Jest specs as `*.spec.ts`. Reuse each project's `jest.config.ts` and `src/test-setup.ts`; Angular tests use
  `jest-preset-angular` and its Zone test environment. Do not introduce a new unit-test runner for ordinary changes.
- Add a regression test for each bug fix and cover observable public behavior. For integration-sensitive code, do not
  mock away the directive, CVA registration, template binding, or packaging boundary being tested.
- Use controlled timers and explicit events for scheduled behavior. Do not use arbitrary sleeps to conceal races; assert
  synchronous contracts before advancing timers. Restore mocked globals and clean up fixtures.
- Run focused tests during development, then relevant library suites and production builds. Changes to shared core APIs
  also need layouts checks; changes to examples need a demo build. Run applicable lint/style/format checks.
- Packaging changes require checking emitted entry points and declarations and installing the built package in a clean
  consumer. Declare direct runtime imports in the appropriate package's dependencies or peer dependencies; root
  devDependencies and transitive installs are not sufficient for consumers.
- Keep intentional dependency changes and the lockfile consistent. Do not regenerate the lockfile or bump package
  versions for unrelated edits, or relax peer constraints merely to silence installation failures.
- For documentation-only changes, check formatting, paths, commands, and `git diff --check`; full Angular tests are
  unnecessary. If a check cannot run, report the missing prerequisite and do not describe it as passing.

## Documentation and Handoff

- Update the relevant README and demo documentation when public API or behavior changes. Keep examples runnable on the
  versions they claim to support; do not put newer-only Angular APIs into the Angular 19 demo.
- Before finishing, inspect the diff for unrelated edits, generated output, and accidental API changes. Report the
  outcome, checks actually run, and remaining limitations. Keep code comments and repository documentation in English;
  use the user's language for the handoff.
- If commits or a PR are requested, follow Conventional Commits, for example `fix(core): handle form reset`. Explain
  intent, compatibility impact, and testing evidence; link the related issue and include visuals for UI changes when
  relevant. Follow `CONTRIBUTING.md` without publishing or opening a PR implicitly.
