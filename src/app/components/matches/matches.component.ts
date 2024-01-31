import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  term:any
  matches:any=[]
  
  constructor(private matchService:MatchesService) { }

  ngOnInit(): void {
    this.getAllMatches()
  }

  getAllMatches(){
    // this.matches= JSON.parse(localStorage.getItem('matches')|| "[]")
    this.matchService.getAllMatches().subscribe((response)=>{
      this.matches = response 
    })

  }

  deleteMatch(id: any) {
    console.log("hereee id into parent",id);
    
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        this.matches.splice(i, 1)
      }
    }
    localStorage.setItem('matches', JSON.stringify(this.matches))
  }

}
