import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SnakeScores } from "../models/snake-scores";

@Injectable()
export class SnakesApiService {

   constructor(
   private http: HttpClient  
   ) {

}
private options = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    }),
  };

  public getScores() {
      return this.http.get<SnakeScores[]>("http://scores.chrum.it/snake", this.options )
  }
      }
    