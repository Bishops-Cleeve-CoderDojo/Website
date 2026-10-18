import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:4322',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
          ],
        },
      },
    },
  ],

  webServer: {
    // --ignore-lock stops Astro 7 backgrounding the preview server when it
    // detects an AI agent (e.g. Claude Code) in the environment, which would
    // otherwise make Playwright report the server as exited early.
    command: 'npm run preview -- --ignore-lock',
    url: 'http://localhost:4322',
    reuseExistingServer: !process.env.CI,
  },
})
