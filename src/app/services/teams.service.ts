import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamUrl="http://localhost:3000/teams"

  constructor( private bostagi:HttpClient) { }

  addTeam(team:any){
  
    return this.bostagi.post<{message:any}>(this.teamUrl,team)
  }

  getAllTeams(){
    
    return this.bostagi.get<{data:any}>(this.teamUrl)
  }

  getTeamById(id:any){
    return this.bostagi.get<{team:any}>(`${this.teamUrl}/${id}`)
  }

  updateTeam(team:any){

    return this.bostagi.put(`${this.teamUrl}/${team.id}`,team)
  }
  
  deleteTeam(id:any){
    return this.bostagi.delete<{message:any}>(`${this.teamUrl}/${id}`)
  }
  
}
