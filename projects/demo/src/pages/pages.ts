import {DemoPath} from '@demo/constants';
import type {TuiDocRoutePages} from '@taiga-ui/addon-doc';

export const DEMO_PAGES: TuiDocRoutePages = [
    {
        section: 'Getting Started',
        title: 'Overview',
        route: DemoPath.Overview,
    },
    {
        section: 'Getting Started',
        title: 'Install',
        route: DemoPath.Install,
    },
    {
        section: 'Getting Started',
        title: 'Quickstart',
        route: DemoPath.Quickstart,
    },
    {
        section: 'Getting Started',
        title: 'Terms and Definitions',
        route: DemoPath.TermsAndDefinitions,
    },
    {
        section: 'Features',
        title: 'Configuration & Public API',
        route: DemoPath.ConfigurationAndPublicApi,
    },
    {
        section: 'Features',
        title: 'PanZoom Configuration',
        route: DemoPath.PanZoom,
    },
    {
        section: 'Features',
        title: 'Creating Nodes',
        route: DemoPath.Nodes,
    },
    {
        section: 'Features',
        title: 'Connectors',
        route: DemoPath.Connectors,
    },
    {
        section: 'Features',
        title: 'Validation',
        route: DemoPath.Validation,
    },
    {
        section: 'Examples',
        title: 'Simple example',
        route: DemoPath.SimpleExample,
    },
    {
        section: 'Examples',
        title: 'Feature Overview',
        route: DemoPath.ExamplesOverview,
    },
    {
        section: 'Examples',
        title: 'Editor example',
        route: DemoPath.Editor,
    },
    {
        section: 'Examples',
        title: 'Stress Test',
        route: DemoPath.StressTest,
    },
];
