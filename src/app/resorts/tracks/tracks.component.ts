import { Track } from './../../model/track';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  @Input() tracks: Track[];

  @Output() sort = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSortChange(value: string){
    this.sort.emit(value)
  }

}
