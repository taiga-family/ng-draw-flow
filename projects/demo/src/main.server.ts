import {type ApplicationRef, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {provideServerRendering} from '@angular/platform-server';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {AppComponent} from './app/app.component';
import {appConfig} from './app/app.config';

const serverConfig = mergeApplicationConfig(appConfig, {
    providers: [provideServerRendering(), UNIVERSAL_PROVIDERS],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, serverConfig, context);
