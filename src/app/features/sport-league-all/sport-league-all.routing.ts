import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportLeagueAllComponent } from 'src/app/features/sport-league-all/sport-league-all.component';

const routes: Routes = [
    {
        path: '',
        component: SportLeagueAllComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SportLeagueAllRoutingModule { }