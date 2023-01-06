/* eslint-disable @typescript-eslint/no-var-requires, no-console, turbo/no-undeclared-env-vars */

/**
 * This script is used to build the correct project based on the PR.
 * the title suffix should be in the format of [workspace-name]
 * otherwise, it will build the web project
 */
const { execSync } = require('child_process');

console.log('running vercel-deploy.js');

// VERCEL_GIT_PULL_REQUEST_ID is the pull request id
const pullId = process.env.VERCEL_GIT_PULL_REQUEST_ID;
if (!pullId) throw new Error('VERCEL_GIT_PULL_REQUEST_ID is not defined');

// GITHUB_API_TOKEN is the github api token, we need it to get the pull request title
const apiToken = process.env.GITHUB_API_TOKEN;
if (!apiToken) throw new Error('GITHUB_API_TOKEN is not defined');

/**
 * It executes a shell command and returns the result
 * @param command - The command to execute.
 * @returns The result of the command being executed.
 */
function execShell(command) {
  console.log(`executing command`);
  const result = execSync(command, { env: process.env }).toString();
  console.log('result', result);
  return result;
}

/* Getting the pull request title. */
const response = execShell(
  `curl ` +
    `-H 'Accept: application/vnd.github+json' ` +
    `-H 'Authorization: Bearer '$GITHUB_API_TOKEN ` +
    `-H 'X-GitHub-Api-Version: 2022-11-28' ` +
    `https://api.github.com/repos/forbole/big-dipper-2.0-cosmos/pulls/${pullId}`
);
const { title } = JSON.parse(response);

/**
 * Getting the list of projects in the workspace and then
 * finding the project that matches the title of the PR.
 */
const projects = execShell(`yarn workspaces list --json`);

const projectList = projects
  .split(/\n/g)
  .filter((p) => p)
  .map((p) => JSON.parse(p).name)
  .filter((p) => p.startsWith('web'));

const project = projectList.find((p) => title.endsWith(`[${p}]`)) || 'web';

/* Building the project. */
execShell(`yarn workspace ${project} next build`);

/* Moving the built project to the web folder. */
if (project !== 'web') {
  execShell(`rm -rf apps/web, mv apps/${project} apps/web`);
}
