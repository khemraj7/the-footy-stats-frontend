import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  statsArray: any = [ 'Both Teams to Score (BTTS)', 'Clean Sheets', 'xG', 'Correct Scores', '1st Half and 2nd Half Goals', 'Scored in Both Halves', 'Over 2.5 Goals', 'Corner Stats', 'Win Draw Win', 'Penalties', 'Offsides', 'Under 2.5 Goals', 'Yellow and Red Cards', 'Home Advantage' ]

  cardsCount: any = [1,2,3,4,5,6,7,8]

  statsCardArr: any = [
    {
      heading: 'Most Offsides by Team',
      playerName: 'Erling Haaland',
      flag: '../../../../assets/stats/Frame 2056.svg',
      average: '79%'
    },
    {
      heading: 'Most Offsides by Team',
      playerName: 'Harry Kane',
      flag: '../../../../assets/stats/Frame 29.svg',
      average: '78%'
    },
    {
      heading: 'Most Offsides by Team',
      playerName: 'Kylian Mbappé',
      flag: '../../../../assets/stats/Frame 25.svg',
      average: '77%'
    },
    {
      heading: 'Most Offsides by Team',
      playerName: 'Alexandre Lacazette',
      flag: '../../../../assets/stats/Frame 25.svg',
      average: '77%'
    },
    {
      heading: 'Most Offsides by Team',
      playerName: 'Victor James Osim',
      flag: '../../../../assets/stats/Frame 21.svg',
      average: '76%'
    },

  ]


  // leaguesData: any = [{
  //   title: 'Active Leagues',
  //   lists: [{ line1: 'U21 League' , image  : 'line1'},
  //   { line2: 'Ligue 1' ,image  : 'line2'},
  //   { line3: 'Algeria Cup', image  : 'line3', },
  //   { line4: 'Primera Division', image  : 'line4', },
  //   { line5: 'Copa Argentina', image  : 'line5', },
  //   { line6: 'Campeonato de Futbol Femenino', image  : 'line6', }]

  // },
  // {
  //   title: 'Featured Matches',
  //   lists: [{ line1: 'U21 League' },
  //   { line2: 'Ligue 1' },
  //   { line3: 'Algeria Cup' },
  //   { line4: 'Primera Division' },
  //   { line5: 'Copa Argentina' },
  //   { line6: 'Campeonato de Futbol Femenino' }]
  // }, {
  //   title: 'Featured Teams',
  //   lists: [{ line1: 'U21 League' },
  //   { line2: 'Ligue 1' },
  //   { line3: 'Algeria Cup' },
  //   { line4: 'Primera Division' },
  //   { line5: 'Copa Argentina' },
  //   { line6: 'Campeonato de Futbol Femenino' }]
  // },
  // {
  //   title: 'Weekend Fixtures',
  //   lists: [{ line1: 'U21 League' },
  //   { line2: 'Ligue 1' },
  //   { line3: 'Algeria Cup' },
  //   { line4: 'Primera Division' },
  //   { line5: 'Copa Argentina' },
  //   { line6: 'Campeonato de Futbol Femenino' }]
  // }]

  checkEvent:string="Today";
  panelOpenState = false;
  customCssClass:string='abhi';
  days: any = ['Yesterday', 'Today', 'Tomorrow', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday']
  loader: boolean=false;

  constructor() {}

  ngOnInit(): void {
    this.loader=true
    setTimeout(() => {
      this.loader = false
    }, 1000);
  }

}
