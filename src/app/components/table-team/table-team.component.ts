import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.css']
})
export class TableTeamComponent implements OnInit {
  teams:any=[]
  constructor(private tService:TeamsService) { }

  ngOnInit(): void {
    this.getAllTeams()
  }
  DeleteTeam(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        console.log("yesssssssssssssss");
        
        //here Delete 
        // this.teamService.delete
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("nooooooooooooooo");

        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  getAllTeams(){
    this.tService.getAllTeams().subscribe((res)=>{
      this.teams=res.data
    })
  }
}
