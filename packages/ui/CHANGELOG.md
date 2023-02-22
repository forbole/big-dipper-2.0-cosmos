# ui

## 2.15.0

### Minor Changes

- 9f2e26b1: add quicksilver mainnet

### Patch Changes

- Updated dependencies [9f2e26b1]
  - shared-utils@2.9.0

## 2.14.3

### Patch Changes

- e0f32672: feat: migrated big dipper network recoil to apollo reactive variable and zod

## 2.14.2

### Patch Changes

- e11d768a: fix: Text content does not match server-rendered HTML.

## 2.14.1

### Patch Changes

- 4079b219: fix: ssr issue Text content does not match server-rendered HTML

## 2.14.0

### Minor Changes

- d08c0dfd: feat: add WASM Contract module

### Patch Changes

- Updated dependencies [d08c0dfd]
  - shared-utils@2.8.0
  - tsconfig@0.3.0

## 2.13.0

### Minor Changes

- af2e8add5: add: quicksilver workspace

### Patch Changes

- Updated dependencies [af2e8add5]
  - shared-utils@2.7.0

## 2.12.1

### Patch Changes

- b4ac0a0c5: feat: setup Quasar testnet
- Updated dependencies [b4ac0a0c5]
  - shared-utils@2.6.3

## 2.12.0

### Minor Changes

- e12c3b0c2: add custom message types, including Profiles, Posts, Reactions, Reports and Subspaces modules

## 2.11.1

### Patch Changes

- a04d53bd8: auto refresh timestamp display
- a04d53bd8: fix: donate link address
- a04d53bd8: fix: transaction type in details view

## 2.11.0

### Minor Changes

- d967ae3f: migrate from next-tranlsate to next-i18next

  - replace {{count}} in locales/en/\*.json to {{num}} because {{count}} is reserved for next-18next
  - add getServerSideProps to path with dynamic route param
  - add getStaticProps to path without dynamic route param

- d967ae3f: feat: remove sifchain workspace
- d967ae3f: Add asset module to Provenance BD

### Patch Changes

- d967ae3f: remove @sentry/nextjs package, add install sentry script to install @sentry/nextjs when deployment via docker
- d967ae3f: replace dompurify package with xss
- d967ae3f: feat: change matomoSiteID to 8
- d967ae3f: move jest setup coding to ui worksapce
- Updated dependencies [d967ae3f]
- Updated dependencies [d967ae3f]
- Updated dependencies [d967ae3f]
- Updated dependencies [d967ae3f]
- Updated dependencies [d967ae3f]
  - tsconfig@0.2.0

## 2.10.4

### Patch Changes

- b64119a1: feat: handle respoonsive UI via CSS instead of using JS
- Updated dependencies [b64119a1]
  - shared-utils@2.6.2

## 2.10.3

### Patch Changes

- 90cf5749: style: Add page transition

## 2.10.2

### Patch Changes

- ce50c036: fix: dtag search

## 2.10.1

### Patch Changes

- dc085630: feat: Add Rotate banner feature
- Updated dependencies [dc085630]
  - shared-utils@2.6.1

## 2.10.0

### Minor Changes

- 85dd8c7d: Migrate MUI v4 to MUI v5, Next v12 to v13, React v17 to v18

### Patch Changes

- Updated dependencies [85dd8c7d]
  - shared-utils@2.6.0

## 2.9.0

### Minor Changes

- 8ea919c8: auto deployment based on PR title keyword

## 2.8.0

### Minor Changes

- f22eaf1a: add validators' commission rates on account page

## 2.7.0

### Minor Changes

- 650f686b: Enable Yarn Plug'n'Play (Zero-Installs)

### Patch Changes

- Updated dependencies [650f686b]
  - shared-utils@2.5.0

## 2.6.1

### Patch Changes

- 2db4ee93: performance improvements and bug fixes

## 2.6.0

### Minor Changes

- 7f4e53f6: feat: add loading indicator to home page ([\#1094](https://github.com/forbole/big-dipper-2.0-cosmos/pull/1094))

## 2.5.0

### Minor Changes

- df8a5bca: - batch network requests ([\#1092](https://github.com/forbole/big-dipper-2.0-cosmos/issues/1092))

## 2.4.0

### Minor Changes

- 5c2b1ce0: feat: display package version in Setting Dialog

### Patch Changes

- Updated dependencies [5c2b1ce0]
  - shared-utils@2.4.0

## 2.3.0

### Minor Changes

- e6437552: fix: numeral [NaN issue](https://github.com/adamwdraper/Numeral-js/issues/596)

### Patch Changes

- e6437552: refactor: add config for voting power exponent
- e6437552: fix: transaction message raw and filter not working
- e6437552: fix: WebSocket use default instead of GRAPHQL_TRANSPORT_WS_PROTOCOL
- e6437552: ci: Add bulk preview / publish to Akash
- e6437552: fix: height is not display properly in consensus ui
- e6437552: fix: type erros missing type declaration csstype
- Updated dependencies [e6437552]
- Updated dependencies [e6437552]
- Updated dependencies [e6437552]
- Updated dependencies [e6437552]
- Updated dependencies [e6437552]
- Updated dependencies [e6437552]
- Updated dependencies [e6437552]
  - shared-utils@2.3.0
