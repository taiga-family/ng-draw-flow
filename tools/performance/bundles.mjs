import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {mkdirSync, readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {gzipSync} from 'node:zlib';

import ts from 'typescript';

function moduleImports(source, filename) {
    const imports = [];
    const file = ts.createSourceFile(filename, source, ts.ScriptTarget.Latest, true);
    const visit = (node) => {
        const specifier =
            ts.isImportDeclaration(node) || ts.isExportDeclaration(node)
                ? node.moduleSpecifier
                : ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)
                  ? node.argument.literal
                  : ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword
                    ? node.arguments[0]
                    : undefined;

        if (specifier && ts.isStringLiteral(specifier)) {
            imports.push(specifier.text);
        }

        ts.forEachChild(node, visit);
    };

    visit(file);

    return imports;
}

const root = fileURLToPath(new URL('../../', import.meta.url));
const output = resolve(root, 'coverage/performance/bundles.json');
const metrics = [];

for (const directory of ['ng-draw-flow', 'layouts']) {
    const packageDirectory = resolve(root, 'dist', directory);
    const manifest = JSON.parse(readFileSync(resolve(packageDirectory, 'package.json'), 'utf8'));
    const entry = manifest.exports['.'];
    const bundle = readFileSync(resolve(packageDirectory, entry.default));
    readFileSync(resolve(packageDirectory, entry.types));

    const declarationFiles = readdirSync(packageDirectory, {recursive: true}).filter((path) => path.endsWith('.d.ts'));
    const declarations = declarationFiles.map((path) => readFileSync(resolve(packageDirectory, path), 'utf8'));
    const imports = moduleImports(bundle.toString(), entry.default);
    const packages = [
        ...new Set(
            imports.map((specifier) =>
                specifier.startsWith('@') ? specifier.split('/').slice(0, 2).join('/') : specifier.split('/')[0],
            ),
        ),
    ].sort();
    const declared = {...manifest.dependencies, ...manifest.peerDependencies};
    const undeclared = packages.filter((name) => !declared[name]);

    if (undeclared.length) {
        throw new Error(`${manifest.name}: undeclared runtime imports: ${undeclared.join(', ')}`);
    }

    if (
        directory === 'ng-draw-flow' &&
        packages.some((name) => ['@ng-draw-flow/layouts', 'd3-hierarchy'].includes(name))
    ) {
        throw new Error('Core must remain independent of layouts and d3-hierarchy');
    }

    if (
        declarations.some((source, index) =>
            moduleImports(source, declarationFiles[index]).includes('@angular/forms/signals'),
        )
    ) {
        throw new Error(`${manifest.name}: Angular 19 declarations must not import Signal Forms`);
    }

    metrics.push({
        package: manifest.name,
        version: manifest.version,
        entry: entry.default,
        sha256: createHash('sha256').update(bundle).digest('hex'),
        rawBytes: bundle.byteLength,
        gzipBytes: gzipSync(bundle, {level: 9}).byteLength,
        declarationsBytes: declarations.reduce((total, source) => total + Buffer.byteLength(source), 0),
        declarationFiles: declarationFiles.length,
        runtimeImports: packages,
    });
}

const report = {
    schemaVersion: 1,
    suite: 'published-fesm-bundles',
    createdAt: new Date().toISOString(),
    revision: execFileSync('git', ['rev-parse', 'HEAD'], {cwd: root, encoding: 'utf8'}).trim(),
    dirty: Boolean(execFileSync('git', ['status', '--porcelain'], {cwd: root, encoding: 'utf8'}).trim()),
    node: process.version,
    methodology:
        'Production FESM entry only, before consumer tree shaking; gzip level 9. Runtime peer sizes excluded. Build before measuring.',
    metrics,
};

mkdirSync(dirname(output), {recursive: true});
writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.table(metrics.map(({package: name, rawBytes, gzipBytes}) => ({package: name, rawBytes, gzipBytes})));
console.log(`Bundle report: ${output}`);
