### [0.18.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.17.1...v0.18.0) (2025-11-06)

### 🚀 Features

- **ng-draw-flow**: add global store facade
  [(b1def13)](https://github.com/taiga-family/ng-draw-flow/commit/b1def13e61fa3192cd23669652006d5ea6d6a489)
- **ng-draw-flow**: add visual distinction for input and output connectors
  [(6928a8e)](https://github.com/taiga-family/ng-draw-flow/commit/6928a8ef52342bf94ecf59a2bc329490832b0426)
- **ng-draw-flow**: expose set-scale api
  [(12ddcf6)](https://github.com/taiga-family/ng-draw-flow/commit/12ddcf665453373440b6fd1314665d3d754f17cf)
- **ng-draw-flow**: fix tests
  [(505f153)](https://github.com/taiga-family/ng-draw-flow/commit/505f153db8e7575810eda948cd02adf709f91153)

### [0.17.1](https://github.com/taiga-family/ng-draw-flow/compare/v0.17.0...v0.17.1) (2025-10-21)

### 🐞 Bug Fixes

- **ng-draw-flow**: update selection rendering and emit nodeMoved only on real move
  [(0d430aa)](https://github.com/taiga-family/ng-draw-flow/commit/0d430aa0846352c9d5ebc39b52952a68e4f2a848)

### [0.17.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.16.0...v0.17.0) (2025-09-23)

### 🐞 Bug Fixes

- output connector
  [(7e903bb)](https://github.com/taiga-family/ng-draw-flow/commit/7e903bbc8a5f840ce6afb39c2bb64e889f6d2704)

### [0.16.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.15.0...v0.16.0) (2025-09-09)

### 🚀 Features

- labels [(5043860)](https://github.com/taiga-family/ng-draw-flow/commit/5043860c9acbdda73fa3cd2dc2f7d1e3d9f39d52)

### 🐞 Bug Fixes

- tests [(997a127)](https://github.com/taiga-family/ng-draw-flow/commit/997a127b6ba4890af41c314b4b663270679bbf24)
- node position property in EditorComponent
  [(67fc8da)](https://github.com/taiga-family/ng-draw-flow/commit/67fc8da7fb2eed88110e801843b8a39ea9b8c463)
- tests [(289f0bc)](https://github.com/taiga-family/ng-draw-flow/commit/289f0bcc335bb290ccd62127aca70b147b6ae927)

### [0.15.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.14.0...v0.15.0) (2025-09-01)

### 🚀 Features

- enable configurable arrowheads for connections
  [(25aaca8)](https://github.com/taiga-family/ng-draw-flow/commit/25aaca829a7731f98bd73889bd3eb887c63f2067)
- add workspace readonly configuration flags
  [(284de37)](https://github.com/taiga-family/ng-draw-flow/commit/284de37521ec785caedae750820ef36a0cdbfdaa)

### [0.14.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.13.0...v0.14.0) (2025-08-27)

### [0.13.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.12.0...v0.13.0) (2025-06-09)

### 🚀 Features

- replace Map with Array for nodes to optimize change-detection & rendering
  [(c427088)](https://github.com/taiga-family/ng-draw-flow/commit/c4270883f2fb94ba00142d48e21da996c1d599bd)

### 🐞 Bug Fixes

- resolve TS errors
  [(356f22c)](https://github.com/taiga-family/ng-draw-flow/commit/356f22cc457d9bde2e37a2ff023e88dbc058b781)
- resolve TS errors
  [(793fc2b)](https://github.com/taiga-family/ng-draw-flow/commit/793fc2b09409c56eb87fc1d6a189951e79572e7b)
- test [(7eed867)](https://github.com/taiga-family/ng-draw-flow/commit/7eed867babf66ad63cdb3339769cf07b6f4aeaef)
- lint [(baae48f)](https://github.com/taiga-family/ng-draw-flow/commit/baae48f2c90732707b9892612fe06a7583d35718)
- lint [(ea2ace5)](https://github.com/taiga-family/ng-draw-flow/commit/ea2ace54ec916c0885e0114e1d7981eeb19886aa)

### [0.12.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.11.0...v0.12.0) (2025-05-28)

### 🚀 Features

- ng-draw-flow.component
  [(a81479f)](https://github.com/taiga-family/ng-draw-flow/commit/a81479f4068bead5ccde4ee354f9cfd49353fc87)
- scene.component
  [(f5fc1e6)](https://github.com/taiga-family/ng-draw-flow/commit/f5fc1e693b4f983e73e4899ea5e84eea1ef66ff7)
- update dfSelectableElement output and event binding
  [(0cf8e82)](https://github.com/taiga-family/ng-draw-flow/commit/0cf8e829dc7a5758ad5fda0de87d217a9fbcd27c)
- add public removeConnection API for programmatic connection removal
  [(b75850a)](https://github.com/taiga-family/ng-draw-flow/commit/b75850a0c099e570cd3e50f41a69ccd46e98b361)

### 🐞 Bug Fixes

- drag-drop. centralise move/up listeners
  [(90b076e)](https://github.com/taiga-family/ng-draw-flow/commit/90b076ea3065859da48dc9afdc2bc7107eed24b7)
- move nodes only after exceeding nodeDragThreshold
  [(e9ed078)](https://github.com/taiga-family/ng-draw-flow/commit/e9ed078db7e1f135c5925d68bb91de0397adaa06)
- switch to deepEqual + animationFrameScheduler for smoother updates
  [(7d300ba)](https://github.com/taiga-family/ng-draw-flow/commit/7d300babb3cd14a621651989ad473aff5fea584b)
- optimize error handling and change detection in directives
  [(231060d)](https://github.com/taiga-family/ng-draw-flow/commit/231060d6a4c8322632ec9862e6419f40659a6b26)
- panzoom [(4d7f118)](https://github.com/taiga-family/ng-draw-flow/commit/4d7f118e15d628360f2a717ccfc8ef7ffd6ac14a)
- panzoom. improve zoom event performance
  [(d83aae2)](https://github.com/taiga-family/ng-draw-flow/commit/d83aae2ee1cffa2c3dde9126f8d0ef00f9641215)
- avoid rebinding listeners on each event
  [(e999aec)](https://github.com/taiga-family/ng-draw-flow/commit/e999aec25595fcee87abf06ad3791066bcc6bee2)
- add shareReplay to path$ to prevent redundant recalculations
  [(41b810c)](https://github.com/taiga-family/ng-draw-flow/commit/41b810c3dcb870b822194797a98ac61b77564b5e)
- imports [(ab9b697)](https://github.com/taiga-family/ng-draw-flow/commit/ab9b69759552b93096d7473ae31919241581d08b)

### [0.11.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.10.3...v0.11.0) (2025-05-21)

### 🚀 Features

- deleting connection if the connector was removed
  [(0a7cbaf)](https://github.com/taiga-family/ng-draw-flow/commit/0a7cbaff6e6e499b2402d2a3a7e2f9056171e4aa)
- removed automatic deletion of connections when connector is destroyed
  [(6573f94)](https://github.com/taiga-family/ng-draw-flow/commit/6573f94483cd492f96e9560721e0ba3f77dd1cec)

### [0.10.3](https://github.com/taiga-family/ng-draw-flow/compare/v0.10.2...v0.10.3) (2025-05-20)

### 🐞 Bug Fixes

- mark for check when invalid changes to ensure view update
  [(8420b0d)](https://github.com/taiga-family/ng-draw-flow/commit/8420b0dfb3f2865073fdae4a5e1f8039227c6ad0)

### [0.10.2](https://github.com/taiga-family/ng-draw-flow/compare/v0.10.1...v0.10.2) (2025-05-20)

### 🐞 Bug Fixes

- update DrawFlowBaseNode to use @Input for selected and invalid properties
  [(7ea7e04)](https://github.com/taiga-family/ng-draw-flow/commit/7ea7e04815eedcb17d27ba4bfde963315d96628a)

### [0.10.1](https://github.com/taiga-family/ng-draw-flow/compare/v0.10.0...v0.10.1) (2025-05-19)

### 🐞 Bug Fixes

- inject INVALID_NODES on injection context
  [(989b36d)](https://github.com/taiga-family/ng-draw-flow/commit/989b36d4cf4885be08988805c8a470c01d3029ad)

### [0.10.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.9.0...v0.10.0) (2025-05-19)

### 🚀 Features

- create cycle-detection validator
  [(798a772)](https://github.com/taiga-family/ng-draw-flow/commit/798a772ec4783bfb97cf71e157de1b168f2394ec)
- add validation documentation
  [(39c2cb9)](https://github.com/taiga-family/ng-draw-flow/commit/39c2cb98cba292986f48db4ad98051a81581e193)
- implement visual feedback for invalid nodes
  [(d5b84e2)](https://github.com/taiga-family/ng-draw-flow/commit/d5b84e2a088043c0f5b7fbc0713af0b5a1c687a8)
- implement visual feedback for invalid nodes
  [(b568a20)](https://github.com/taiga-family/ng-draw-flow/commit/b568a20dda84953cf10797b0bbf7f1a662fce876)
- refactor invalid state handling and remove commented-out code
  [(81e6906)](https://github.com/taiga-family/ng-draw-flow/commit/81e6906cc0b80d26a9c2a77579a9f17115bca3c9)
- create isolated-nodes validator
  [(0922add)](https://github.com/taiga-family/ng-draw-flow/commit/0922addd9c7b6804795aaf5c49c5472465fdeeb0)
- replace InvalidNodesService with INVALID_NODES token
  [(e775a44)](https://github.com/taiga-family/ng-draw-flow/commit/e775a44a882e98eca3a1c814cc30592d47c66944)
- implement visual feedback for invalid nodes
  [(64a2119)](https://github.com/taiga-family/ng-draw-flow/commit/64a2119cdcc946061e3cba7907cd0cab898aeb98)
- export errors directive
  [(193cc23)](https://github.com/taiga-family/ng-draw-flow/commit/193cc23971997a1ade21fde72c7a30adb8cb3a90)

### 🐞 Bug Fixes

- correct import paths and update directive export
  [(2103465)](https://github.com/taiga-family/ng-draw-flow/commit/2103465762d73731ccad297231ab2248f1bd6a23)

### [0.9.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.8.0...v0.9.0) (2025-04-29)

### 🚀 Features

- naming [(2cbba1b)](https://github.com/taiga-family/ng-draw-flow/commit/2cbba1beb5ba3901943fe0168ee36e6f686b84f8)

### 🐞 Bug Fixes

- element selection
  [(0798fc0)](https://github.com/taiga-family/ng-draw-flow/commit/0798fc08895e49a4ea232cf7ef6a7c1021321a16)
- recalculate connection paths only when their endpoints change
  [(f6970f2)](https://github.com/taiga-family/ng-draw-flow/commit/f6970f21500e9886e4357bc5c4fca108abdb7bd4)
- element selection
  [(0b90b4a)](https://github.com/taiga-family/ng-draw-flow/commit/0b90b4a285fa229700b58d6cfa4222853699bc50)
- add shape-rendering: optimizeSpeed
  [(d1ae617)](https://github.com/taiga-family/ng-draw-flow/commit/d1ae6173b47ccd44487e0e4b5fb34d88d328b7a3)
- reduce repaints by using context-aware transform methods
  [(25dc915)](https://github.com/taiga-family/ng-draw-flow/commit/25dc915befb9398be3274f72700458d6eb7dfd89)
- resolve connection duplication issue
  [(0a8d0b7)](https://github.com/taiga-family/ng-draw-flow/commit/0a8d0b7eafb3b112d5f78762b56bc40190410124)
- add shape-rendering: optimizeSpeed
  [(ed9db26)](https://github.com/taiga-family/ng-draw-flow/commit/ed9db26c0d08f512ca4a8c2555e72e70e30feba1)

### [0.8.0](https://github.com/taiga-family/ng-draw-flow/compare/v0.7.0...v0.8.0) (2024-12-16)

### 🚀 Features

- added an event that is sent when connections are deleted due to a deleted node
  [(d50d87d)](https://github.com/taiga-family/ng-draw-flow/commit/d50d87d83c278139ba2e175b1efb984e30e1c950)

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
