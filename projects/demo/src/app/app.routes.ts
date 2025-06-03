import {NgModule} from '@angular/core';
import type {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {DemoPath} from '@demo/constants';

export const appRoutes: Routes = [
    {
        path: DemoPath.Installation,
        loadComponent: async () =>
            import('../pages/getting-started/installation/installation.component'),
        data: {
            title: 'Installation',
        },
    },
    {
        path: DemoPath.Quickstart,
        loadComponent: async () =>
            import('../pages/getting-started/quickstart/quickstart.component'),
        data: {
            title: 'Quickstart',
        },
    },
    {
        path: DemoPath.CoreConcepts,
        loadComponent: async () =>
            import('../pages/getting-started/core-concepts/core-concepts.component'),
        data: {
            title: 'Core concepts',
        },
    },
    {
        path: DemoPath.Overview,
        loadComponent: async () =>
            import('../pages/getting-started/overview/overview.component'),
        data: {
            title: 'Overview',
        },
    },
    {
        path: DemoPath.ConfigurationAndPublicApi,
        loadComponent: async () =>
            import(
                '../pages/features/configuration-and-public-api/configuration-and-public-api.component'
            ),
        data: {
            title: 'Configuration & Public API',
        },
    },
    {
        path: DemoPath.PanZoom,
        loadComponent: async () =>
            import(
                '../pages/features/pan-zoom-configuration/pan-zoom-configuration.component'
            ),
        data: {
            title: 'PanZoom Configuration',
        },
    },
    {
        path: DemoPath.Nodes,
        loadComponent: async () =>
            import('../pages/features/creating-nodes/creating-nodes.component'),
        data: {
            title: 'Creating Nodes',
        },
    },
    {
        path: DemoPath.Connectors,
        loadComponent: async () =>
            import('../pages/features/connectors/connectors.component'),
        data: {
            title: 'Connectors',
        },
    },
    {
        path: DemoPath.Validation,
        loadComponent: async () =>
            import('../pages/features/validation/validation.component'),
        data: {
            title: 'Validation',
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
        path: DemoPath.ExamplesOverview,
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
        redirectTo: DemoPath.Installation,
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
