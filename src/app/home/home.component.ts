import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestMovies: any[];
  popularMovies: any[];
  watchlistMovies: any[];

  constructor() { }

  ngOnInit() {
    this.latestMovies = [];
    this.popularMovies = [];
    this.watchlistMovies = [];
  }

}
