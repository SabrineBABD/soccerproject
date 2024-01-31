import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-filter-player',
  templateUrl: './filter-player.component.html',
  styleUrls: ['./filter-player.component.css']
})
export class FilterPlayerComponent implements OnInit {

  filterForm !: FormGroup

  filter:any={}

  players:any=[]
  constructor( private pService:PlayersService) { }

  ngOnInit(): void {
  }


  filterPlayer(){
    console.log(this.filter);
    
    this.pService.filterPlayerByNumber(this.filter).subscribe((result)=>{
      this.players=result.players
    })

  }

}
