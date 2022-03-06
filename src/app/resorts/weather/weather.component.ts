import { Weather } from './../../model/weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() weather: Weather[];

  constructor() { }

  ngOnInit(): void {
  }

}
