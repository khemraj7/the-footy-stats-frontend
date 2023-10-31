import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teamStats/:id',
    component: TeamDetailsComponent
  },

];

@NgModule({
  declarations: [
    HomeComponent,
    TeamDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
