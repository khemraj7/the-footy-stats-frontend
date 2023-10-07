import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import profitable from './profitable.json'
import reportJsonData from './progressReport.json'
import { ScriptService } from 'src/app/service/script.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit, AfterViewInit {
  checkEvent: string = "Today";

  cardArray: any = profitable;

  reprtJson: any = reportJsonData
  reportData: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  loader: boolean = false;

  customCssClass: string = 'abhi';
  constructor(private renderer: Renderer2,
    private scriptService: ScriptService) { }

  ngOnInit(): void {
    this.loader = true
    setTimeout(() => {
      this.loader = false
    }, 1000);

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.matchStatus()
      this.scheduleStats()
      this.upcomingMatch()
    }, 1500);

  }

  scheduleStats() {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, "https://widgets.sportmonks.com/js/league/schedule.js");

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);

    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }

  matchStatus() {

    const scriptElement = this.scriptService.loadJsScript(this.renderer, "https://widgets.sportmonks.com/js/livescore/match-centre.js");

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);

    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }

  upcomingMatch() {
    const scriptElement = this.scriptService.loadJsScript(this.renderer, "https://widgets.sportmonks.com/js/team/upcoming.js");

    scriptElement.onload = () => {
      console.log('Google API Script loaded', scriptElement);

    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }
  }
  takeEvent(event: any) {
    this.checkEvent = event.tab.textLabel
  }



}
