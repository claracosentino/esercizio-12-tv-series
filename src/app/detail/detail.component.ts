import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shows } from '../_models/show.model';
import { Seasons } from '../_models/seasons.model';
import { SeasonsService } from '../_services/seasons.service';
import { ShowService } from '../_services/show.service';
import { EpisodesService } from '../_services/episodes.service';
import { Episodes } from '../_models/episodes.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  shows: Shows = {} as Shows
  seasons: Seasons[] = []
  episodes: Episodes[] = []

  stagioneCorrente = 1;


  constructor(private http: HttpClient, private showService: ShowService, private seasonsService: SeasonsService, private episodesService: EpisodesService, private activatedRoute: ActivatedRoute){

    this.stagioneCorrente = 1;

  }

  searchedId: number = 0

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.searchedId = Number(params.get('id'))
    })

    // chiamata api per dettaglio show
    this.showService.shows(this.searchedId).subscribe((response:any)=>{
        this.shows = response
        console.log(response)
      })

    // chiamata api per dettaglio stagioni
    this.seasonsService.seasons(this.searchedId).subscribe((response:any)=>{
      this.seasons = response
      console.log(this.seasons)
    })

    // chiamata api per dettaglio episodi
    this.episodesService.episodes(this.searchedId).subscribe((response:any)=>{
      this.episodes = response
      console.log(this.episodes)
    })
  }
}
