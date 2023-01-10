# v1.0.4 - 2022-06-20

## 2.8.0

### Minor Changes

- 85dd8c7d: Migrate MUI v4 to MUI v5, Next v12 to v13, React v17 to v18

### Patch Changes

- Updated dependencies [85dd8c7d]
  - shared-utils@2.6.0
  - ui@2.10.0

## 2.7.0

### Minor Changes

- 8ea919c8: auto deployment based on PR title keyword

### Patch Changes

- Updated dependencies [8ea919c8]
  - ui@2.9.0

## 2.6.0

### Minor Changes

- 650f686b: Enable Yarn Plug'n'Play (Zero-Installs)

### Patch Changes

- Updated dependencies [650f686b]
  - shared-utils@2.5.0
  - ui@2.7.0

## 2.5.1

### Patch Changes

- 2db4ee93: performance improvements and bug fixes
- Updated dependencies [2db4ee93]
  - ui@2.6.1

## 2.5.0

### Minor Changes

- 7f4e53f6: feat: add loading indicator to home page ([\#1094](https://github.com/forbole/big-dipper-2.0-cosmos/pull/1094))

### Patch Changes

- Updated dependencies [7f4e53f6]
  - ui@2.6.0

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

- Updated preview image location
- Added preview image

# v1.0.3 - 2022-03-09

## Fixes

- Fixed dockerfile

# v1.0.2 - 2022-03-09

## Changes

- Updated matomo to CI/CD

# v1.0.1 - 2022-03-08

## Fixes

- Fixed locked sorting display in validators list

# v1.0.0 - 2022-03-08

## Changes

- Added Blocks Page
- Added Transactions Page
- Added Home Page
- Added Block Details Page
- Added Miniblock Details Page
- Added Transaction Details Page
- Added Validators Page
- Added Node Details Page
- Added Validator Details Page
- Added delegator column to validators page
- Added Account Details Page
- Added Transactions to Validator Details if provider
- Added Tokens Page
- Added Tokens Details Page
- Added Tokens to Account Details
- Updated searchbar with basic logic
- Updated homepage to setup some loading indicator
- Removed tx options from settings
- Added value to tx details operations with link to token details
- Merged validator tabs together
- Added NFT and NFT details page
- Updated TX operations to link to NFT details
- Added NFT to account details
- Fixed sorting in validator details
