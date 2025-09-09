import {NgModule} from '@angular/core';
import {RouterModule, type Routes} from '@angular/router';
import {DemoPath} from '@demo/constants';

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
        path: DemoPath.ConfigurationAndPublicApi,
        loadComponent: async () =>
            import(
                '../pages/documentation/configuration-and-public-api/configuration-and-public-api.component'
            ),
        data: {
            title: 'Configuration & Public API',
        },
    },
    {
        path: DemoPath.PanZoom,
        loadComponent: async () =>
            import(
                '../pages/documentation/pan-zoom-configuration/pan-zoom-configuration.component'
            ),
        data: {
            title: 'PanZoom Configuration',
        },
    },
    {
        path: DemoPath.Nodes,
        loadComponent: async () =>
            import('../pages/documentation/creating-nodes/creating-nodes.component'),
        data: {
            title: 'Creating Nodes',
        },
    },
    {
        path: DemoPath.Connectors,
        loadComponent: async () =>
            import('../pages/documentation/connectors/connectors.component'),
        data: {
            title: 'Connectors',
        },
    },
    {
        path: DemoPath.Connections,
        loadComponent: async () =>
            import('../pages/documentation/connections/connections.component'),
        data: {
            title: 'Connection Lines',
        },
    },
    {
        path: DemoPath.Labels,
        loadComponent: async () =>
            import('../pages/documentation/labels/labels.component'),
        data: {
            title: 'Labels',
        },
    },
    {
        path: DemoPath.Validation,
        loadComponent: async () =>
            import('../pages/documentation/validation/validation.component'),
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
