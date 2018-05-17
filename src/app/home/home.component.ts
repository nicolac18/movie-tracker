import { Component, OnInit } from '@angular/core';

import { MovieService } from '@app/core/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlayMovies: any[];
  popularMovies: any[];
  watchlistMovies: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.nowPlayMovies = [];
    this.popularMovies = [];
    this.watchlistMovies = [];

    this.initMovies();
  }

  add({ movie, type }) {
    console.log(movie, type);
  }

  initMovies(): void {
    this.movieService.getMovies('nowPlay').subscribe(data => {
      this.nowPlayMovies = data.slice(0, 16);
    });

    this.movieService.getMovies('popular').subscribe(data => {
      this.popularMovies = data.slice(0, 16);
    });
  }

}
