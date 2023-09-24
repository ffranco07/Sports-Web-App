import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SportLeagueAllRoutingModule } from 'src/app/features/sport-league-all/sport-league-all.routing';
import { SportLeagueAllComponent } from './sport-league-all.component';

@NgModule({
  imports: [
    CommonModule,
    SportLeagueAllRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    PipesModule
  ],
  declarations: [
    SportLeagueAllComponent
  ]
})
export class SportLeagueAllModule { }