import {type ApplicationConfig, mergeApplicationConfig} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {provideUniversal} from '@ng-web-apis/universal';

import {appConfig} from './app.config';

const serverConfig: ApplicationConfig = {
    providers: [provideServerRendering(), provideUniversal()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
