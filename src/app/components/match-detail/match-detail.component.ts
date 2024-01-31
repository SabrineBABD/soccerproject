import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  id: any
  match: any = {}
  constructor(private activatedRoute: ActivatedRoute , private mService:MatchesService) { }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.getMatchById()
  }


  getMatchById() {

    this.mService.getMatchById(this.id).subscribe((result)=>{
      this.match=result.match

    })
    // let matches = JSON.parse(localStorage.getItem('matches') || "[]")
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id === Number(this.id)) {

    //     this.match = matches[i]
    //   }
    // }
  }

}
