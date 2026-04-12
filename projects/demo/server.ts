import 'zone.js/node';

import {existsSync} from 'node:fs';
import {join} from 'node:path';

import {APP_BASE_HREF} from '@angular/common';
import {CommonEngine} from '@angular/ssr/node';
import express, {type Express} from 'express';

import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): Express {
    const server = express();
    const distFolder = join(process.cwd(), 'dist/demo/browser');
    const indexHtml = existsSync(join(distFolder, 'index.original.html'))
        ? join(distFolder, 'index.original.html')
        : join(distFolder, 'index.html');
    const commonEngine = new CommonEngine();

    server.set('view engine', 'html');
    server.set('views', distFolder);

    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get(
        '*.*',
        express.static(distFolder, {
            maxAge: '1y',
        }),
    );

    // All regular routes use the Universal engine
    server.get('*', (req: any, res: any, next: any) => {
        const {protocol, originalUrl, baseUrl, headers} = req;

        void commonEngine
            .render({
                bootstrap,
                documentFilePath: indexHtml,
                url: `${protocol}://${headers.host}${originalUrl}`,
                publicPath: distFolder,
                providers: [{provide: APP_BASE_HREF, useValue: baseUrl}],
            })
            .then((html) => {
                res.send(html);
            })
            .catch((err: unknown) => {
                next(err);
            });
    });

    return server;
}

function run(): void {
    const port = process.env.PORT || 4000;

    // Start up the Node server
    const server = app();

    server.listen(port, () => {
        console.info(`Node Express server listening on http://localhost:${port}`);
    });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule?.filename || '';

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}

export * from './src/main.server';
export default bootstrap;
