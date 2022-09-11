# Unreleased

## Changes
- 

# base-v2.1.2 - 2022-09-11

## Fixes
- Fixed `/font` after chain prefix `/desmos` in global.css ([\#992](https://github.com/forbole/big-dipper-2.0-cosmos/issues/992))


# base-v2.1.1 - 2022-08-29

## Fixes
- Added missing dependency of `useEffect` in `useProfilesRecoil` to avoid desmos profile from not being loaded ([\#904](https://github.com/forbole/big-dipper-2.0-cosmos/issues/904))

## Changes
- Updated validator and account details to not be found if bech32 is invalid
- Removed the use of NEXT_PUBLIC_URL
- Updated graphql types generation structure (in preparation for third party modules)
- Updated preview image location
- Updated change url files ([\#972](https://github.com/forbole/big-dipper-2.0-cosmos/issues/972))
- Added `NEXT_PUBLIC_MATOMO_URL` and `NEXT_PUBLIC_MATOMO_SITE_ID` to github workflow production ([\#972](https://github.com/forbole/big-dipper-2.0-cosmos/issues/972))

# base-v2.1.0 - 2022-04-19

## Changes
- Updated not found and 404 logo ([\#792](https://github.com/forbole/big-dipper-2.0-cosmos/issues/792))
- Fixed params % display ([\#795](https://github.com/forbole/big-dipper-2.0-cosmos/issues/795))
- Updated params page if time period less than 1 day then show seconds ([\#797](https://github.com/forbole/big-dipper-2.0-cosmos/issues/797))
- Added token price history component ([\#784](https://github.com/forbole/big-dipper-2.0-cosmos/issues/784))
- Updated Account details hasura actions to default call 100 items instead of 10 for better performance
- Added back proposal details quorum % ([\#788](https://github.com/forbole/big-dipper-2.0-cosmos/issues/788))
- Updated validator details hasura actions performances ([\#812](https://github.com/forbole/big-dipper-2.0-cosmos/issues/812))

## Fixes
- Fixed commission being displayed for non validator accounts ([\#787](https://github.com/forbole/big-dipper-2.0-cosmos/issues/787))
- Added community tax in to apr calculation ([\#810](https://github.com/forbole/big-dipper-2.0-cosmos/issues/810))

# base-v2.0.2 - 2022-03-23

## Bug fixes
- Fixed proposal details chart percentage display

# base-v2.0.1 - 2022-03-17
## Bug fixes
- Fixed online voting power total ([\#800](https://github.com/forbole/big-dipper-2.0-cosmos/issues/800))

# base-v2.0.0 - 2022-03-10

## Changes
- Changed online voting power to be a query instead of a subscription ([\#638](https://github.com/forbole/big-dipper-2.0-cosmos/issues/638))
- Optimised rendering of Proposal Details page ([\#763](https://github.com/forbole/big-dipper-2.0-cosmos/issues/763))
- Updated online voting power display ([\#776](https://github.com/forbole/big-dipper-2.0-cosmos/issues/776))
- Improved initial loading speed by asyncing top level functions ([\#773](https://github.com/forbole/big-dipper-2.0-cosmos/issues/773))
## Bug fixes
- Fixed Apr error if bonded tokens is 0 ([\#758](https://github.com/forbole/big-dipper-2.0-cosmos/issues/758))

## Breaking
- [Bdjuno](https://github.com/forbole/bdjuno) must be on `v2.0.0`

# base-v2.0.0-rc3 - 2022-02-25

## Changes
- Changed `NEXT_PUBLIC_WS_CHAIN_URL` to `NEXT_PUBLIC_RPC_WEBSOCKET` for clarification
- Changed `NEXT_PUBLIC_CHAIN_STATUS` to `NEXT_PUBLIC_CHAIN_TYPE` for clarification

## Migration
- Changed env `NEXT_PUBLIC_WS_CHAIN_URL` to `NEXT_PUBLIC_RPC_WEBSOCKET` or don't. It's backwards compatible
- Changed env `NEXT_PUBLIC_CHAIN_STATUS` to `NEXT_PUBLIC_CHAIN_TYPE` or don't. It's backwards compatible

## Breaking
- [Bdjuno](https://github.com/forbole/bdjuno) must be on `v2.0.0`

# base-v2.0.0-rc2 - 2022-02-24

## Changes
- Updated market cap display ([\#698](https://github.com/forbole/big-dipper-2.0-cosmos/issues/698))
- Optimised validator details and account details to prevent random polling behavior ([\#703](https://github.com/forbole/big-dipper-2.0-cosmos/issues/703))
- Added hasura actions error handling in account details ([\#713](https://github.com/forbole/big-dipper-2.0-cosmos/issues/713))
- Updated to display accounts even if balance is 0 and does not exist ([\#692](https://github.com/forbole/big-dipper-2.0-cosmos/issues/692))
- Updated handling of 18 decimal places denoms ([\#724](https://github.com/forbole/big-dipper-2.0-cosmos/issues/724))

## Bug fixes
- Added better handling of get denom return types ([\#735](https://github.com/forbole/big-dipper-2.0-cosmos/issues/735))
- Updated ui to match the improved hasura actions return types

# base-v2.0.0-rc1 - 2022-02-07

## Changes
- Updated Hasura Actions

## Breaking

- [Bdjuno](https://github.com/forbole/bdjuno) must be on `v1.0.0`

# base-v1.10.0 - 2022-01-25

## Changes
- Optimized initial loading by setting basic details first then profiles after ([\#629](https://github.com/forbole/big-dipper-2.0-cosmos/issues/629))
- Added vp token unit in config ([\#645](https://github.com/forbole/big-dipper-2.0-cosmos/issues/645))

## Bug fixes
- Fixed home page validator image url not displaying correctly ([\#632](https://github.com/forbole/big-dipper-2.0-cosmos/issues/632))
- Fix validator anc account details possible infinite load due to dayjs in hook
- Added description sanitization to proposals list ([\#666](https://github.com/forbole/big-dipper-2.0-cosmos/issues/666))
- Fixed pagination hook page callback ([\#667](https://github.com/forbole/big-dipper-2.0-cosmos/issues/667))
- Showed address if name or moniker is empty ([\#668](https://github.com/forbole/big-dipper-2.0-cosmos/issues/668))

## Migration

- [v1.9.0 to v1.10.0](https://docs.bigdipper.live/cosmos-based/frontend/migrations/v1.9.0-to-v1.10.0)

# base-v1.9.0 - 2022-01-10

## Changes
- Added logs in tx details ([\#515](https://github.com/forbole/big-dipper-2.0-cosmos/issues/515))
- Added tombstoned status ([\#600](https://github.com/forbole/big-dipper-2.0-cosmos/issues/600))
- Added manual versioning in ui ([\#605](https://github.com/forbole/big-dipper-2.0-cosmos/issues/605))
- Optimized tx list for chains with heavy traffic ([\#602](https://github.com/forbole/big-dipper-2.0-cosmos/issues/602))
- Setup case insensitive search in dtags ([\#592](https://github.com/forbole/big-dipper-2.0-cosmos/issues/592))
- Fixed profiles logic ([\#591](https://github.com/forbole/big-dipper-2.0-cosmos/issues/591))
- Added AvatarNameListMsg for handling msgs with multiple users ([\#619](https://github.com/forbole/big-dipper-2.0-cosmos/issues/619))


# base-v1.8.4 - 2021-12-08
## Bug fixes
- Fix `feegrant` and `authz` messages ([\#588](https://github.com/forbole/big-dipper-2.0-cosmos/issues/588))

# base-v1.8.3 - 2021-12-07
## Bug fixes
- Fix validators list not displaying inactive validators ([\#583](https://github.com/forbole/big-dipper-2.0-cosmos/issues/583))

# base-v1.8.2 - 2021-12-06
## Bug fixes
- Fix APR to handle multiple supply coins

# base-v1.8.1 - 2021-12-06
## Bug fixes
- Fix `formatNumber` display after cleaning up ending 0s
# base-v1.8.0 - 2021-12-06

## Changes
- Display `APR` on title bar ([\#483](https://github.com/forbole/big-dipper-2.0-cosmos/issues/483))
- Add `@dtag` to search bar ([\#554](https://github.com/forbole/big-dipper-2.0-cosmos/issues/554))
- Add `/@dtag` feature ([\#428](https://github.com/forbole/big-dipper-2.0-cosmos/issues/428))
- Add `feegrant` and `authz` messages ([\#481](https://github.com/forbole/big-dipper-2.0-cosmos/issues/481))
- Add `vesting` messages ([\#538](https://github.com/forbole/big-dipper-2.0-cosmos/issues/538))
- Add status row in `/validators` ([\#556](https://github.com/forbole/big-dipper-2.0-cosmos/issues/556))
- Show who the top 34% validators are ([\#506](https://github.com/forbole/big-dipper-2.0-cosmos/issues/506))
## Bug fixes
- Fix validator searchbar ([\#540](https://github.com/forbole/big-dipper-2.0-cosmos/issues/540))

# base-v1.7.0 - 2021-11-23

## Changes

- Fix account details denom display ([\#478](https://github.com/forbole/big-dipper-2.0-cosmos/issues/478))
- Replace average block time with average since last hour ([\#480](https://github.com/forbole/big-dipper-2.0-cosmos/issues/480))
- Renamed `PROFILE_DETAILS` to `ADDRESS_DETAILS` ([\#503](https://github.com/forbole/big-dipper-2.0-cosmos/issues/503))
- Update handling of block height in searchbar ([\#501](https://github.com/forbole/big-dipper-2.0-cosmos/issues/501))
- Fix community pool spend proposal display ([\#520](https://github.com/forbole/big-dipper-2.0-cosmos/issues/520))
- Update how tokens are formatted and display up to 18 decimal places ([\#524](https://github.com/forbole/big-dipper-2.0-cosmos/issues/524))
- Auto display 0% if validator is not active ([\#541](https://github.com/forbole/big-dipper-2.0-cosmos/issues/541))

## Migration

- [v1.6.0 to v1.7.0](https://docs.bigdipper.live/cosmos-based/frontend/migrations/v1.6.0-to-v1.7.0)

# base-v1.6.0 - 2021-11-01

## Changes

- Converted all react context in to recoil ([\#455](https://github.com/forbole/big-dipper-2.0-cosmos/issues/455))
- Enabled desmos profile for delegators ([\#277](https://github.com/forbole/big-dipper-2.0-cosmos/issues/277))
- Add license comment ([\#474](https://github.com/forbole/big-dipper-2.0-cosmos/issues/474))
- Add redirect for old big dipper urls ([\#427](https://github.com/forbole/big-dipper-2.0-cosmos/issues/427))
- Fix desmos profile alignment ([\#435](https://github.com/forbole/big-dipper-2.0-cosmos/issues/435))

## Migration

- [v1.x.x to v1.6.0](https://docs.bigdipper.live/cosmos-based/frontend/migrations/v1.x.x-to-v1.6.0)

# base-v1.5.1 - 2021-10-11

## Changes

- Fixed `detailed` transaction list not showing correct msg count

# base-v1.5.0 - 2021-10-11

## Changes

- Displayed desmos profile native address in connections ([\#420](https://github.com/forbole/big-dipper-2.0-cosmos/issues/420))
- Create `compact` and `detailed` transaction list views for users with different needs ([\#391](https://github.com/forbole/big-dipper-2.0-cosmos/issues/391))
- Updated `chain_config`

# base-v1.4.0 - 2021-10-04

## Changes

- Updated markdown to handle `\n`
- Changed validator list tab orders ([\#411](https://github.com/forbole/big-dipper-2.0-cosmos/issues/411))
- Update numeral formats based on denom exponent ([\#409](https://github.com/forbole/big-dipper-2.0-cosmos/issues/409))

## Bug fixes

- Fixed rewards dict inside account details ([\#412](https://github.com/forbole/big-dipper-2.0-cosmos/issues/412))

# base-v1.3.0 - 2021-09-27

## Changes

- Hides delegators in account details if amount is 0 ([\#369](https://github.com/forbole/big-dipper-2.0-cosmos/issues/369))
- Add MsgCoin global delclaration ([\#367](https://github.com/forbole/big-dipper-2.0-cosmos/issues/367))

## Bug fixes

- Fixed tx msg label padding typo ([\#382](https://github.com/forbole/big-dipper-2.0-cosmos/issues/382))
- Added default config value for online voting power ([\#378](https://github.com/forbole/big-dipper-2.0-cosmos/issues/378))
- Fixes how queries are called so data matches on ui ([\#371](https://github.com/forbole/big-dipper-2.0-cosmos/issues/371))

# base-v1.2.0 - 2021-09-20

## Changes

- Update price and market cap display ([\#322](https://github.com/forbole/big-dipper-2.0-cosmos/issues/322))

## Bug fixes

- Fix account and validator details redelegation linking consensus address ([\#323](https://github.com/forbole/big-dipper-2.0-cosmos/issues/323))

# base-v1.1.1 - 2021-09-17

## Hotfix

- Fixed display error with previous delegation rewards also adding to total rewards balance

# base-v1.1.0 - 2021-09-13

## Changes

- Centered desmos profile cover photo ([\#285](https://github.com/forbole/big-dipper-2.0-cosmos/issues/285))
- Add License to footer ([\#287](https://github.com/forbole/big-dipper-2.0-cosmos/issues/287))
- Changed position of desmos profile
- Fix avatar images not loading correctly ([\#296](https://github.com/forbole/big-dipper-2.0-cosmos/issues/296))
- Fix rendering issue on account and validtor details page ([\#297](https://github.com/forbole/big-dipper-2.0-cosmos/issues/297))
- Add validator status to account delegation component ([\#307](https://github.com/forbole/big-dipper-2.0-cosmos/issues/307))

# base-v1.0.9 - 2021-09-03

## Bug fixes

- Fixed desmos profile edge case display

# base-v1.0.8 - 2021-09-03

## Changes

- Change how markdown is displayed ([\#274](https://github.com/forbole/big-dipper-2.0-cosmos/issues/274))
- Update desmos profile component ([\#273](https://github.com/forbole/big-dipper-2.0-cosmos/issues/273)) ([\#140](https://github.com/forbole/big-dipper-2.0-cosmos/issues/140))
- Fixed account detail balance ([\#271](https://github.com/forbole/big-dipper-2.0-cosmos/issues/271))
- Update account/ validator details staking component sorting order ([\#266](https://github.com/forbole/big-dipper-2.0-cosmos/issues/266))

## Bug fixes

- Fix withdraw rewards display error if not enough gas

# base-v1.0.7 - 2021-08-31

## Changes

- Added testnet and mainnet configs for easier deployment of the same chain in different stages
- Update akash webhook CICD

# base-v1.0.6 - 2021-08-25

## Changes

- Updated SEO structure

# base-v1.0.5 - 2021-08-23

## Changes

- Updated models msg types ([\#225](https://github.com/forbole/big-dipper-2.0-cosmos/issues/225))
- Update github actions CI/CD

## Bug fixes

- Fix staking param details displaying incorrect `Max Validators`

# base-v1.0.4 - 2021-08-19

## Changes

- Change logo placement in nav mobile ([\#202](https://github.com/forbole/big-dipper-2.0-cosmos/issues/202))
- Increased tag colors ([\#207](https://github.com/forbole/big-dipper-2.0-cosmos/issues/207))
- Add IBC messages ([\#192](https://github.com/forbole/big-dipper-2.0-cosmos/issues/192))

# base-v1.0.3

## Changes

- Bump next 10 to next 11
- Bump react v16.x.x to v17.x.x
- Update logo to have max height of 55px

# base-v1.0.2

## Changes

- Update the structure layout of themes
- Update footer light and dark theme
- Add maintainer section in footer

# base-v1.0.1

## Bug fixes

- Fixed tokenomics legend to use the correct colors

# base-v1.0.0

## Changes

- Created initial boilerplate base
- Updated proposal details to display results using snapshots instead of realtime data ([\#116](https://github.com/forbole/big-dipper-2.0-cosmos/issues/116))
- Added desmos profile feature
- Update chain status notifications ([\#141](https://github.com/forbole/big-dipper-2.0-cosmos/issues/141))
- Add custom 500 page ([\#149](https://github.com/forbole/big-dipper-2.0-cosmos/issues/149))
- Fix twitter crawler preview ([\#144](https://github.com/forbole/big-dipper-2.0-cosmos/issues/144))
- Update params visualisation ([\#152](https://github.com/forbole/big-dipper-2.0-cosmos/issues/152))
- Make mui tabs scrollable ([\#152](https://github.com/forbole/big-dipper-2.0-cosmos/issues/153))
- Moved documentation to own repo ([\#162](https://github.com/forbole/big-dipper-2.0-cosmos/issues/162))
- Add validator last seen active feature ([\#160](https://github.com/forbole/big-dipper-2.0-cosmos/issues/160))
- Updated params to be JSONB with models typed
- Add logos by different theme ([\#168](https://github.com/forbole/big-dipper-2.0-cosmos/issues/160))
