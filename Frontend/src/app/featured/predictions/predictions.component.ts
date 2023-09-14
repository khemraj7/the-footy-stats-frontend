import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit{
array=[{
  'goal':'Over 2.5 Goals',
  'teams' :'Kolstad vs Resenborg II',
  'play':'To Play',
  'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

},
{
'goal':'Over 2.5 Goals',
'teams' :'Kolstad vs Resenborg II',
'play':'To Play',
'number' :1.40

}];

percentage=['0%','1%'];
points=[0,1];
avgGoals=[2,4];
  loader: boolean=false;
  predictionData: any;


constructor(private commonService:CommonService){
  // for (let i = 0; i <=25; i++) {
  //   this.array.push('goals');
  // }
}
ngOnInit(): void {
  this.predictionDataOfLeagues()
  this.loader=true
  setTimeout(() => {
    this.loader = false
  }, 1000);
}

predictionDataOfLeagues(){
  this.commonService.predictionDataOfLeagues().subscribe((res)=>{
    console.log(res,"Data");
    this.predictionData = res.data.leagues.data;
    
  })
}
}
