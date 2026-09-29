import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {arch, cpus, platform, release} from 'node:os';
import {dirname, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import * as d3 from 'd3-hierarchy';
import ts from 'typescript';

const root = fileURLToPath(new URL('../../', import.meta.url));
const warmups = 3;
const repetitions = 11;
const modules = new Map();
const sourceFiles = [];
const output = resolve(
    root,
    process.argv.find((argument) => argument.startsWith('--output='))?.slice(9) ??
        'coverage/performance/algorithms.json',
);

// Transpile only the pure algorithm modules; setup is outside every timed sample.
// This harness measures source algorithms, not Angular rendering or package compatibility.
function loadSource(path) {
    const absolutePath = resolve(root, path);

    if (modules.has(absolutePath)) {
        return modules.get(absolutePath);
    }

    const exports = {};

    modules.set(absolutePath, exports);

    const source = readFileSync(absolutePath, 'utf8');

    sourceFiles.push({
        path: relative(root, absolutePath),
        sha256: createHash('sha256').update(source).digest('hex'),
    });

    const {outputText} = ts.transpileModule(source, {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2022,
        },
        fileName: absolutePath,
    });

    const requireSource = (specifier) => {
        if (specifier === 'd3-hierarchy') {
            return d3;
        }

        if (!specifier.startsWith('.')) {
            throw new Error(`Unsupported runtime dependency: ${specifier}`);
        }

        return loadSource(resolve(dirname(absolutePath), `${specifier}.ts`));
    };

    new Function('exports', 'require', outputText)(exports, requireSource);

    return exports;
}

function connection(source, target) {
    return {
        source: {nodeId: source, connectorId: `${source}-out`, connectorType: 'output'},
        target: {nodeId: target, connectorId: `${target}-in`, connectorType: 'input'},
    };
}

function treeFixture(shape, count) {
    const nodes = Array.from({length: count}, (_, index) => ({
        id: String(index),
        data: {type: 'benchmark'},
    }));
    const connections = nodes.slice(1).map((node, index) => {
        const parent = shape === 'chain' ? index : shape === 'star' ? 0 : index >> 1;

        return connection(String(parent), node.id);
    });

    return {nodes, connections};
}

function denseFixture(count) {
    const model = treeFixture('chain', count);

    model.connections = [];

    // Reversed adjacency order exercises duplicate pending DFS entries.
    for (let source = 0; source < count; source++) {
        for (let target = count - 1; target > source; target--) {
            model.connections.push(connection(String(source), String(target)));
        }
    }

    return model;
}

function measure(algorithm, fixture, model, run) {
    for (let index = 0; index < warmups; index++) {
        run();
    }

    const samplesMs = Array.from({length: repetitions}, () => {
        const start = performance.now();

        run();

        return performance.now() - start;
    });
    const sorted = samplesMs.toSorted((left, right) => left - right);
    const percentile = (value) => sorted[Math.ceil(sorted.length * value) - 1];

    return {
        algorithm,
        fixture,
        nodes: model.nodes.length,
        edges: model.connections.length,
        unit: 'ms',
        samplesMs,
        median: percentile(0.5),
        p95: percentile(0.95),
        min: sorted[0],
        max: sorted.at(-1),
    };
}

const {D3TreeLayoutEngine} = loadSource('projects/layouts/src/lib/tree/d3-tree-layout.engine.ts');
const {dfValidateCycles, dfCycleDetectionValidator} = loadSource(
    'projects/ng-draw-flow/src/lib/validators/cycle-detection/cycle-detection.validator.ts',
);
const engine = new D3TreeLayoutEngine();
const metrics = [];

for (const shape of ['chain', 'star', 'balanced']) {
    for (const count of [1000, 4000, 8000]) {
        const model = treeFixture(shape, count);

        metrics.push(measure('tree-layout', shape, model, () => engine.layout(model)));
        metrics.push(measure('cycle-validation', shape, model, () => dfValidateCycles(model)));

        const validate = dfCycleDetectionValidator();
        const control = {value: model};

        metrics.push(measure('cached-cycle-validation', shape, model, () => validate(control)));
    }
}

for (const count of [100, 200, 400]) {
    const model = denseFixture(count);

    metrics.push(measure('cycle-validation', 'dense-dag', model, () => dfValidateCycles(model)));
}

const disconnected = treeFixture('balanced', 8000);

disconnected.connections = disconnected.connections.filter((_, index) => index % 10 !== 0);
metrics.push(measure('cycle-validation', 'disconnected', disconnected, () => dfValidateCycles(disconnected)));

const manifest = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const report = {
    schemaVersion: 1,
    suite: 'source-algorithms',
    createdAt: new Date().toISOString(),
    revision: execFileSync('git', ['rev-parse', 'HEAD'], {cwd: root, encoding: 'utf8'}).trim(),
    dirty: Boolean(execFileSync('git', ['status', '--porcelain'], {cwd: root, encoding: 'utf8'}).trim()),
    sourceFiles,
    environment: {
        node: process.version,
        platform: platform(),
        release: release(),
        arch: arch(),
        cpu: cpus()[0]?.model,
        logicalCpus: cpus().length,
        angular: manifest.devDependencies['@angular/core'],
        typescript: ts.version,
        d3Hierarchy: manifest.devDependencies['d3-hierarchy'],
    },
    methodology: {
        fixtureVersion: 1,
        seed: null,
        generation: 'Deterministic index-based fixtures; no random input.',
        warmups,
        repetitions,
        clock: 'performance.now',
        percentile: 'nearest rank',
        includes: 'Algorithm and its allocations only; fixture setup and transpilation excluded.',
        budgets: 'Reporting only; compare on the same idle runner before setting budgets.',
    },
    metrics,
};

mkdirSync(dirname(output), {recursive: true});
writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
writeFileSync(
    output.replace(/\.json$/, '') + '.csv',
    [
        'algorithm,fixture,nodes,edges,median_ms,p95_ms,min_ms,max_ms',
        ...metrics.map(({algorithm, fixture, nodes, edges, median, p95, min, max}) =>
            [algorithm, fixture, nodes, edges, median, p95, min, max].join(','),
        ),
        '',
    ].join('\n'),
);
console.table(
    metrics.map(({algorithm, fixture, nodes, edges, median, p95}) => ({
        algorithm,
        fixture,
        nodes,
        edges,
        medianMs: median.toFixed(3),
        p95Ms: p95.toFixed(3),
    })),
);
console.log(`Performance report: ${output}`);
