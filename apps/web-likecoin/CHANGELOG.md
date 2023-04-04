# Unreleased

## 2.9.1

### Patch Changes

- [#1196](https://github.com/forbole/big-dipper-2.0-cosmos/pull/1196) [`c4d1d83e3`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/c4d1d83e30922bdb86ffc20d8cde36adad34bd0c) Thanks [@teamchong](https://github.com/teamchong)! - chore: versions bump

- Updated dependencies [[`c4d1d83e3`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/c4d1d83e30922bdb86ffc20d8cde36adad34bd0c), [`e1502b5d1`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/e1502b5d1ecb50b8da94fc157ac1866ee40df9a8)]:
  - shared-utils@2.12.1
  - ui@2.21.0

## 2.9.0

### Minor Changes

- [#1183](https://github.com/forbole/big-dipper-2.0-cosmos/pull/1183) [`33750408b`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/33750408bfa3bc3195124b78be72c0d54b414bd7) Thanks [@rachelhox](https://github.com/rachelhox)! - feat: theme toggle button and 12-hour/24-hour toggle button

### Patch Changes

- Updated dependencies [[`33750408b`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/33750408bfa3bc3195124b78be72c0d54b414bd7)]:
  - shared-utils@2.12.0
  - ui@2.20.0

## 2.8.15

### Patch Changes

- Updated dependencies [[`f4e9417a0`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/f4e9417a06c3a5667fe541eee2bf2b820566496d), [`f4e9417a0`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/f4e9417a06c3a5667fe541eee2bf2b820566496d)]:
  - ui@2.19.0

## 2.8.14

### Patch Changes

- Updated dependencies [[`8fbfb95d5`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/8fbfb95d5d64ba23bff774aa95ea885839475603)]:
  - ui@2.18.0

## 2.8.13

### Patch Changes

- Updated dependencies [[`717cb798b`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/717cb798b200f5a3afde49695548266fa6bdfb3d)]:
  - shared-utils@2.11.0
  - ui@2.17.1

## 2.8.12

### Patch Changes

- Updated dependencies [[`98505b6e1`](https://github.com/forbole/big-dipper-2.0-cosmos/commit/98505b6e1ca3001a6b078d30266ed33456c808df)]:
  - ui@2.17.0

## 2.8.11

### Patch Changes

- Updated dependencies [35f47327d]
  - shared-utils@2.10.0
  - ui@2.16.0

## 2.8.10

### Patch Changes

- Updated dependencies [29f3ac40]
  - ui@2.15.1

## 2.8.9

### Patch Changes

- Updated dependencies [9f2e26b1]
  - shared-utils@2.9.0
  - ui@2.15.0

## 2.8.8

### Patch Changes

- Updated dependencies [e0f32672]
  - ui@2.14.3

## 2.8.7

### Patch Changes

- Updated dependencies [e11d768a]
  - ui@2.14.2

## 2.8.6

### Patch Changes

- 4079b219: fix: ssr issue Text content does not match server-rendered HTML
- Updated dependencies [4079b219]
  - ui@2.14.1

## 2.8.5

### Patch Changes

- Updated dependencies [d08c0dfd]
  - shared-utils@2.8.0
  - tsconfig@0.3.0
  - ui@2.14.0

## 2.8.4

### Patch Changes

- Updated dependencies [af2e8add5]
  - shared-utils@2.7.0
  - ui@2.13.0

## 2.8.3

### Patch Changes

- Updated dependencies [b4ac0a0c5]
  - shared-utils@2.6.3
  - ui@2.12.1

## 2.8.2

### Patch Changes

- Updated dependencies [e12c3b0c2]
  - ui@2.12.0

## 2.8.1

### Patch Changes

- a04d53bd8: auto refresh timestamp display
- a04d53bd8: fix: transaction type in details view
- Updated dependencies [a04d53bd8]
- Updated dependencies [a04d53bd8]
- Updated dependencies [a04d53bd8]
  - ui@2.11.1

## 2.8.0

### Minor Changes

- d967ae3f: migrate from next-tranlsate to next-i18next

  - replace {{count}} in locales/en/\*.json to {{num}} because {{count}} is reserved for next-18next
  - add getServerSideProps to path with dynamic route param
  - add getStaticProps to path without dynamic route param

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
- Updated dependencies [d967ae3f]
- Updated dependencies [d967ae3f]
  - tsconfig@0.2.0
  - ui@2.11.0

## 2.7.2

### Patch Changes

- b64119a1: feat: handle respoonsive UI via CSS instead of using JS
- Updated dependencies [b64119a1]
  - shared-utils@2.6.2
  - ui@2.10.4

## 2.7.1

### Patch Changes

- dc085630: feat: Add Rotate banner feature
- Updated dependencies [dc085630]
  - shared-utils@2.6.1
  - ui@2.10.1

## 2.7.0

### Minor Changes

- 85dd8c7d: Migrate MUI v4 to MUI v5, Next v12 to v13, React v17 to v18

### Patch Changes

- Updated dependencies [85dd8c7d]
  - shared-utils@2.6.0
  - ui@2.10.0

## 2.6.0

### Minor Changes

- 8ea919c8: auto deployment based on PR title keyword

### Patch Changes

- Updated dependencies [8ea919c8]
  - ui@2.9.0

## 2.5.0

### Minor Changes

- 650f686b: Enable Yarn Plug'n'Play (Zero-Installs)

### Patch Changes

- Updated dependencies [650f686b]
  - shared-utils@2.5.0
  - ui@2.7.0

## 2.4.1

### Patch Changes

- 2db4ee93: performance improvements and bug fixes
- Updated dependencies [2db4ee93]
  - ui@2.6.1

## 2.4.0

### Minor Changes

- df8a5bca: - batch network requests ([\#1092](https://github.com/forbole/big-dipper-2.0-cosmos/issues/1092))

### Patch Changes

- Updated dependencies [df8a5bca]
  - ui@2.5.0

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
  - ui@2.3.0

## Changes

- Update og:image, public RPC endpoint ([\#1082](https://github.com/forbole/big-dipper-2.0-cosmos/issues/1082))

# likecoin-v2.2.4 - 2022-09-13

## Fixes

- Fixed testnet logo and icon not showing ([\#1002](https://github.com/forbole/big-dipper-2.0-cosmos/issues/1002))

# likecoin-v2.2.3 - 2022-07-19

## Changes

- Fixed price display 0 problem ([\#919](https://github.com/forbole/big-dipper-2.0-cosmos/issues/919))
- Updated all files to change url ([\#920](https://github.com/forbole/big-dipper-2.0-cosmos/issues/920))

# likecoin-v2.2.2 - 2022-06-15

## Fixes

- Merged base

## Changes

- Updated preview image ([\#878](https://github.com/forbole/big-dipper-2.0-cosmos/issues/878))

# likecoin-v2.2.1 - 2021-05-09

## Fixes

- Likecoin prefix change

# likecoin-v2.2.0 - 2021-04-19

## Changes

- Merge `base-v2.1.0`

# likecoin-v2.1.0 - 2021-02-24

## Changes

- Removed ISCN ([\#712](https://github.com/forbole/big-dipper-2.0-cosmos/issues/712))
- Merged `base-v2.0.0-rc2`

# likecoin-v2.0.1 - 2021-02-17

## Changes

- Merge `base`
- Made icons local

# likecoin-v2.0.0 - 2021-02-07

## Changes

- Merge `base`

# likecoin-v1.8.0 - 2021-01-10

## Changes

- Merge `base-v1.9.0`

# likecoin-v1.7.0 - 2021-11-23

## Changes

- Removed dark theme ([\#523](https://github.com/forbole/big-dipper-2.0-cosmos/issues/523))
- Merge `base-v1.7.0`

# likecoin-v1.5.0 - 2021-10-11

## Changes

- Merge `base-v1.5.0`

# likecoin-v1.4.0 - 2021-10-04

## Changes

- Merge `base-v1.4.0`

# likecoin-v1.3.0 - 2021-09-28

## Changes

- Merge `base-v1.3.0`

# likecoin-v1.2.0 - 2021-09-20

## Changes

- Add iscn params and page ([\#301](https://github.com/forbole/big-dipper-2.0-cosmos/issues/301))
- Merge `base-v1.2.0`

# likecoin-v1.1.0 - 2021-09-13

## Changes

- Merge `base-v1.1.0`

# likecoin-v1.0.3 - 2021-09-03

## Changes

- Merge `base-v1.0.9`

# likecoin-v1.0.2 - 2021-09-03

## Changes

- Merge `base-v1.0.7`
- Merge `base-v1.0.8`

# likecoin-v1.0.1 - 2021-08-25

## Changes

- Merge `base-v1.0.6`

# likecoin-v1.0.0 - 2021-08-24

## Changes

- Initial Setup ([\#215](https://github.com/forbole/big-dipper-2.0-cosmos/issues/215))
- Setup CICD ([\#216](https://github.com/forbole/big-dipper-2.0-cosmos/issues/216))
- Merge `base-v1.0.4`
- Add iscn custom messages ([\#204](https://github.com/forbole/big-dipper-2.0-cosmos/issues/204))
- Merge `base-v1.0.5`
