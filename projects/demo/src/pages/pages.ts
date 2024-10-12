import {DemoPath} from '@demo/constants';
import type {TuiDocPages} from '@taiga-ui/addon-doc';

export const DEMO_PAGES: TuiDocPages = [
    {
        section: 'Documentation',
        title: 'Quickstart',
        route: DemoPath.Quickstart,
    },
    {
        section: 'Documentation',
        title: 'Terms and Definitions',
        route: DemoPath.TermsAndDefinitions,
    },
    {
        section: 'Documentation',
        title: 'PanZoom Configuration',
        route: DemoPath.PanZoom,
    },
    {
        section: 'Documentation',
        title: 'Creating Nodes',
        route: DemoPath.Nodes,
    },
    {
        section: 'Documentation',
        title: 'Connectors',
        route: DemoPath.Connectors,
    },
    {
        section: 'Documentation',
        title: 'Connections',
        route: DemoPath.Connections,
    },
    {
        section: 'Examples',
        title: 'Simple example',
        route: DemoPath.SimpleExample,
    },
    {
        section: 'Examples',
        title: 'Feature Overview',
        route: DemoPath.Overview,
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
