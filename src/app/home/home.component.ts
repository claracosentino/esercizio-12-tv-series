import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { HttpClient } from '@angular/common/http';
import {ShowSearch} from '../_models/show.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  shows: ShowSearch[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.searchShow('queen').subscribe( (shows) => {
      this.shows = shows;
    })
  }
}
