import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';
import {
    TuiAlertModule,
    TuiDialogModule,
    TuiLinkModule,
    TuiModeModule,
    TuiRootModule,
} from '@taiga-ui/core';
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
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            sanitize: SecurityContext.NONE,
        }),
        TuiDocMainModule,
        TuiLinkModule,
        TuiModeModule,
    ],
    declarations: [AppComponent],
    providers: [APP_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
