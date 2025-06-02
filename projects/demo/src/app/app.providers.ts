import {isPlatformBrowser, LocationStrategy, PathLocationStrategy} from '@angular/common';
import type {Provider} from '@angular/core';
import {inject, PLATFORM_ID} from '@angular/core';
import {provideNgDrawFlowConfigs} from '@ng-draw-flow/core';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_TITLE,
} from '@taiga-ui/addon-doc';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';

import {FirstNode} from '../pages/getting-started/quickstart/examples/first-node/first-node';
import {FirstNodeConnectedComponent} from '../pages/getting-started/quickstart/examples/first-node-connected/first-node-connected.component';
import {EnhancedNode} from '../pages/getting-started/quickstart/examples/first-node-enhanced/enhanced-node';
import {DEMO_PAGES} from '../pages/pages';
import {LOGO_CONTENT} from './modules/logo/logo.component';
import {
    FormNodeComponent,
    InfoNodeComponent,
    InputNodeComponent,
    MiniNodeComponent,
    OutputNodeComponent,
    SimpleNodeComponent,
} from './modules/nodes';

export const APP_PROVIDERS: Provider[] = [
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy,
    },
    {
        provide: TUI_DOC_TITLE,
        useValue: 'NgDrawFlow | ',
    },
    {
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT,
    },
    {
        provide: TUI_DOC_DEFAULT_TABS,
        useValue: ['Description and examples', 'API'],
    },
    {
        provide: TUI_DOC_PAGES,
        useValue: DEMO_PAGES,
    },
    {
        provide: HIGHLIGHT_OPTIONS,
        useFactory: () => {
            const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

            return {
                coreLibraryLoader: async () => import('highlight.js/lib/core'),
                lineNumbersLoader: async () =>
                    // SSR ReferenceError: window is not defined
                    isBrowser
                        ? import('ngx-highlightjs/line-numbers' as string)
                        : Promise.resolve(),
                languages: {
                    typescript: async () =>
                        import('highlight.js/lib/languages/typescript'),
                    less: async () => import('highlight.js/lib/languages/less'),
                    xml: async () => import('highlight.js/lib/languages/xml'),
                },
            };
        },
    },
    provideNgDrawFlowConfigs({
        nodes: {
            infoNode: InfoNodeComponent,
            simpleNode: SimpleNodeComponent,
            inputNode: InputNodeComponent,
            outputNode: OutputNodeComponent,
            miniNode: MiniNodeComponent,
            formNode: FormNodeComponent,
            firstNode: FirstNode,
            enhancedNode: EnhancedNode,
            firstNodeConnected: FirstNodeConnectedComponent,
        },
    }),
];
