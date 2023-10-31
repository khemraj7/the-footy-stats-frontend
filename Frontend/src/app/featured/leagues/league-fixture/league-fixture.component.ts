import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-league-fixture',
  templateUrl: './league-fixture.component.html',
  styleUrls: ['./league-fixture.component.scss'],
})
export class LeagueFixtureComponent implements OnInit {
  league_id: any;
  leagueData: any;
  loader: boolean = true;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.league_id = params['id'];
      this.getDataWithId(this.league_id);
    });
  }

  getDataWithId(id) {
    this.api.get(`/league/leagues/${id}`, {}).subscribe((res) => {
      console.log('upcoming fixture', res);
      // this.leagueData =  res['data'].leagues['data'].filter((data)=> data.id == this.league_id)[0]
      this.leagueData = res['data'].leagues['data'];
      console.log('this.leagueData', this.leagueData);
      if (this.leagueData) {
        this.loader = false;
      }
    });
  }


}
