import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team:any={}
  addTeamForm!:FormGroup

  constructor( private Tservice:TeamsService) { }

  ngOnInit(): void {
  }


  addEditTeam(){
    
    this.Tservice.addTeam(this.team).subscribe((res)=>{
      console.log(res);
      
    })

  }

}
