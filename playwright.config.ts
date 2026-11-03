import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // [Test directory](ca://s?q=Playwright_test_directory)
  testMatch: /.*\.spec\.ts/, // [File naming rule](ca://s?q=Playwright_test_file_naming_rule)
  timeout: 15 * 1000,
  fullyParallel: true,
  retries: 0,
  reporter: [['html']], // [HTML reporter](ca://s?q=Playwright_HTML_reporter_config)

  use: {
    baseURL: 'http://localhost:3000', // [Base URL](ca://s?q=Playwright_baseURL_config)
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },

  projects: [

  {
      name: 'chromium-iPhone-12',
      use: {
        ...devices['iPhone 12'],
        browserName: 'chromium',
      },
    },

    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
