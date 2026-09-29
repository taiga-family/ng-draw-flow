import {expect, type Locator, type Page} from '@playwright/test';

import {test} from '../fixtures';

function node(page: Page, id: string): Locator {
    return page.locator(`[data-draw-flow-node][data-node-id="${id}"]`);
}

async function connectNodes(page: Page): Promise<void> {
    const source = await page.locator('df-output[data-node-id="first"]').boundingBox();
    const target = await page.locator('df-input[data-node-id="second"]').boundingBox();

    expect(source).not.toBeNull();
    expect(target).not.toBeNull();
    await page.mouse.move(source!.x + source!.width / 2, source!.y + source!.height / 2);
    await page.mouse.down();
    await page.mouse.move(target!.x + target!.width / 2, target!.y + target!.height / 2, {
        steps: 12,
    });
    await page.evaluate(
        async () =>
            new Promise<void>((resolve) => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => resolve());
                });
            }),
    );
    await page.mouse.up();
    await expect(page.locator('df-connection .main-path')).toHaveAttribute('d', /M.+/);
}

test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.getByRole('button', {name: 'Enable validation'}).click();
    await expect(page.locator('[data-draw-flow-node]')).toHaveCount(2);
    await expect(page.getByTestId('state')).toContainText('"invalid": true');
    await expect(page.getByTestId('state')).toContainText('"hasIsolatedNodes": true');
    await expect(page.getByTestId('state')).toContainText('"touched": false');
});

test('shows graph and local validation only after leaving the editor', async ({page}) => {
    const first = node(page, 'first');
    const second = node(page, 'second');
    const firstText = first.getByRole('textbox', {name: 'Required node text'});
    const secondText = second.getByRole('textbox', {name: 'Required node text'});

    await expect(first).not.toHaveClass(/df-invalid/);
    await expect(second).not.toHaveClass(/df-invalid/);
    await expect(page.getByTestId('first-local-invalid')).toHaveText('true');
    await expect(page.getByTestId('second-local-invalid')).toHaveText('true');

    await firstText.fill('Valid local value');
    await secondText.focus();
    await expect(page.getByTestId('first-local-invalid')).toHaveText('false');
    await expect(page.getByTestId('state')).toContainText('"touched": false');
    await expect(first).not.toHaveClass(/df-invalid/);
    await expect(second).not.toHaveClass(/df-invalid/);

    await page.getByRole('button', {name: 'Outside editor'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": true');
    await expect(first).toHaveClass(/df-invalid/);
    await expect(second).toHaveClass(/df-invalid/);

    await connectNodes(page);
    await expect(page.getByTestId('state')).toContainText('"invalid": false');
    await expect(page.getByTestId('state')).toContainText('"errors": null');
    await expect(first).not.toHaveClass(/df-invalid/);
    await expect(second).toHaveClass(/df-invalid/);

    await secondText.fill('Also valid');
    await expect(page.getByTestId('second-local-invalid')).toHaveText('false');
    await expect(second).not.toHaveClass(/df-invalid/);
});

test('tracks programmatic touched changes, reset and touching the editor again', async ({
    page,
}) => {
    const first = node(page, 'first');
    const second = node(page, 'second');
    const firstText = first.getByRole('textbox', {name: 'Required node text'});

    await page.getByRole('button', {name: 'Mark all as touched'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": true');
    await expect(first).toHaveClass(/df-invalid/);
    await expect(second).toHaveClass(/df-invalid/);

    await page.getByRole('button', {name: 'Mark as untouched'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": false');
    await expect(page.getByTestId('state')).toContainText('"invalid": true');
    await expect(first).not.toHaveClass(/df-invalid/);
    await expect(second).not.toHaveClass(/df-invalid/);

    await firstText.focus();
    await page.getByRole('button', {name: 'Outside editor'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": true');
    await expect(first).toHaveClass(/df-invalid/);

    await page.getByRole('button', {name: 'Reset model'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": false');
    await expect(page.getByTestId('state')).toContainText('"invalid": true');
    await expect(first).not.toHaveClass(/df-invalid/);
    await expect(second).not.toHaveClass(/df-invalid/);

    await firstText.focus();
    await page.getByRole('button', {name: 'Outside editor'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": true');
    await expect(first).toHaveClass(/df-invalid/);
    await expect(second).toHaveClass(/df-invalid/);
});
