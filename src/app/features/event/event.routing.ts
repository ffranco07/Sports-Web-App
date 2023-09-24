import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from 'src/app/features/event/event.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'event-list'
    },
    {
        path: 'event-list',
        component: EventComponent,
        loadChildren: () => import('src/app/features/event/event-list/event-list.module').then(m => m.EventListModule)
    },
    {
        path: 'event-detail',
        component: EventComponent,
        loadChildren: () => import('src/app/features/event/event-detail/event-detail.module').then(m => m.EventDetailModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventRoutingModule { }