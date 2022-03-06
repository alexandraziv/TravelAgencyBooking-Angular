import { ResortService } from './../../service/resort.service';
import { SkiPass } from './../../model/skipass';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from 'src/app/model/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.css']
})
export class SkipassComponent implements OnInit {

  @Input() skipass: SkiPass[];

  @Input() resort_id: number;

  modelFrom: NgbDateStruct;
  modelTo: NgbDateStruct;

  reservation: Reservation = new Reservation();
  price: number;

  constructor(private service: ResortService, private router: Router) { }

  ngOnInit(): void {

  }

  setPrice(){
    if(this.reservation.from || this.reservation.to){
      this.price = null;
    }

    let razlika = this.reservation.calculateDateDiff();

    if( razlika < 0 || razlika > 7){
      this.price = null;
    } else {
      for(let i in this.skipass){
        if(this.skipass[i].duration == razlika){
          this.price = this.skipass[i].price;
          break;
        }
      }
    }
  }

  onSubmit(){
    if(!this.reservation.from || !this.reservation.to){
      alert("Select both dates!")
    }

    let razlika = this.reservation.calculateDateDiff();

    if( razlika < 0 || razlika > 7){
      alert("Please select valid dates. Reservations are limited to 7 days!")
    } else {
      this.service.postReservation(this.resort_id, this.reservation).subscribe(
        x => {alert("Succesfully!")}
      )
    }
    this.router.navigate(['/home'])
  }
}
