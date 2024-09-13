import type {TuiDocPages} from '@taiga-ui/addon-doc';

import {DemoPath} from '../app/constants/constants';

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
        title: 'PanZoom Configuration Guide',
        route: DemoPath.PanZoom,
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
