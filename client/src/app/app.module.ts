import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { TieViewComponent } from './views/tie-view/tie-view.component';
import { TiesViewComponent } from './views/ties-view/ties-view.component';
import { RoutingModule } from './routing/routing.module';

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
        RoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
