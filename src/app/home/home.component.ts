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
    this.movieService.getMovies('nowPlay').subscribe(data => {
      this.nowPlayMovies = data.slice(0, 16);
    });

    this.movieService.getMovies('popular').subscribe(data => {
      this.popularMovies = data.slice(0, 16);
    });
  }

  toggle({ movie, operation }) {
    const type = Object.keys(operation)[0];

    switch (type) {
      case 'watchlist':
        this._toggleWatchlist(movie, operation[type]);
        break;
      case 'wishlist':
        this._toggleWishlist(movie, operation[type]);
        break;
      default:
        break;
    }
  }

  _toggleWatchlist(movie, operation) {
    if (operation) {
      this.movieService.addWatchlist(movie).subscribe((data) => {
        Object.assign(movie, data);
        if (movie.id === undefined) {
          movie.id = movie._id;
        }
      });
    } else {
      this.movieService.removeWatchlist(movie).subscribe((data) => {
        Object.assign(movie, data);
      });
    }
  }

  _toggleWishlist(movie, operation) {
    if (operation) {
      this.movieService.addWishlist(movie).subscribe((data) => {
        Object.assign(movie, data);
        if (movie.id === undefined) {
          movie.id = movie._id;
        }
      });
    } else {
      this.movieService.removeWishlist(movie).subscribe((data) => {
        Object.assign(movie, data);
      });
    }
  }
}
