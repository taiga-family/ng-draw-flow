import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {cpus, platform, release} from 'node:os';
import {resolve} from 'node:path';

import {expect} from '@playwright/test';

import {test} from '../fixtures';

test('records browser render measurements without a timing gate', async ({
    page,
    browser,
}, testInfo) => {
    const repoRoot = resolve(__dirname, '../../..');
    const samples: number[] = [];
    const domCounts: number[] = [];

    for (let iteration = 0; iteration < 6; iteration++) {
        await page.goto('/');
        await expect(page.locator('[data-draw-flow-node]')).toHaveCount(2);
        const start = await page.evaluate(() => performance.now());

        await page.getByRole('button', {name: 'Load 500 nodes'}).click();
        await expect(page.locator('[data-draw-flow-node]')).toHaveCount(500);
        await page.evaluate(
            async () =>
                new Promise<void>((resolve) => {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => resolve());
                    });
                }),
        );
        const elapsed = await page.evaluate(
            (started) => performance.now() - started,
            start,
        );

        if (iteration > 0) {
            samples.push(elapsed);
            domCounts.push(await page.locator('ng-draw-flow *').count());
        }
    }

    const sorted = [...samples].sort((a, b) => a - b);
    const report = {
        schemaVersion: 1,
        metric: 'model-replacement-to-two-rendered-frames-ms',
        includesAutomationAndAssertionOverhead: true,
        mode: 'record-only',
        fixture: {nodes: 500, connections: 0, deterministic: true},
        warmups: 1,
        repetitions: samples.length,
        samples,
        median: sorted[Math.floor(sorted.length / 2)],
        p95: sorted[Math.ceil(sorted.length * 0.95) - 1],
        min: sorted[0],
        max: sorted[sorted.length - 1],
        domCounts,
        environment: {
            dirty: Boolean(
                execFileSync('git', ['status', '--porcelain'], {
                    cwd: repoRoot,
                    encoding: 'utf8',
                }).trim(),
            ),
            fixtureSha256: createHash('sha256')
                .update(
                    readFileSync(
                        resolve(
                            repoRoot,
                            'projects/demo/src/testing/e2e-fixture.component.ts',
                        ),
                    ),
                )
                .digest('hex'),
            commit: execFileSync('git', ['rev-parse', 'HEAD'], {
                cwd: repoRoot,
                encoding: 'utf8',
            }).trim(),
            browser: browser.version(),
            channel: process.env.PW_CHANNEL ?? 'playwright-chromium',
            node: process.version,
            os: `${platform()} ${release()}`,
            cpu: cpus()[0]?.model,
            viewport: page.viewportSize(),
            ci: Boolean(process.env.CI),
            build: 'Angular development e2e fixture',
        },
    };

    await testInfo.attach('browser-performance.json', {
        body: JSON.stringify(report, null, 2),
        contentType: 'application/json',
    });
});
