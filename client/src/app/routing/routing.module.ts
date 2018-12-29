import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from '../views/home-view/home-view.component';
import { LoginViewComponent } from '../views/login-view/login-view.component';
import { TieViewComponent } from '../views/tie-view/tie-view.component';
import { TiesViewComponent } from '../views/ties-view/ties-view.component';

const PATHS = {
    HOME: '',
    LOGIN: 'login',
    TIES: 'ties',
    TIES_WITH_ID: 'ties/:id',
    NEW_TIE: 'ties/new',
};

const routes: Routes = [
    {
        path: PATHS.LOGIN,
        component: LoginViewComponent
    },
    {
        path: PATHS.HOME,
        component: HomeViewComponent,
        // runGuardsAndResolvers: 'always',
        // canActivate: [AuthGuardService],
    },
    {
        path: PATHS.TIES,
        component: TiesViewComponent,
        // canActivate: [AuthGuardService],
    },
    {
        path: PATHS.TIES_WITH_ID,
        component: TieViewComponent,
        // canActivate: [AuthGuardService],
    },
    {
        path: PATHS.NEW_TIE,
        component: TieViewComponent,
        // canActivate: [AuthGuardService],
    },
    {
        path: '**',
        redirectTo: PATHS.LOGIN,
        pathMatch: 'full'
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    // providers: [AuthGuardService]
})
export class RoutingModule { }
