/* eslint-disable no-console */
/* eslint-disable turbo/no-undeclared-env-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

const apiToken = process.env.GITHUB_API_TOKEN;
const pullId = process.env.VERCEL_GIT_PULL_REQUEST_ID;

const response = exec(
  `curl \
-H "Accept: application/vnd.github+json" \
-H "Authorization: Bearer ${apiToken}"\
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/repos/forbole/REPO/big-dipper-2.0-cosmos/${pullId}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

const { title } = response;

// extract the current workspace inside [] in PR title
function extract(str) {
  if (str.startsWith(/\[/g)) return str.substring(0, str.indexOf('['), str.indexOf(']'));
  return 'web';
}

const workspaceId = extract(title);

exec(`yarn workspace ${workspaceId} next build`, (error, stdout, stderr) => {
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

exec(`rm -rf apps/web, mv apps/${workspaceId} apps/web`, (error, stdout, stderr) => {
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
