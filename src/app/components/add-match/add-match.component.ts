import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm !: FormGroup
  match: any = {}
  id: any
  title: string = "Add Match"

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private mService: MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = "Edit Match"
      this.getMatchById()
    }
  }


  addEditMatch() {



    if (this.id) {
      // here into Edit

      this.mService.updateMatch(this.match).subscribe(()=>{
        console.log("updated");
        
      })

    } else {
      // here into Add

      // this.match.id = JSON.parse(localStorage.getItem("matchId") || "3")
      this.mService.addMatch(this.match).subscribe((res) => {
        console.log(res.message);
        // localStorage.setItem('matchId', JSON.stringify(this.match.id + 1))

      })

    }

    // let matches = JSON.parse(localStorage.getItem("matches") || "[]")
    // if (this.id) {
    //   // here into Edit Mode
    //   for (let i = 0; i < matches.length; i++) {
    //     if (matches[i].id === Number(this.id)) {
    //       matches[i] = this.match
    //     }
    //   }
    // } else {
    //   // here into Add Mode
    //   this.match.id = matches.length == 0 ? 1 : matches[matches.length - 1].id + 1
    //   matches.push(this.match)

    // }
    // localStorage.setItem('matches', JSON.stringify(matches))
    // this.router.navigate(["/table-match"])
  }


  getMatchById() {

    this.mService.getMatchById(this.id).subscribe((res)=>{
      console.log(res);
      this.match=res.match
      
    })
    // let matches = JSON.parse(localStorage.getItem('matches') || "[]")
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id === Number(this.id)) {

    //     this.match = matches[i]
    //   }
    // }
  }

}
