import {execFileSync} from 'node:child_process';
import {mkdirSync, readdirSync, rmSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const consumerRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspaceRoot = resolve(consumerRoot, '../..');
const packageRoot = join(workspaceRoot, 'dist/ng-draw-flow');
const tarballRoot = join(consumerRoot, '.tarballs');
const npmCli = process.env.npm_execpath;

if (!npmCli) {
    throw new Error('Run this script through npm so npm_execpath is available.');
}

rmSync(tarballRoot, {force: true, recursive: true});
mkdirSync(tarballRoot, {recursive: true});

execFileSync(process.execPath, [npmCli, 'pack', packageRoot, '--pack-destination', tarballRoot], {
    cwd: workspaceRoot,
    stdio: 'inherit',
});

const tarballs = readdirSync(tarballRoot).filter((name) => name.endsWith('.tgz'));

if (tarballs.length !== 1) {
    throw new Error(`Expected one core tarball, found ${tarballs.length}.`);
}

execFileSync(
    process.execPath,
    [npmCli, 'install', '--ignore-scripts', '--no-save', '--package-lock=false', join(tarballRoot, tarballs[0])],
    {cwd: consumerRoot, stdio: 'inherit'},
);
