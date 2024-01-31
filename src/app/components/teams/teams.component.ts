import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {


  teams:any=[]
  constructor( private tService:TeamsService) { }

  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((result)=>{
      console.log(result.data);
      
      this.teams=result.data
    })
  }

}
