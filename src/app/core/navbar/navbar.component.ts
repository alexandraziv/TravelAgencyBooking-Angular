import { Resort } from './../../model/resort';
import { ResortService } from './../../service/resort.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  resorts: Resort[];

  constructor(private service: ResortService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.service.getAllResorts().subscribe(
      x=> { this.resorts = x }
    )
  }

}
