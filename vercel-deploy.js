/* eslint-disable @typescript-eslint/no-var-requires, no-console, turbo/no-undeclared-env-vars */

/**
 * This script is used to build the correct project based on the PR.
 * the title suffix should be in the format of [workspace-name]
 * otherwise, it will build the web project
 */
const { execSync } = require('child_process');

/**
 * It executes a shell command and returns the result
 * @param command - The command to execute.
 * @returns The result of the command being executed.
 */
function execShell(command) {
  console.log(`executing command ${command}`);
  const output = execSync(command, {
    cwd: process.cwd(),
    encoding: 'utf-8',
    env: process.env,
  });
  console.log(output);
  return output;
}

/**
 * Getting the list of projects in the workspace and then
 * finding the project that matches the title of the PR.
 */
function getProjectList() {
  const projects = execShell(`yarn workspaces list --json`);

  const projectList = projects
    .split(/\n/g)
    .filter((p) => p)
    .map((p) => JSON.parse(p).name)
    .filter((p) => p.startsWith('web'));

  return projectList;
}

/**
 * It removes all the unused projects from the workspace, cleans the yarn cache, and moves the built
 * project to the web folder
 * @param project - The name of the project to build.
 */
function cleanUnusedProjects(project, projectList) {
  const unusedProjects = projectList
    .filter((p) => p !== project)
    .map((p) => `apps/${p} `)
    .join('');
  if (unusedProjects) execShell(`rm -rf ${unusedProjects}`);
  execShell(`yarn cache clean --mirror`);
  execShell(`yarn config set supportedArchitectures --json '{}'`);
  /* Move the built project to the web folder. */
  if (project !== 'web') {
    execShell(`mv apps/${project} apps/web`);
  }
}

console.log('running vercel-deploy.js', process.argv[2] ?? '');

/**
 * Vercel deployment flow:
 * 1. turbo-ignore, if error, proceed with deployment, otherwise cancel the deployment
 *    `node vercel-deploy.js turbo-ignore`
 * 2. install
 *    `node vercel-deploy.js install`
 * 3. build
 *    `node vercel-deploy.js`
 */

if (process.argv[2] === 'manual') {
  const projectList = getProjectList();
  const project = projectList.find((p) => p === process.argv[3]);

  if (!project) throw new Error('project not found');

  cleanUnusedProjects(project, projectList);
  execShell(`YARN_ENABLE_IMMUTABLE_INSTALLS=false yarn install --inline-builds`);
} else if (process.argv[2] === 'turbo-ignore') {
  let project = 'web';
  try {
    const projectList = getProjectList();

    // VERCEL_GIT_PULL_REQUEST_ID is the pull request id
    const pullId = process.env.VERCEL_GIT_PULL_REQUEST_ID;
    const base = process.env.VERCEL_GIT_COMMIT_REF;
    console.log(`VERCEL_GIT_PULL_REQUEST_ID:`, pullId);

    // GITHUB_API_TOKEN is the github api token, we need it to get the pull request title
    const apiToken = process.env.GITHUB_API_TOKEN;
    if (!apiToken) throw new Error('GITHUB_API_TOKEN is not defined');

    if (pullId) {
      /* Getting the pull request title. */
      const response = execShell(
        `curl ` +
          `-H 'Accept: application/vnd.github+json' ` +
          `-H 'Authorization: Bearer '$GITHUB_API_TOKEN ` +
          `-H 'X-GitHub-Api-Version: 2022-11-28' ` +
          `https://api.github.com/repos/forbole/big-dipper-2.0-cosmos/pulls/${pullId}`
      );
      const { title } = JSON.parse(response);

      project = projectList.find((p) => title.endsWith(`[${p}]`)) || 'web';
    } else {
      /* Getting the pull request title. */
      const response = execShell(
        `curl ` +
          `-H 'Accept: application/vnd.github+json' ` +
          `-H 'Authorization: Bearer '$GITHUB_API_TOKEN ` +
          `-H 'X-GitHub-Api-Version: 2022-11-28' ` +
          `https://api.github.com/repos/forbole/big-dipper-2.0-cosmos/pulls?state=open${
            base ? `&base=${encodeURIComponent(base)}` : ''
          }&per_page=1`
      );
      const [page] = JSON.parse(response) ?? [];
      const { title } = page ?? {};

      project = projectList.find((p) => title.endsWith(`[${p}]`)) || 'web';
    }

    cleanUnusedProjects(project, projectList);
  } catch (error) {
    console.error(error);
    return; // cancel deployment
  }

  if (process.env.VERCEL_ENV === 'production')
    throw new Error('✅ proceeding with deployment (production)');

  execShell(`yarn workspace ${project} dlx turbo-ignore`);
} else if (process.argv[2] === 'install') {
  execShell(`YARN_ENABLE_IMMUTABLE_INSTALLS=false yarn install --inline-builds`);
} else {
  /* Building the project. */
  const { name } = JSON.parse(execShell(`cat apps/web/package.json`));
  execShell(
    `BASE_PATH=/ yarn workspace ${name} next build && BASE_PATH=/ yarn workspace ${name} next-sitemap`
  );
}
