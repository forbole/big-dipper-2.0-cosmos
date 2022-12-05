/* eslint-disable */
const { writeFileSync } = require('fs');

const projectName = process.env.PROJECT_NAME || 'web';
const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE || 'mainnet';
const config = {
  buildCommand: `NEXT_PUBLIC_CHAIN_TYPE=${chainType} yarn turbo run build --filter=${projectName}...`,
  outputDirectory: `apps/${projectName}/.next`,
  installCommand: `yarn workspaces focus --production ${projectName} && yarn add typescript -D`,
  devCommand: `yarn turbo run dev --filter=${projectName}...`,
  framework: 'nextjs',
  ignoreCommand: "echo 'always build' && exit 1",
  redirects: /^web-/.test(projectName)
    ? [{ source: '/', destination: `/${projectName.replace(/^web-/, '')}` }]
    : [],
};

writeFileSync('vercel.json', JSON.stringify(config, null, 2));
