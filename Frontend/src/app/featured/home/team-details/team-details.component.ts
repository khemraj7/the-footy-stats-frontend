import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {
  teamId: any;
  league_id: any;
  leaguesData: any = {};
  teamsData: any = {};
  seasonData: any;
  details: any = [];

  h: any = [
    {
      name: 'Hello',
    },
  ];
  countAndAvergae: any;
  playerScoreData: any;
  teamShotsData: any;
  yellowCardsData: any;
  concedeData: any;
  UpcomingFixtures: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamId = params['id'];
    });

    this.route.queryParams.subscribe((params) => {
      this.league_id = params['league_id'];

      this.getTeamDetails(this.teamId, params['season_id']);

      this.getLeagueDetails(this.league_id);
      this.getSeasonDetails(params['season_id']);
    });
  }

  // ngAfterViewInit(): void {

  // }

  getTeamDetails(teamId, season_id) {
    debugger
    console.log(teamId,"tea,mIddddddddd");
    const body = {
      seasonId: season_id,
    };
    this.api.post(`/league/teamStats/${teamId}`, body).subscribe((res) => {
      console.log('teamDetail', res);
      this.teamsData = res['data']['teamStats']['data'];

      const filteredObjects = this.teamsData['statistics'][0]['details'].filter(
        (obj) =>
          obj.value.hasOwnProperty('away') &&
          obj.value.hasOwnProperty('home') &&
          obj.value.hasOwnProperty('all')
      );
      const playerScore = this.teamsData['statistics'][0]['details'].filter(
        (obj) =>
          obj.value.hasOwnProperty('missed') &&
          obj.value.hasOwnProperty('scored') &&
          obj.value.hasOwnProperty('conversion_rate')
      );
      const newFilter = this.teamsData['statistics'][0]['details'].filter(
        (obj) =>
          obj.value.hasOwnProperty('count') &&
          obj.value.hasOwnProperty('average')
      );
      // this.details.length = 10

      const teamShots = this.teamsData['statistics'][0]['details'].filter(
        (obj) =>
          obj.value.hasOwnProperty('total') &&
          obj.value.hasOwnProperty('on_target') &&
          obj.value.hasOwnProperty('off_target') &&
          obj.value.hasOwnProperty('inside_box') &&
          obj.value.hasOwnProperty('outside_box') &&
          obj.value.hasOwnProperty('blocked') &&
          obj.value.hasOwnProperty('average')
      );
      const Yellowcards = this.teamsData['statistics'][0]['details'].filter(
        (obj) =>
          obj.value.hasOwnProperty('count') &&
          obj.value.hasOwnProperty('player_id') &&
          obj.value.hasOwnProperty('player_name') &&
          obj.value.hasOwnProperty('coach') &&
          obj.value.hasOwnProperty('coach_average') &&
          obj.value.hasOwnProperty('average')
      );

      const concede = this.teamsData['statistics'][0]['details'].filter(
        (obj) =>
        obj.value.hasOwnProperty('0-15') &&
          obj.value.hasOwnProperty('15-30') &&
          obj.value.hasOwnProperty('15-30') &&
          obj.value.hasOwnProperty('30-45') &&
          obj.value.hasOwnProperty('45-60') &&
          obj.value.hasOwnProperty('60-75') &&
          obj.value.hasOwnProperty('75-90')
      );
    
      this.details = filteredObjects;
      this.countAndAvergae = newFilter;
      this.playerScoreData = playerScore[0];
      this.teamShotsData = teamShots[0];
      this.yellowCardsData = Yellowcards;
      this.concedeData =concede
      console.log(
        'Details: ',
        this.details.length,
        filteredObjects,
        newFilter,
        playerScore,
        teamShots,
        Yellowcards,
        concede
      );
    });
  }

  // async getTeamDetails(teamId, season_id) {
  //   const body = {
  //     seasonId: season_id,
  //   };

  //   try {
  //     const res = await this.http.post(`/league/teamStats/${teamId}`, body).toPromise();
  //     console.log('teamDetail', res);
  //     this.teamsData = res['data']['teamStats']['data'];
  //     this.details = this.teamsData['statistics'][0]['details'];
  //     console.log('Details: ', this.details);
  //   } catch (error) {
  //     console.error('Error fetching team details:', error);
  //   }
  // }

  getLeagueDetails(leagueId) {
    this.api.get(`/league/leagues/${leagueId}`, {}).subscribe((res) => {
      console.log('leagues Details', res);
      this.leaguesData = res['data']['leagues']['data'];
     const filter =  []

     this.leaguesData['upcoming'].forEach(element => {
      if(element.name.includes(this.teamsData['name'])){
        filter.push(element)
      }
     });
     filter.forEach(ele=>{
      ele['name'] = ele['name'].split("vs")
     })
     filter.length = 2
     console.log('filter:::::::::::', filter)
      this.leaguesData['upcoming'] =  this.leaguesData['upcoming'].length =2
      if(filter){
        this.UpcomingFixtures = filter
      }
    });
  }

  getSeasonDetails(seasonId) {
    this.api.get(`/league/season/${seasonId}`, {}).subscribe((res) => {
      // console.log('leagues Details', res);
      this.seasonData = res['data']['seasonDetails']['data'];
    });
  }

  public chartdata = {
    "0-15": {
      "count": 9,
      "percentage": 19.57
    },
    "15-30": {
      "count": 6,
      "percentage": 13.04
    },
    "30-45": {
      "count": 10,
      "percentage": 21.74
    },
    "45-60": {
      "count": 5,
      "percentage": 10.87
    },
    "60-75": {
      "count": 4,
      "percentage": 8.7
    },
    "75-90": {
      "count": 12,
      "percentage": 26.09
    }
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true, // Set the value you need (true/false)
    }
  };
  

  public barChartLabels = Object.keys(this.chartdata);
  public barChartLegend = true;

  public barChartData = [
    {
      data: Object.values(this.chartdata).map(item => item.count),
      label: 'Count',
      type: 'bar' // Specify the chart type here
    }
  ];

  // Replace this with your actual data from your "value" object

}
