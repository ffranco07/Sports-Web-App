import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailRoutingModule } from 'src/app/features/event/event-detail/event-detail.routing';
import { EventDetailComponent } from 'src/app/features/event/event-detail/event-detail.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    EventDetailRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule
  ],
  declarations: [
    EventDetailComponent
  ]
})
export class EventDetailModule { }