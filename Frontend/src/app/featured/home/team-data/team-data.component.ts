import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-team-data',
  templateUrl: './team-data.component.html',
  styleUrls: ['./team-data.component.scss']
})
export class TeamDataComponent implements OnInit , AfterViewInit{
  teamId: any;
  teamId2: any;
  teams1Data: any;
  teams2Data: any;
  details: any;
  teamShotsData: any;
  countAndAvergae: any;
  playerScoreData: any;
  yellowCardsData: any;
  concedeData: any;
  data11:any =[]
  dataObj: any ={};
  teamWins :any =[]

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    debugger
    this.route.params.subscribe((params) => {
      this.teamId = params['id'];

    });
    this.route.queryParams.subscribe((params) => {
     this.teamId2= params['teamId2'];
    });
    // this.getTeam1Data(this.teamId);
   

  }

  ngAfterViewInit(): void {
    this.getTeam1Data(this.teamId);

    this.getTeam2Data(this.teamId2);
  }


  getTeam1Data(teamId){
  console.log('teamId', teamId)
    this.api.get(`/statistics/team/${teamId}`, {}).subscribe((res)=>{

      // this.dataObj = {}
      
      if(res && res.data){ res.data.leagues.data.statistics.forEach((stat) => {
          stat.details.forEach((item) => {
              let key=''
              if (item.type.code.toLowerCase().includes('team-wins')) {
                 key='team-wins'
              }
              if(item.type.code.toLowerCase().includes('scoring-minutes')){
                  key='scoring-minutes'
              }
              if(item.type.code.toLowerCase().includes("penalties")){
                  key='penalties'
              }
              if(item.type.code.toLowerCase().includes("goals")){
                  key='goals'
              }
              if(item.type.code.toLowerCase().includes("shots")){
                  key='shots'
              }
              if(item.type.code.toLowerCase().includes("yellowcards")){
                  key='yellowcards'
              }
              if(this.dataObj[key]){
                  this.dataObj[key].push({
                      ...item.value,
                      name:item.type.name+`(${stat.season_id})`
                  })
              }else{
                  this.dataObj[key]=[{
                      ...item.value,
                      name:item.type.name+`(${stat.season_id})`
                  }]
              }
          })
      })
      
      console.log(this.dataObj,"hahahahahahaha")
      this.teamWins = this.dataObj['team-wins']
      console.log(this.teamWins[0]['all']['count'])
    }

  })
}
getTeam2Data(teamId2){``
  // debugger
  this.api.get(`/statistics/team/${teamId2}`, {}).subscribe((res)=>{

    if(res && res.data) {this.teams2Data = res['data']['leagues']['data'];}

  })
}
getKeys(obj: any): string[] {
  return obj ? Object.keys(obj) : [];
}
}

