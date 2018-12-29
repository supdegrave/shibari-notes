import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { TieViewComponent } from './views/tie-view/tie-view.component';
import { TiesViewComponent } from './views/ties-view/ties-view.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginViewComponent,
        HomeViewComponent,
        TieViewComponent,
        TiesViewComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
