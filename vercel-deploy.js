/* eslint-disable @typescript-eslint/no-var-requires, no-console, turbo/no-undeclared-env-vars */
const { execSync } = require('child_process');

console.log('running vercel-deploy.js');
require('dotenv').config();

const pullId = process.env.VERCEL_GIT_PULL_REQUEST_ID;
const apiToken = process.env.GITHUB_API_TOKEN;

if (!pullId) throw new Error('VERCEL_GIT_PULL_REQUEST_ID is not defined');
if (!apiToken) throw new Error('GITHUB_API_TOKEN is not defined');

function execShell(command) {
  console.log(`executing command`);
  const result = execSync(command, { env: process.env }).toString();
  console.log('result', result);
  return result;
}

const response = execShell(
  `curl ` +
    `-H 'Accept: application/vnd.github+json' ` +
    `-H 'Authorization: Bearer ${apiToken}' ` +
    `-H 'X-GitHub-Api-Version: 2022-11-28' ` +
    `https://api.github.com/repos/forbole/big-dipper-2.0-cosmos/pulls/${pullId}`
);

const { title } = JSON.parse(response);

const projects = execShell(`yarn workspaces list --json`);

const projectList = projects
  .split(/\n/g)
  .filter((p) => p)
  .map((p) => JSON.parse(p).name)
  .filter((p) => p.startsWith('web'));

const project = projectList.find((p) => title.endsWith(`[${p}]`)) || 'web';

execShell(`yarn workspace ${project} next build`);

if (project !== 'web') {
  execShell(`rm -rf apps/web, mv apps/${project} apps/web`);
}
