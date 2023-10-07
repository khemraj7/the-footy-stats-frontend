import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptService } from './service/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'the-footy-stats';
  constructor() { }


  ngOnInit() {


  }


}
