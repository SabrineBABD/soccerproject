import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matchUrl="http://localhost:3000/matches"

  constructor( private bostagi:HttpClient) { }

  addMatch(match:any){
    console.log("raniii wselet l service",match);
    return this.bostagi.post<{message:any}>(this.matchUrl,match)
  }

  getAllMatches(){
    return this.bostagi.get<{matches:any}>(this.matchUrl)
  }

  getMatchById(id:any){
    // http://localhost:3000/matches/5
    return this.bostagi.get<{match:any}>(`${this.matchUrl}/${id}`)
  }

  updateMatch(match:any){
    return this.bostagi.put(`${this.matchUrl}/${match._id}`,match)
  }
  
  deleteMatch(id:any){
    return this.bostagi.delete<{message:any}>(`${this.matchUrl}/${id}`)
  }

}
