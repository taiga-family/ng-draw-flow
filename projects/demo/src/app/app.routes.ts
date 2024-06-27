import {NgModule} from '@angular/core';
import type {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {DemoPath} from './constants/constants';

export const appRoutes: Routes = [
    // Documentation
    {
        path: DemoPath.GettingStarted,
        loadComponent: async () =>
            import('../pages/documentation/getting-started/getting-started.component'),
        data: {
            title: 'Getting started',
        },
    },

    // Examples
    {
        path: DemoPath.SimpleExample,
        loadComponent: async () =>
            import('../pages/examples/simple-example/simple-example.component'),
        data: {
            title: 'Simple example',
        },
    },
    {
        path: DemoPath.Overview,
        loadComponent: async () =>
            import('../pages/examples/overview/overview.component'),
        data: {
            title: 'Feature Overview',
        },
    },
    {
        path: DemoPath.Editor,
        loadComponent: async () => import('../pages/examples/editor/editor.component'),
        data: {
            title: 'Editor example',
        },
    },
    {
        path: DemoPath.StressTest,
        loadComponent: async () =>
            import('../pages/examples/stress-test/stress-test.component'),
        data: {
            title: 'Stress Test',
        },
    },
    {
        path: '**',
        redirectTo: DemoPath.GettingStarted,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
