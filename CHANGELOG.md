### [0.7.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.6.0...v0.7.0) (2024-11-14)

### 🚀 Features

- refactoring after code review
  [(8483f82)](https://github.com/taiga-family/ng-draw-flow/commit/8483f8263d1179e92e53b48af6926ac218d8553f)
- added a clickable stroke for the connecting lines
  [(d5b132a)](https://github.com/taiga-family/ng-draw-flow/commit/d5b132a3ae6b88c4d63f2133dda2d95422fe585f)
- discarded the @HostListener decorator
  [(3d47769)](https://github.com/taiga-family/ng-draw-flow/commit/3d477692926662148b2ec4f90b28963be620acb7)
- refactoring after review
  [(fe01dff)](https://github.com/taiga-family/ng-draw-flow/commit/fe01dffb87e4445e85dde4644483fdbb60078a87)

### 🐞 Bug Fixes

- corrected the selection of elements. Not deselecting elements when drag drop by scene
  [(672089f)](https://github.com/taiga-family/ng-draw-flow/commit/672089fb9cf86f9ef1b2173b553c87465c800624)

### [0.6.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.5.0...v0.6.0) (2024-10-28)

### 🚀 Features

- added the connection-selected event
  [(5475c0e)](https://github.com/taiga-family/ng-draw-flow/commit/5475c0e64660fe7a1a5ef299e203c9cac7433723)
- retain selection while moving across the scene
  [(959f360)](https://github.com/taiga-family/ng-draw-flow/commit/959f360a5a458463dca8efc4e32ddb40e5c3b382)

### 🐞 Bug Fixes

- fixed a bug that caused scale to be shared between ng-draw-flow instances
  [(e00b9f7)](https://github.com/taiga-family/ng-draw-flow/commit/e00b9f77e404414f1d0fe623fb37ac211f88e80f)

### [0.5.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.4.0...v0.5.0) (2024-10-22)

### 🐞 Bug Fixes

- fix rebase conflicts
  [(02e853a)](https://github.com/taiga-family/ng-draw-flow/commit/02e853a4f38e9635af7ebfb06b5e73abe1a6236d)
- update package-lock
  [(13fae8d)](https://github.com/taiga-family/ng-draw-flow/commit/13fae8de3c784b5b7cd0adaf4085feb6d88593a9)
- update package-lock
  [(9818fce)](https://github.com/taiga-family/ng-draw-flow/commit/9818fce78c576e661f697ce60ba4b64da2263818)
- update package-lock
  [(bcd31b7)](https://github.com/taiga-family/ng-draw-flow/commit/bcd31b73c8fc1124e3ba87d50e5ad63e76c48aa4)
- to make the lines not overlap each other, I added pointer-events: stroke
  [(bba9ab5)](https://github.com/taiga-family/ng-draw-flow/commit/bba9ab54e193c5e6e66d9ab190c6a95f5e66a3c2)

### [0.4.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.3.0...v0.4.0) (2024-10-17)

### 🚀 Features

- added smoothStep connections
  [(a3c4d68)](https://github.com/taiga-family/ng-draw-flow/commit/a3c4d68bcaec97a06f6b6a38bb599f338a44d68e)
- refactoring after code review
  [(63509ef)](https://github.com/taiga-family/ng-draw-flow/commit/63509efd12979a69b78be528c2cc4ab0cb1bc33e)
- added position property for connectors
  [(0768dea)](https://github.com/taiga-family/ng-draw-flow/commit/0768dea74f955bc5e7b80137cc9ffcedc3053e55)

### 🐞 Bug Fixes

- parths [(9371201)](https://github.com/taiga-family/ng-draw-flow/commit/937120125f34a01426fca420c03b6b3065aecb0d)
- circular dependency error
  [(13f40ad)](https://github.com/taiga-family/ng-draw-flow/commit/13f40ada5791c9c08393c105afabd10f6daf3b39)

### [0.3.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.2.0...v0.3.0) (2024-10-08)

# Changelog

All notable changes to this project will be documented in this file. See
[`conventional commits`](https://www.conventionalcommits.org/) guidelines.

### [0.2.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.1.0...v0.2.0) (2024-10-08)

### [0.1.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.0.6...v0.1.0) (2024-10-08)

### 🚀 Features

- dropped the ng-web-apis dependency. Moved resize-observer into the project
  [(9ec9c0e)](https://github.com/taiga-family/ng-draw-flow/commit/9ec9c0e90384393136887854b8ac6c6488245e74)
- removed the duplication from ng-web-apis. Made the df-resize-observer directive workaround
  [(b7fe057)](https://github.com/taiga-family/ng-draw-flow/commit/b7fe05717652e0dda027bf24c70c02ccbeb924b6)
- fix after review
  [(ddb4b58)](https://github.com/taiga-family/ng-draw-flow/commit/ddb4b585776052a04b2282ec148ecc487fb2e190)

### 🐞 Bug Fixes

- small fix [(2900efd)](https://github.com/taiga-family/ng-draw-flow/commit/2900efd1884da2be4018f05199d5b62e9e42f7e8)
- **deps**: update taiga-ui (#42)
  [(95ab5f2)](https://github.com/taiga-family/ng-draw-flow/commit/95ab5f20fd2bfd9189f6d0f07526ab7fcfba4ecd)

### [0.0.6]() (2024-09-22)

### 🚀 Features

- init [(fd49881)](https://github.com/taiga-family/ng-draw-flow/commit/fd49881f37b9112c9447ea6e60fbb768f8712c1c)
- rename panzoom to pan-zoom
  [(a495d78)](https://github.com/taiga-family/ng-draw-flow/commit/a495d78c4786875d4f77a3708f87cf8b8bdde6f6)
- improved node positioning
  [(6cb6414)](https://github.com/taiga-family/ng-draw-flow/commit/6cb6414c7e6b39375e40db6682ad5fde8183cb80)
- new icon [(cdf622b)](https://github.com/taiga-family/ng-draw-flow/commit/cdf622b3768653c9ca09df6c40b8de3ad290bb82)
- rename panzoom to pan-zoom
  [(630d08d)](https://github.com/taiga-family/ng-draw-flow/commit/630d08d8cde1b81ac322b868a9c66f96b373a365)

### 🐞 Bug Fixes

- upgrade taiga-family guidelines
  [(b2c9fd8)](https://github.com/taiga-family/ng-draw-flow/commit/b2c9fd80201f55ca4e98abd814219add1ee1e16b)
- fix docs [(3cb3d48)](https://github.com/taiga-family/ng-draw-flow/commit/3cb3d488a2eab9d3849e36c749fff67cba695aeb)
- just bump version
  [(d4396c5)](https://github.com/taiga-family/ng-draw-flow/commit/d4396c57305a66364163bcb668ec80d63e0880c2)
- peerDependency versions
  [(6e77f12)](https://github.com/taiga-family/ng-draw-flow/commit/6e77f12cdc6add0db9510b88d39822c8367bc130)
- corrected incorrect position of connection lines in codesandbox
  [(2b5706d)](https://github.com/taiga-family/ng-draw-flow/commit/2b5706d1247b0fa665f4ba8c77764bd1024362a4)
- **deps**: pin dependency tslib to 2.7.0 (#21)
  [(bd6b63a)](https://github.com/taiga-family/ng-draw-flow/commit/bd6b63af201c027a45a9ed50d1550c4fd7d7eb2f)
