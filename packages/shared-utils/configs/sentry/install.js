/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const { PROJECT_NAME } = process.env;

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  console.log(`Installing Sentry [${PROJECT_NAME}]`);
  const version = JSON.parse(readFileSync(resolve(__dirname, '../../package.json')))
    .devDependencies['@sentry/nextjs'];

  console.log(`version ${version}`);
  const cmd = `cp -f ${resolve(__dirname, './sentry.config.js')} apps/${PROJECT_NAME}`;
  execSync(`${cmd}/sentry.client.config.js`);
  execSync(`${cmd}/sentry.server.config.js`);

  const nextSrc = /\bshared-utils\/configs\/next\b/g;
  const nextTrg = 'shared-utils/configs/sentry/next';
  const nextCode = `apps/${PROJECT_NAME}/next.config.js`;
  let nextConfig = readFileSync(nextCode, 'utf8');
  nextConfig = nextConfig.replace(nextSrc, nextTrg);
  console.log(nextCode, nextConfig);
  writeFileSync(nextCode, nextConfig, 'utf8');

  const errorSrc = /\bshared-utils\/configs\/captureUnderscoreErrorException\b/g;
  const errorTrg = 'shared-utils/configs/sentry/captureUnderscoreErrorException';
  const errorCode = `packages/ui/src/pages/_error.tsx`;
  let errorPage = readFileSync(errorCode, 'utf8');
  errorPage = errorPage.replace(errorSrc, errorTrg);
  console.log(errorCode, errorPage);
  writeFileSync(errorCode, errorPage, 'utf8');

  console.log(`yarn add @sentry/nextjs@${version}`);
  execSync(`yarn workspace ${PROJECT_NAME} add @sentry/nextjs@${version}`);
}
