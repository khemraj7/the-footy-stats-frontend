import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import reportJsonData from './progress.json'
import { ScriptService } from 'src/app/service/script.service';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit, AfterViewInit {
  reprtJson: any = reportJsonData
  array = [{
    'goal': 'CAF Champions League',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'CAF Champions League',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'CAF Champions League',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'CAF Champions League',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }]

  array2 = [{
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Super Liga',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }]
  array3 = [{
    'goal': 'Primera Divisió',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Primera Divisió',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  },
  {
    'goal': 'Primera Divisió',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Primera Divisió',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }]

  array4 = [{
    'goal': 'Girabola',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },
  {
    'goal': 'Girabola',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'In Progress'

  }]

  array5 = [{
    'goal': 'Ligue 1',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }]

  array6 = [{
    'goal': 'Torneo Regional Federal Amateur',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }, {
    'goal': 'Torneo Regional Federal Amateur',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }, {
    'goal': 'Torneo Regional Federal Amateur',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }, {
    'goal': 'Torneo Regional Federal Amateur',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }, {
    'goal': 'Torneo Regional Federal Amateur',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  }, {
    'goal': 'Torneo Regional Federal Amateur',
    'teams': '100%',
    'play': '2022-2023',
    'number': 'Completed'

  },]
  loader: boolean = false;
  teams: any;
  constructor(private renderer: Renderer2,
    private scriptService: ScriptService, private api :  ApiService, private http :HttpClient) { }
  ngOnInit(): void {
    this.loader = true
this.getAllLeagues()
    setTimeout(() => {
      this.loader = false
    }, 2000);


  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.standing_leagues()
      this.top_scorer()
    }, 2000);



  }


  top_scorer() {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, "https://widgets.sportmonks.com/js/league/topscorers.js");

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);

    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }

    // Get the element by its class name
    var elements = document.getElementsByClassName("smw-text-xl");

    // Loop through all elements with the specified class
    for (var i = 0;i < elements.length;i++) {
      // Change the text content for each element
      elements[i].textContent = "the footy stats";
    }
  }

  standing_leagues() {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, "https://widgets.sportmonks.com/js/league/standings.js");

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);

    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }

  getAllLeagues(){
    // this.api.getAllLeague('league').subscribe((res)=>{
    //   console.log('res', res)
    //   this.teams = res['data'].leagues['data']
    // })

    this.http.get("http://localhost:3000/api/v1/league/1").subscribe(res=>{
      console.log(res)
      this.teams = res['data'].leagues['data']
    })
  }

}

