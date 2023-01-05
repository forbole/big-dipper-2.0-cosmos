/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable turbo/no-undeclared-env-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');
require('dotenv').config();

const apiToken = process.env.GITHUB_API_TOKEN;
const pullId = process.env.VERCEL_GIT_PULL_REQUEST_ID;

function execShell(command) {
  return execSync(command, {
    shell: '/bin/bash',
  }).toString();
}

const response = execShell(`curl \
-H 'Accept: application/vnd.github+json' \
-H 'Authorization: Bearer ${apiToken}' \
-H 'X-GitHub-Api-Version: 2022-11-28' \
https://api.github.com/repos/forbole/big-dipper-2.0-cosmos/pulls/${pullId}`);

const { title } = JSON.parse(response);

const projects = execShell(`yarn workspaces list --json`);

const projectList = projects
  .split(/\n/g)
  .filter((p) => p)
  .map((p) => JSON.parse(p).name)
  .filter((p) => p.startsWith('web'));

const project = projectList.find((p) => title.endsWith(`[${p}]`)) || 'web';

execShell(`yarn workspace ${project} next build`);

if (project !== 'web') execShell(`rm -rf apps/web, mv apps/${project} apps/web`);
