import { SkiPass } from './../../model/skipass';
import { Weather } from './../../model/weather';
import { Track } from './../../model/track';
import { OneResort } from './../../model/oneResort';
import { Resort } from './../../model/resort';
import { ResortService } from './../../service/resort.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit {

  parameters = {
    sort: "rating",
    sortDirection: "desc"
  }

  resort: OneResort;
  tracks: Track[];
  weather: Weather[];
  skipass: SkiPass[];
  id: number;

  active: 1;

  constructor(private service: ResortService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      x =>{
        this.id = x['id'];    
        this.getResort();
        this.getTracks();
        this.getWeather();
        this.getSkiPass();
      }
    )
  }

  getResort(){
    this.service.getOneResorts(this.id).subscribe(
      x=>{ this.resort = x; }
    )
  }

  getTracks(){
    this.service.getTracks(this.id, this.parameters).subscribe(
      x=> { this.tracks = x; }
    )
  }

  onSort(s: string){
    this.parameters.sort = s;
    this.getTracks()
  }

  getWeather(){
    this.service.getWeather(this.id).subscribe(
      x=>{ this.weather = x; }
    )
  }

  getSkiPass(){
    this.service.getSkiPass(this.id).subscribe(
      x=> { this.skipass = x;}
    )
  }

}
