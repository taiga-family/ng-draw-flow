import '../demo/src/polyfills';

import {bootstrapApplication} from '@angular/platform-browser';

import {E2eFixtureComponent} from '../demo/src/testing/e2e-fixture.component';

bootstrapApplication(E2eFixtureComponent).catch((error: unknown) => console.error(error));
