import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { TableTeamComponent } from './components/table-team/table-team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FilterPlayerComponent } from './components/filter-player/filter-player.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"contact" , component:ContactComponent},
  {path:"login" , component:LoginComponent},
  {path:"table-match" , component:TableMatchComponent},
  {path:"table-player" , component:TablePlayerComponent},
  {path:"table-teams" , component:TableTeamComponent},
  {path:"add-match" , component:AddMatchComponent} ,
  {path:"add-match/:id" , component:AddMatchComponent} ,
  {path:"match-detail/:id" , component:MatchDetailComponent},
  {path:"team-detail/:id" , component:TeamDetailComponent},
  {path:"signup" , component:SignupComponent},
  {path:"signupAdmin" , component:SignupComponent},
  {path:"matches" , component:MatchesComponent},
  {path:"add-team" , component:AddTeamComponent},
  {path:"add-player" , component:AddPlayerComponent},
  {path:"teams" , component:TeamsComponent},
  {path:"filter-player" , component:FilterPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
