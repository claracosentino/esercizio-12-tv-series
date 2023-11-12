import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './_services/api.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DetailComponent } from './detail/detail.component';
import { SeasonsService } from './_services/seasons.service';
import { ShowService } from './_services/show.service';
import { EpisodesService } from './_services/episodes.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SearchbarComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiService, SeasonsService, ShowService, EpisodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
