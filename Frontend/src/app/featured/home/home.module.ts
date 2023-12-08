import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { NgChartsModule } from 'ng2-charts';
import { TeamDataComponent } from './team-data/team-data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teamStats/:id',
    component: TeamDetailsComponent
  },
  {
    path: 'teamdata/:id',
    component: TeamDataComponent
  },

];

@NgModule({
  declarations: [
    HomeComponent,
    TeamDetailsComponent,
    TeamDataComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MaterialModule,
    NgChartsModule
  ],
  exports :[
    TeamDataComponent
  ]
})
export class HomeModule { }
