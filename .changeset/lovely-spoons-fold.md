---
'web-assetmantle': minor
'web-persistence': minor
'web-provenance': minor
'web-crescent': minor
'web-likecoin': minor
'tsconfig': minor
'web-bitsong': minor
'web-osmosis': minor
'web-agoric': minor
'web-comdex': minor
'web-cosmos': minor
'web-desmos': minor
'web-elrond': minor
'web-emoney': minor
'web-shentu': minor
'web-stride': minor
'web-akash': minor
'web-evmos': minor
'web-nomic': minor
'web-regen': minor
'web-rizon': minor
'web-band': minor
'web-nym': minor
'ui': minor
'web': minor
---

migrate from next-tranlsate to next-i18next

- replace {{count}} in locales/en/\*.json to {{num}} because {{count}} is reserved for next-18next
- add getServerSideProps to path with dynamic route param
- add getStaticProps to path without dynamic route param
