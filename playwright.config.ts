/* eslint-disable */
import type { PlaywrightTestConfig, PlaywrightWorkerOptions, Project } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const port = process.env.PORT || '3000';
const projectName = process.env.PROJECT_NAME || 'web';
const [_, chainName] = /^web-(.+)$/.exec(projectName) ?? ['', 'base'];
const basePath = chainName === 'base' ? '' : `/${chainName}`;
const projects: Array<Project<PlaywrightTestConfig, PlaywrightWorkerOptions>> = [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox'],
  //   },
  // },
  // {
  //   name: 'webkit',
  //   use: {
  //     ...devices['Desktop Safari'],
  //   },
  // },
  // {
  //   name: 'mobile-chrome',
  //   use: {
  //     ...devices['Pixel 5'],
  //   },
  // },
  {
    name: 'mobile-safari',
    use: {
      ...devices['iPhone 12'],
    },
  },

  /* Test against branded browsers. */
  // {
  //   name: 'microsoft-edge',
  //   use: {
  //     channel: 'msedge',
  //   },
  // },
  // {
  //   name: 'google-chrome',
  //   use: {
  //     channel: 'chrome',
  //   },
  // },
];

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './e2e',
  /* Maximum time one test can run for. */
  timeout: process.env.CI ? 2 * 60 * 1000 : 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 60 * 1000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry twice on CI, none on non-CI */
  retries: process.env.CI ? 2 : 3,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: `http://localhost:${port}${basePath}`,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? 'on-first-retry' : 'on',
    /* Ignore https error in firefox */
    ignoreHTTPSErrors: true,
    headless: true,
    viewport: { width: 1280, height: 720 },
    video: 'off',
  },

  /* Configure projects for major browsers */
  projects: projects.filter((config) => !!config?.name),

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.PLAYWRIGHT_SERVER_COMMAND || `yarn workspace ${projectName} next dev`,
    url: `http://localhost:${port}${basePath}`,
    ignoreHTTPSErrors: true,
    env: {
      PORT: port,
      DEBUG: 'pw:webserver',
      BASE_PATH: '/',
      RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: 'false',
    },
    timeout: process.env.CI ? 2 * 60 * 1000 : undefined,
    reuseExistingServer: true,
  },
};

export default config;
