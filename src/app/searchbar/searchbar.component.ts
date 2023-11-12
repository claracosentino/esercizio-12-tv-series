import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {
  jsonIn = {
    title: ''
  }

  constructor() {}

  ngOnInit(): void {

  }
}
