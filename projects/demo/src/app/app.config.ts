import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import {
    type ApplicationConfig,
    importProvidersFrom,
    SecurityContext,
} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
    withInMemoryScrolling,
} from '@angular/router';
import {provideTaiga} from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';

import {APP_PROVIDERS} from './app.providers';
import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            appRoutes,
            withEnabledBlockingInitialNavigation(),
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
            }),
        ),
        provideHttpClient(withFetch()),
        importProvidersFrom(
            BrowserAnimationsModule,
            MarkdownModule.forRoot({
                loader: HttpClient,
                sanitize: SecurityContext.NONE,
            }),
        ),
        ...APP_PROVIDERS,
        ...provideTaiga(),
    ],
};
