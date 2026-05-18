import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import { TuiAlert, TuiDialog, TuiLink, TuiRoot, provideTaiga } from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';

import {AppComponent} from './app.component';
import {APP_PROVIDERS} from './app.providers';
import {AppRoutingModule} from './app.routes';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({appId: 'demo'}),
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            sanitize: SecurityContext.NONE,
        }),
        TuiAlert,
        TuiDialog,
        TuiLink,
        TuiRoot,
        ...TuiAddonDoc,
    ],
    declarations: [AppComponent],
    providers: [APP_PROVIDERS, provideTaiga()],
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
