import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css']
})
export class TablePlayerComponent implements OnInit {

  players:any=[]
  constructor( private pService:PlayersService) { }

  ngOnInit(): void {
    this.getAllPlayeres()
  }

  getAllPlayeres(){
    this.pService.getAllPlayers().subscribe((res)=>{
      this.players=res.data
      
    })
  }
}
