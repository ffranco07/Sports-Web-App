import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportFuturesAllComponent } from 'src/app/features/sport-futures-all/sport-futures-all.component';

const routes: Routes = [
    {
        path: '',
        component: SportFuturesAllComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SportFuturesAllRoutingModule { }