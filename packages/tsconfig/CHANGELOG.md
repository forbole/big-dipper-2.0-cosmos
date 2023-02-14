# tsconfig

## 0.3.0

### Minor Changes

- d08c0dfd: feat: add WASM Contract module

## 0.2.0

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

## 0.1.0

### Minor Changes

- 85dd8c7d: Migrate MUI v4 to MUI v5, Next v12 to v13, React v17 to v18
