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

  initMovies(): void {
    this.movieService.getMovies('nowPlay', { page: 1 }).subscribe(data => {
      this.nowPlayMovies = data.slice(0, 16);
    });

    this.movieService.getMovies('popular', { page: 1 }).subscribe(data => {
      this.popularMovies = data.slice(0, 16);
    });
  }

  toggle({ movie, operation }) {
    const type = Object.keys(operation)[0];

    switch (type) {
      case 'watchlist':
        this.movieService.toggleWatchlist(movie, operation[type]);
        break;
      case 'wishlist':
        this.movieService.toggleWishlist(movie, operation[type]);
        break;
      default:
        break;
    }
  }
}
