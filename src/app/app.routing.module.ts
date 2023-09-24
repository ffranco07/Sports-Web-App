import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/features/register-player/register-player.module').then(m => m.RegisterPlayerModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'sport-league-all/:id',
            loadChildren: () => import('src/app/features/sport-league-all/sport-league-all.module').then(m => m.SportLeagueAllModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'sport-league/:id',
            loadChildren: () => import('src/app/features/sport-league/sport-league.module').then(m => m.SportLeagueModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'event',
            loadChildren: () => import('src/app/features/event/event.module').then(m => m.EventModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: 'error',
        component: ErrorComponent,
        //loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
