import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from 'src/app/features/event/event-list/event-list.component';

const routes: Routes = [
    {
        path: '',
        component: EventListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventListRoutingModule { }