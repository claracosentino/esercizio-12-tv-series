import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-main-episodes',
  templateUrl: './buttons-main-episodes.component.html',
})
export class ButtonsMainEpisodesComponent implements OnInit {

  currentUrl: string = ''

  constructor(private router: Router){}

  ngOnInit(): void {

    this.currentUrl = this.router.url

  }

  checkIfEpisodesIsSelected(){
    if(this.currentUrl.endsWith('/episodes')){
      return true
    } else {
      return false
    }
  }

  handleClickOnMain(){
    if(this.checkIfEpisodesIsSelected()){
      const urlWithoutEpisodes = this.currentUrl.slice(0, -9);
      return urlWithoutEpisodes
    } else {
      return this.currentUrl
    }
  }

  handleClickOnEpisodes(){
    if(this.checkIfEpisodesIsSelected()){
      return this.currentUrl
    } else {
      const urlWithEpisodes = this.currentUrl + '/episodes'
      return urlWithEpisodes
    }
  }

}
