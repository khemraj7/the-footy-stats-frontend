import { Component, OnInit } from '@angular/core';
import reportJsonData from './progress.json'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit{
  reprtJson : any = reportJsonData
  array=[{
    'goal':'CAF Champions League',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },
  {
  'goal':'CAF Champions League',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'CAF Champions League',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'CAF Champions League',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  }]

  array2=[{
    'goal':'Super Liga',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Super Liga',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  }]
  array3=[{
    'goal':'Primera Divisió',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },
  {
  'goal':'Primera Divisió',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  },
  {
  'goal':'Primera Divisió',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  },
  {
  'goal':'Primera Divisió',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'Completed'
  
  }]

  array4=[{
    'goal':'Girabola',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },
  {
  'goal':'Girabola',
  'teams' :'100%',
  'play':'2022-2023',
  'number' :'In Progress'
  
  }]

  array5=[{
    'goal':'Ligue 1',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  }]

  array6=[{
    'goal':'Torneo Regional Federal Amateur',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },{
    'goal':'Torneo Regional Federal Amateur',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },{
    'goal':'Torneo Regional Federal Amateur',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },{
    'goal':'Torneo Regional Federal Amateur',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },{
    'goal':'Torneo Regional Federal Amateur',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },{
    'goal':'Torneo Regional Federal Amateur',
    'teams' :'100%',
    'play':'2022-2023',
    'number' :'Completed'
  
  },]
  loader: boolean=false;

  ngOnInit(): void {
    this.loader=true

    setTimeout(() => {
      this.loader = false
    }, 1000);
  }
}
