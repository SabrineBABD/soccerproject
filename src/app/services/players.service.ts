import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl="http://localhost:3000/players"

  constructor( private bostagi:HttpClient) { }

  addPlayer(player:any , image:File){
  
    const formData= new FormData()
    formData.append('image',image)
    formData.append('name',player.name)
    formData.append('number',player.number)
    formData.append('post',player.post)
    formData.append('teamId',player.teamId)
 
    return this.bostagi.post<{message:any}>(this.playerUrl,formData)
  }

  getAllPlayers(){
    
    return this.bostagi.get<{data:any}>(this.playerUrl)
  }

  getPlayerById(id:any){
    // http://localhost:3000/players/5
    return this.bostagi.get<{players:any}>(`${this.playerUrl}/${id}`)
  }

  updatePlayer(match:any){
        // http://localhost:3000/players/5 , object player

    return this.bostagi.put(`${this.playerUrl}/${match.id}`,match)
  }
  
  deletePlayer(id:any){
    //http://localhost:3000/players/5
    return this.bostagi.delete<{message:any}>(`${this.playerUrl}/${id}`)
  }

  filterPlayerByNumber(data:any){
    return this.bostagi.post<{players:any}>(`${this.playerUrl}/filter`,data)

  }
}
