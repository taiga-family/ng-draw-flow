# Algorithm performance reports

Run from the repository root after `npm ci`:

```shell
node tools/performance/benchmark.mjs
node tools/performance/benchmark.mjs --output=coverage/performance/baseline.json
```

The runner writes JSON plus a CSV summary under `coverage/performance/`. It uses the installed TypeScript compiler to
load the actual pure source algorithms and the installed `d3-hierarchy` package. Source transpilation, fixture
construction and warmup are outside the samples. No Angular runtime, browser or build is required.

Fixtures are deterministic: chain, star and balanced trees at 1,000, 4,000 and 8,000 nodes; dense DAGs at 100, 200 and
400 nodes; and a disconnected graph at 8,000 nodes. Dense DAG adjacency order deliberately stresses paths that converge
on queued nodes. Each case has three warmups and eleven measured samples.

JSON schema version 1 records:

- `suite`, `createdAt`, Git `revision`, working-tree `dirty` status and SHA-256 of each loaded source file;
- `environment`: Node, OS, architecture, CPU and Angular/TypeScript/D3 versions;
- `methodology`: fixture version, generation rule, warmups, repetitions and clock;
- `metrics`: algorithm, fixture, node/edge counts, raw millisecond samples and nearest-rank median, p95, min and max.

Retain reports as CI artifacts and compare the same fixture version on the same idle runner. Do not enforce absolute
timing thresholds from a developer laptop. With eleven samples, p95 is the largest sample and is sensitive to process
noise. Raise repetitions on a dedicated runner before adopting a timing budget.

These timings include algorithm work and allocation costs; they do not measure allocated or retained memory. They do not
prove published-package compatibility or measure Angular rendering, DOM geometry, pointer latency or frame rate; use
dedicated browser scenarios and profiling for those. Current D3 hierarchy construction still has quadratic height
propagation for very deep chains, even though this library's depth offsets and child collection are linear. Keep chain
fixtures when evaluating future layout changes.
