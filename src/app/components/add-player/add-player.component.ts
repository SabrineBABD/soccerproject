import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  imagePreview = ""
  image:any
  player: any = {
    post: ""
  }
  teams: any = []
  addPlayerForm!: FormGroup

  constructor(private TService: TeamsService, private PService: PlayersService) { }

  ngOnInit(): void {

    this.getAllTeams()
  }

  addEditPlayer() {

console.log(this.image);


    this.PService.addPlayer(this.player, this.image).subscribe((result) => {

      console.log(result.message);


    })

  }


  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.image=file
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


  getAllTeams() {
    this.TService.getAllTeams().subscribe((result) => {
      this.teams = result.data
    })
  }

  

}
