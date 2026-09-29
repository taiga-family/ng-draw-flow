import {type DfDataModel, type DfPoint} from '@ng-draw-flow/core';
import {expect, type Locator, type Page} from '@playwright/test';

import {test} from '../fixtures';

async function model(page: Page): Promise<DfDataModel> {
    return JSON.parse(await page.getByTestId('model').innerText()) as DfDataModel;
}

async function firstPosition(page: Page): Promise<DfPoint> {
    const node = (await model(page)).nodes[0];

    if (!node || !('position' in node)) {
        throw new Error('Expected a positioned first node');
    }

    return node.position;
}

async function center(locator: Locator): Promise<{x: number; y: number}> {
    const box = await locator.boundingBox();

    expect(box).not.toBeNull();

    return {x: box!.x + box!.width / 2, y: box!.y + box!.height / 2};
}

async function settleFrame(page: Page): Promise<void> {
    await page.evaluate(
        async () =>
            new Promise<void>((resolve) => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => resolve());
                });
            }),
    );
}

async function drag(page: Page, locator: Locator, dx: number, dy: number): Promise<void> {
    const point = await center(locator);

    await page.mouse.move(point.x, point.y);
    await page.mouse.down();
    await page.mouse.move(point.x + dx, point.y + dy, {steps: 12});
    await settleFrame(page);
    await page.mouse.up();
}

async function createConnection(page: Page): Promise<void> {
    const from = await center(page.locator('df-output[data-node-id="first"]'));
    const to = await center(page.locator('df-input[data-node-id="second"]'));

    await page.mouse.move(from.x, from.y);
    await page.mouse.down();
    await page.mouse.move(to.x, to.y, {steps: 12});
    await settleFrame(page);
    await page.mouse.up();
    await expect.poll(async () => (await model(page)).connections.length).toBe(1);
    await expect(page.locator('df-connection .main-path')).toHaveAttribute('d', /M.+/);
}

test.beforeEach(async ({page}) => {
    await page.goto('/');
    await expect(page.locator('[data-draw-flow-node]')).toHaveCount(2);
    await expect(page.getByTestId('first-handle')).toBeVisible();
    await settleFrame(page);
});

test('renders real nodes and publishes drag coordinates through the CVA', async ({
    page,
}) => {
    const before = await firstPosition(page);

    await drag(page, page.getByTestId('first-handle'), 80, 40);
    await expect
        .poll(async () => firstPosition(page))
        .toEqual({
            x: before.x + 80,
            y: before.y + 40,
        });
    await expect(page.getByTestId('state')).toContainText('"moves": 1');
    await expect(page.getByTestId('state')).toContainText('"dirty": true');
});

test('creates and deletes a rendered connection with mouse and keyboard', async ({
    page,
}) => {
    await createConnection(page);
    const point = await page
        .locator('df-connection .selectable-area')
        .evaluate((element) => {
            const path = element as SVGPathElement;
            const point = path.getPointAtLength(path.getTotalLength() / 2);
            const matrix = path.getScreenCTM();

            if (!matrix) {
                throw new Error('Connection is not rendered');
            }

            const screen = new DOMPoint(point.x, point.y).matrixTransform(matrix);

            return {x: screen.x, y: screen.y};
        });

    await page.mouse.click(point.x, point.y);
    await expect(page.locator('df-connection .main-path')).toHaveClass(/df-selected/);
    await page.keyboard.press('Delete');
    await expect(page.locator('df-connection')).toHaveCount(0);
    await expect.poll(async () => (await model(page)).connections.length).toBe(0);
    await expect(page.getByTestId('state')).toContainText('"created": 1');
    await expect(page.getByTestId('state')).toContainText('"deleted": 1');
});

test('preserves the selected node while editing input and contenteditable text', async ({
    page,
}) => {
    await page.getByTestId('first-handle').click();
    const input = page.getByRole('textbox', {name: 'Node text', exact: true}).first();

    await input.fill('abc');
    await input.press('End');
    await input.press('Backspace');
    await expect(input).toHaveValue('ab');
    const rich = page.getByRole('textbox', {name: 'Rich node text'}).first();

    await rich.fill('abc');
    await rich.press('ArrowLeft');
    await rich.press('ArrowLeft');
    await rich.press('ArrowLeft');
    await rich.press('Delete');
    await expect(rich).toHaveText('bc');
    await expect(page.locator('[data-draw-flow-node]')).toHaveCount(2);
    await expect.poll(async () => (await model(page)).nodes.length).toBe(2);
});

test('blocks disabled edits and keeps external reset working', async ({page}) => {
    const before = await model(page);

    await page.getByRole('button', {name: 'Toggle disabled'}).click();
    await expect(page.locator('ng-draw-flow')).toHaveAttribute('aria-disabled', 'true');
    await expect(
        page.getByRole('textbox', {name: 'Node text', exact: true}).first(),
    ).toBeDisabled();
    await drag(page, page.getByTestId('first-handle'), 80, 40);
    await page.keyboard.press('Delete');
    await expect.poll(async () => model(page)).toEqual(before);
    await page.getByRole('button', {name: 'Reset model'}).click();
    await expect(page.locator('[data-draw-flow-node]')).toHaveCount(2);
    await page.getByRole('button', {name: 'Toggle disabled'}).click();
    await drag(page, page.getByTestId('first-handle'), 60, 20);
    await expect.poll(async () => (await firstPosition(page)).x).toBe(-160);
});

test('resets dirty/touched state and can become touched again', async ({page}) => {
    await drag(page, page.getByTestId('first-handle'), 60, 20);
    await page.getByRole('button', {name: 'Outside editor'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": true');
    await page.getByRole('button', {name: 'Reset model'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": false');
    await expect(page.getByTestId('state')).toContainText('"dirty": false');
    await expect.poll(async () => firstPosition(page)).toEqual({x: -220, y: 0});
    await page.getByTestId('first-handle').click();
    await page.getByRole('button', {name: 'Outside editor'}).click();
    await expect(page.getByTestId('state')).toContainText('"touched": true');
});

test('recreates the editor without duplicate connection events', async ({page}) => {
    await page.getByRole('button', {name: 'Toggle editor'}).click();
    await expect(page.locator('ng-draw-flow')).toHaveCount(0);
    await page.getByRole('button', {name: 'Toggle editor'}).click();
    await expect(page.locator('[data-draw-flow-node]')).toHaveCount(2);
    await settleFrame(page);
    await createConnection(page);
    await expect(page.getByTestId('state')).toContainText('"created": 1');
});
