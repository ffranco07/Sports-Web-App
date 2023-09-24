import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app//app.common.module';
import { EventRoutingModule } from 'src/app/features/event/event.routing';
import { EventComponent } from 'src/app/features/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    AppCommonModule
  ],
  declarations: [
    EventComponent
  ]
})
export class EventModule { }