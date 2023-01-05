/* eslint-disable no-console */
/* eslint-disable turbo/no-undeclared-env-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

const apiToken = process.env.GITHUB_API_TOKEN;
const pullId = process.env.VERCEL_GIT_PULL_REQUEST_ID;

function execShell(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const response = execShell(`curl \
-H "Accept: application/vnd.github+json" \
-H "Authorization: Bearer ${apiToken}"\
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/repos/forbole/big-dipper-2.0-cosmos/${pullId}`);

const { title } = response;

const projects = execShell(
  `yarn workspaces list --json | jq -csr '[ .[].name | select(. | startswith("web") ) ]'`
);

const project = projects.find((p) => title.endsWith(`[${p}]`));

execShell(`yarn workspace ${project} next build`);

execShell(`rm -rf apps/web, mv apps/${project} apps/web`);
