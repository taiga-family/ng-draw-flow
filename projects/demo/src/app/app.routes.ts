import {NgModule} from '@angular/core';
import type {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {DemoPath} from './constants/constants';

export const appRoutes: Routes = [
    // Quickstart
    {
        path: DemoPath.Quickstart,
        loadComponent: async () =>
            import('../pages/documentation/quickstart/quickstart.component'),
        data: {
            title: 'Quickstart',
        },
    },
    {
        path: DemoPath.TermsAndDefinitions,
        loadComponent: async () =>
            import(
                '../pages/documentation/terms-and-definitions/terms-and-definitions.component'
            ),
        data: {
            title: 'Terms and Definitions',
        },
    },
    {
        path: DemoPath.PanZoom,
        loadComponent: async () =>
            import(
                '../pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component'
            ),
        data: {
            title: 'PanZoom Configuration Guide',
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
        redirectTo: DemoPath.Quickstart,
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
