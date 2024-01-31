import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { VoyellePipe } from './pipes/voyelle.pipe';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ColorDirective } from './directives/color.directive';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { TableTeamComponent } from './components/table-team/table-team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FilterPlayerComponent } from './components/filter-player/filter-player.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    ScoreComponent,
    NewsComponent,
    NextMatchComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    TableMatchComponent,
    AddMatchComponent,
    MatchDetailComponent,
    SignupComponent,
    ReversePipe,
    VoyellePipe,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ColorDirective,
    AddPlayerComponent,
    AddTeamComponent,
    MyFilterPipe,
    TablePlayerComponent,
    TableTeamComponent,
    TeamDetailComponent,
    TeamsComponent,
    FilterPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , // TDF 
    ReactiveFormsModule , // Reactive Form
    HttpClientModule , // Bostagi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
