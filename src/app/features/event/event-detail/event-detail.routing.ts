import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from 'src/app/features/event/event-detail/event-detail.component';

const routes: Routes = [
    {
        path: '',
        component: EventDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventDetailRoutingModule { }