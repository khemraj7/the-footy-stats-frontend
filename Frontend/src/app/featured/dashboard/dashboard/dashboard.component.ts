import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private commonService:CommonService){}
  array=[{
    'goal':'Over 2.5 Goals',
    'teams' :'Kolstad vs Resenborg II',
    'play':'To Play',
    'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  },
  {
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40
  
  }];
  
  percentage=['0%','1%'];
  points=[0,1];
  avgGoals=[2,4];

  ngOnInit(): void {
    // this.commonService.dashboardActive.next(true);
  }
  // ngOnDestroy(): void {
  //   this.commonService.dashboardActive.next(false);
  // }
}
