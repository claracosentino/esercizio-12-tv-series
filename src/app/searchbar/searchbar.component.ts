import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {
  jsonIn = {
    title: ''
  }

  constructor(private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

  }

  handleSearch(event:any){
    this.router.navigate(['/list/' + this.jsonIn.title], { relativeTo: this.route });
  }
}
