/* eslint-disable */
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const port = process.env.PORT || 3900;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './e2e',
  /* Maximum time one test can run for. */
  timeout: 50 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10 * 1000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: `http://localhost:${port}`,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? 'off' : 'on',
    /* Ignore https error in firefox */
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
    video: process.env.CI ? 'off' : 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    process.env.CI
      ? {}
      : {
          name: 'firefox',
          use: {
            ...devices['Desktop Firefox'],
          },
        },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    process.env.CI
      ? {}
      : {
          name: 'Mobile Chrome',
          use: {
            ...devices['Pixel 5'],
          },
        },

    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ].filter((config) => !!config?.name),

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: `PROJECT_NAME=${
      process.env.PROJECT_NAME || 'web'
    } yarn build && PORT=${port} PROJECT_NAME=${process.env.PROJECT_NAME || 'web'} yarn start`,
    url: `http://localhost:${port}`,
    timeout: 5 * 60 * 1000,
    reuseExistingServer: process.env.CI ? undefined : true,
  },
};

export default config;
