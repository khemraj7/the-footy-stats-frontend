import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesComponent } from './leagues.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { LeagueFixtureComponent } from './league-fixture/league-fixture.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';



const routes: Routes = [
  {
    path: '',
    component: LeaguesComponent
  },
  {
    path: 'leagues/:id',
    component: LeagueFixtureComponent
  },
  {
    path: 'season/:id',
    component: SeasonDetailsComponent
  },

];

@NgModule({
  declarations: [
    LeaguesComponent,
    LeagueFixtureComponent,
    SeasonDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class LeaguesModule { }
