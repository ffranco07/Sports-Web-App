import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportLeagueComponent } from 'src/app/features/sport-league/sport-league.component';

const routes: Routes = [
    {
        path: '',
        component: SportLeagueComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SportLeagueRoutingModule { }