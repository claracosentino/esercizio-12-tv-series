import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowService } from '../_services/show.service';
import { SeasonsService } from '../_services/seasons.service';
import { EpisodesService } from '../_services/episodes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Seasons } from '../_models/seasons.model';
import { Episodes } from '../_models/episodes.model';
import { Shows } from '../_models/show.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
})
export class EpisodesComponent implements OnInit {

  shows: Shows = {} as Shows
  seasons: Seasons[] = []
  episodes: Episodes[] = []
  searchedId: number = 0

  currentUrl: string = ''

  constructor(private http: HttpClient, private showService: ShowService, private seasonsService: SeasonsService, private episodesService: EpisodesService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {

    this.currentUrl = this.router.url

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
