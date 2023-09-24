import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListRoutingModule } from 'src/app/features/event/event-list/event-list.routing';
import { EventListComponent } from 'src/app/features/event/event-list/event-list.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    EventListRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    EventListComponent
  ]
})
export class EventListModule { }