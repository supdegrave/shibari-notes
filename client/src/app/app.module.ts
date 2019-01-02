import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { TieViewComponent } from './views/tie-view/tie-view.component';
import { TiesViewComponent } from './views/ties-view/ties-view.component';
import { EditableDirective } from './directives/editable.directive';

@NgModule({
    declarations: [
        AppComponent,
        LoginViewComponent,
        HomeViewComponent,
        TieViewComponent,
        TiesViewComponent,
        EditableDirective
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
