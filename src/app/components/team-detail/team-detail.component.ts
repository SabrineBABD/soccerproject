import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  id:any
  team:any={}
  constructor(private activatedRouter:ActivatedRoute ,private tService:TeamsService ) { }

  ngOnInit(): void {
    this.id=this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
      this.tService.getTeamById(this.id).subscribe((res)=>{
        console.log("res.team res.team",res.team);
        
        this.team=res.team
      })
    }
  }

}
