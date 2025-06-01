import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiAlert, TuiDialog, TuiLink, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {MarkdownModule} from 'ngx-markdown';

import {AppComponent} from './app.component';
import {APP_PROVIDERS} from './app.providers';
import {AppRoutingModule} from './app.routes';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'demo',
        }),
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiRoot,
        TuiDialog,
        TuiAlert,
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            sanitize: SecurityContext.NONE,
        }),
        ...TuiAddonDoc,
        TuiLink,
    ],
    declarations: [AppComponent],
    providers: [APP_PROVIDERS, NG_EVENT_PLUGINS],
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
