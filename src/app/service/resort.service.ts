import { Reservation } from './../model/reservation';
import { SkiPass } from './../model/skipass';
import { Weather } from './../model/weather';
import { OneResort } from './../model/oneResort';
import { Resort } from './../model/resort';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Track } from '../model/track';

const resortsUrl = "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class ResortService {

  constructor(private http: HttpClient) { }

  getAllResorts():Observable<Resort[]>{
    return this.http.get(resortsUrl).pipe(map(
      (elem : any) => {
      return elem.map( x=> { return new Resort(x)})
      }
    ));
  }

  getOneResorts(id:number):Observable<OneResort>{
    return this.http.get(resortsUrl + "/" + id).pipe(map(
      x=> { return new OneResort(x) }));
  }

  getTracks(id:number,parameters?:any):Observable<Track[]>{
    let queryParams = {};
    if(parameters){
      queryParams = {
        params: new HttpParams()
        .set("sort", parameters.sort || "")
        .set("sortDirection", parameters.sortDirection || "")
      }
    }
    return this.http.get(resortsUrl + "/" + id + "/tracks", queryParams).pipe(map(
      (elem : any) => {
        return elem.map( x=> { return new Track(x)})
        }
      ));
  }

  getWeather(id:number,):Observable<Weather[]>{
    return this.http.get(resortsUrl + "/" + id + "/weather").pipe(map(
      (elem : any) => {
        return elem.map( x=> { return new Weather(x)})
        }
      ));
  }

  getSkiPass(id:number,):Observable<SkiPass[]>{
    return this.http.get(resortsUrl + "/" + id + "/skipass").pipe(map(
      (elem : any) => {
        return elem.map( x=> { return new SkiPass(x)})
        }
      ));
  }

  postReservation(id: number, newReservation: Reservation):Observable<Reservation>{
    return this.http.post(resortsUrl + "/" + id + "/skipass", newReservation).pipe(map(
      x=> { return new Reservation(x)}
    ))
  }
}
