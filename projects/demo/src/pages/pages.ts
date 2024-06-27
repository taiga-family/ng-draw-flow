import type {TuiDocPages} from '@taiga-ui/addon-doc';

import {DemoPath} from '../app/constants/constants';

export const DEMO_PAGES: TuiDocPages = [
    {
        section: 'Documentation',
        title: 'Getting started',
        route: DemoPath.GettingStarted,
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
