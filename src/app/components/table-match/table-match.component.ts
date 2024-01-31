import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css']
})
export class TableMatchComponent implements OnInit {

  matches: any = []
obj:any
  constructor(private _router: Router, private mService: MatchesService) { }

  ngOnInit(): void {
    this.getAllMatches()
  }

  getAllMatches() {
    this.mService.getAllMatches().subscribe((result) => {   
      this.matches = result.matches     
    })
  }

  deleteMatch() {
    if (this.obj._id) {
      this.mService.deleteMatch(this.obj._id).subscribe(()=>{
        this.getAllMatches()
      })
    }
   
 
  }

  reserveId(m:any){
    this.obj=m
  }


  navigateTo(id: any, path: string) {
    this._router.navigate([path + id])
  }

}
