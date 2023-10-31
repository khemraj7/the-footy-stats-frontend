import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  checkEvent: string = 'Today';
  panelOpenState = false;
  loader: boolean = false;
  customCssClass: string = 'abhi';
  playersStats :  any =[]
  teamStatistics :  any =[]
  days: any = [
    'Yesterday',
    'Today',
    'Tomorrow',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
  ];
  allFixtures: any = [];
  scoreData: any = [1, 1, 1, 1];
  scoreData1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  leaguesData: any = [
    {
      title: 'Active Leagues',
      lists: [
        { line1: 'U21 League', image: 'line1' },
        { line2: 'Ligue 1', image: 'line2' },
        { line3: 'Algeria Cup', image: 'line3' },
        { line4: 'Primera Division', image: 'line4' },
        { line5: 'Copa Argentina', image: 'line5' },
        { line6: 'Campeonato de Futbol Femenino', image: 'line6' },
      ],
    },
    {
      title: 'Featured Matches',
      lists: [
        { line1: 'U21 League' },
        { line2: 'Ligue 1' },
        { line3: 'Algeria Cup' },
        { line4: 'Primera Division' },
        { line5: 'Copa Argentina' },
        { line6: 'Campeonato de Futbol Femenino' },
      ],
    },
    {
      title: 'Featured Teams',
      lists: [
        { line1: 'U21 League' },
        { line2: 'Ligue 1' },
        { line3: 'Algeria Cup' },
        { line4: 'Primera Division' },
        { line5: 'Copa Argentina' },
        { line6: 'Campeonato de Futbol Femenino' },
      ],
    },
    {
      title: 'Weekend Fixtures',
      lists: [
        { line1: 'U21 League', image: 'line1' },
        { line2: 'Ligue 1', image: 'line2' },
        { line3: 'Algeria Cup', image: 'line3' },
        { line4: 'Primera Division', image: 'line4' },
        { line5: 'Copa Argentina', image: 'line5' },
        { line6: 'Campeonato de Futbol Femenino', image: 'line6' },
      ],
    },
  ];
  leaguesData1: any = [
    {
      title: 'Active Leagues',
      lists: [
        { line1: 'U21 League', image: 'line1' },
        { line2: 'Ligue 1', image: 'line2' },
        { line3: 'Algeria Cup', image: 'line3' },
        { line4: 'Primera Division', image: 'line4' },
        { line5: 'Copa Argentina', image: 'line5' },
        { line6: 'Campeonato de Futbol Femenino', image: 'line6' },
      ],
    },
    // {
    //   title: 'Featured Matches`',
    //   lists: [
    //     { line1: 'U21 League', image: 'line1' },
    //     { line2: 'Ligue 1', image: 'line2' },
    //     { line3: 'Algeria Cup', image: 'line3' },
    //     { line4: 'Primera Division', image: 'line4' },
    //     { line5: 'Copa Argentina', image: 'line5' },
    //     { line6: 'Campeonato de Futbol Femenino', image: 'line6' },
    //   ],
    // },
  ];
  

  dataLength: any;

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.loader = true;
    this.getAllFixture(new Date());
    this.getAllPlayersStats()
    this.getAllTeamStats()
    setTimeout(() => {
      this.loader = false;

    }, 2000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.nextFixture()
      // this.liveScore()
      // this.completedFixture()
      // this.playerStats()
      // this.teamStats()
    }, 2000);
  }

  nextFixture() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      'https://widgets.sportmonks.com/js/team/nextFixture.js'
    );

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    };
  }

  liveScore() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      'https://widgets.sportmonks.com/js/livescore/livescore.js'
    );

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    };
  }

  completedFixture() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      'https://widgets.sportmonks.com/js/league/standings.js'
    );

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    };
  }

  playerStats() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      'https://widgets.sportmonks.com/js/league/topscorers.js'
    );

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    };
  }
  teamStats() {
    const scriptElement = this.scriptService.loadJsScript(
      this.renderer,
      'https://widgets.sportmonks.com/js/league/teamStats.js'
    );

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);
    };
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    };
  }
  takeEvent(event: any) {
    this.checkEvent = event.tab.textLabel;
  }

  getAllFixture(date) {
    try {
      const d = new Date(date).toLocaleDateString();

      const formatDate = d.split('/');
      const newDate = `${formatDate[2]}-${formatDate[0]}-${formatDate[1]}`;

      this.api
        .post(`/league/fixture/home/`, { date: newDate })
        .subscribe((res) => {
          // console.log('teamDetail', res);

          if (res && res['data']) {
            this.allFixtures = res['data']['fixturesByDate']['data'];

            this.allFixtures.forEach((item) => {
              item['team'] = item.name.split('vs');
            });

            console.log(this.allFixtures);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  getAllPlayersStats() {
    this.api.get(`/statistics/players/all`, {}).subscribe((res) => {
      console.log('players', res);
      // this.getAllTeamStats()
      this.playersStats =  res['data']['leagues']['data']
    });
  }

  getAllTeamStats() {
    this.api.get(`/statistics/teams/all`, {}).subscribe((res) => {
      console.log('teams', res);
      this.teamStatistics =res['data']['leagues']['data']
    });
  }

  data: any[] = [
    { name: 'Element 1', expanded: false },
    { name: 'Element 2', expanded: false },
    // Add more data rows as needed
  ];

  toggleRow(item: any): void {
    console.log(item)
    this.data.forEach(element => {
      if(element.name == item.name){
        item.expanded = !item.expanded;
      }
    });
    console.log(this.data)
 
  }


  getTeamStats(id){ 

    this.api.post(`/league/teamStats/${id}`,{} ).subscribe((res) => {
    
    });
  }


  onHover(teamId , season_id) {

  
    this.api.post(`/league/teamStats/${teamId}`, {seasonId :season_id }).subscribe((res) => {
      console.log('teamDetail', res);
   
    });
  }
}
