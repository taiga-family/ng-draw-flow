import {resolve} from 'node:path';

import {defineConfig, devices} from '@playwright/test';

const repoRoot = resolve(__dirname, '../..');
const baseURL = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:4305';

export default defineConfig({
    testDir: './tests',
    outputDir: resolve(repoRoot, 'coverage/e2e/results'),
    reporter: [
        ['list'],
        ['html', {outputFolder: resolve(repoRoot, 'coverage/e2e/report'), open: 'never'}],
        ['json', {outputFile: resolve(repoRoot, 'coverage/e2e/results.json')}],
    ],
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : 1,
    timeout: 45_000,
    expect: {timeout: 10_000},
    use: {
        ...devices['Desktop Chrome'],
        channel: process.env.PW_CHANNEL,
        baseURL,
        viewport: {width: 1280, height: 1000},
        contextOptions: {reducedMotion: 'reduce'},
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {name: 'chromium', testIgnore: '**/*.perf.spec.ts'},
        {
            name: 'performance',
            testMatch: '**/*.perf.spec.ts',
            retries: 0,
            workers: 1,
            dependencies: ['chromium'],
        },
    ],
    webServer: process.env.E2E_BASE_URL
        ? undefined
        : {
              command:
                  'npx nx build demo --configuration=e2e && npx http-server dist/demo-e2e -p 4305 -a 127.0.0.1 -c-1',
              cwd: repoRoot,
              url: baseURL,
              reuseExistingServer: !process.env.CI,
              timeout: 180_000,
          },
});
