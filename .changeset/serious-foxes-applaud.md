---
'shared-utils': patch
'web-persistence': patch
'web-quicksilver': patch
'web-multiversx': patch
'web-provenance': patch
'web-crescent': patch
'web-likecoin': patch
'web-wormhole': patch
'web-osmosis': patch
'web-comdex': patch
'web-cosmos': patch
'web-desmos': patch
'web-emoney': patch
'web-quasar': patch
'web-shentu': patch
'web-stride': patch
'web-cheqd': patch
'web-evmos': patch
'web-nomic': patch
'web-regen': patch
'web-rizon': patch
'web-nym': patch
'ui': patch
---

- Restored i18n locale JSON files that were accidentally deleted in a previous pull request. This restoration ensures all necessary translations are available for the application.
- Migrated existing code to use a new wrapper function for loading i18n translations, enhancing the efficiency and reliability of our translation loading process.
- Fixed an issue with the Next.js standalone build process that was causing complications with Docker deployment, thereby improving the stability of deployments.
