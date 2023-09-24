import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { HeaderBreadCrumbModule } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SportLeagueRoutingModule } from 'src/app/features/sport-league/sport-league.routing';
import { SportLeagueComponent } from './sport-league.component';

@NgModule({
  imports: [
    CommonModule,
    SportLeagueRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    PipesModule
  ],
  declarations: [
    SportLeagueComponent
  ]
})
export class SportLeagueModule { }