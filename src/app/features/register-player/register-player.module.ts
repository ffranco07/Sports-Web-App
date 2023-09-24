import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPlayerComponent } from 'src/app/features/register-player/register-player.component';
import { RegisterPlayerRoutingModule } from 'src/app/features/register-player/register-player.routing';
import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterPlayerRoutingModule,
    AppCommonModule
  ],
  declarations: [RegisterPlayerComponent]
})
export class RegisterPlayerModule { }