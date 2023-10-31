import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss'],
})
export class SeasonDetailsComponent implements OnInit {
  season_id: any;
  seasonData: any;
  loader: boolean = true;
  teamData: boolean = false;
  teamDetail: any;
  loaderTeam: boolean = false

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.season_id = params['id'];
      this.getDataWithId(this.season_id);
    });
  }

  getDataWithId(id) {
    this.api.get(`/league/season/${id}`, {}).subscribe((res) => {
      console.log('season', res);

      this.seasonData = res['data']['seasonDetails']['data'];
      if (this.seasonData) {
        this.seasonData['teams'].forEach(element => {
          element['show'] =false
        });
        console.log('this.seasonData ', this.seasonData);
        this.loader = false;
      }
    });
  }

  onHover(teamId) {
    this.loaderTeam=! this.loaderTeam;
    console.log(teamId);

    const body ={
      seasonId : this.seasonData.id
    }
    this.api.post(`/league/teamStats/${teamId}`, body).subscribe((res) => {
      console.log('teamDetail', res);
      this.loaderTeam=false;

      this.teamDetail =res['data']['teamStats']['data']
      this.seasonData.teams.forEach(element => {
        if(element['id'] == teamId){
          element['show'] =true
        }else{
          element['show']=false
        }
      });
      if(this.teamDetail){
        this.loaderTeam=false;

      }
    });
  }

  selectedRowIndex: number = -1;

toggleRow(index: number) {
  if (this.selectedRowIndex === index) {
    this.selectedRowIndex = -1; // Collapse the row if it's already expanded
  } else {
    this.selectedRowIndex = index; // Expand the clicked row
  }
}

onPanelOpened(index: number) {
  // Add your code here to handle the panel being opened
  console.log(`Panel ${index} opened`);
  // You can perform any actions you want in response to the panel being expanded.

  setTimeout(() => {
    this.loaderTeam = false
  }, 1000);
}
}
