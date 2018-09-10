import { Component, OnInit } from '@angular/core';

import { MovieService } from '@app/core/movie/movie.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  myMovies: any[];
  search: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.myMovies = [];

    this.initMovies();
  }

  initMovies(): void {
    this.movieService.getMyMovies().subscribe(data => {
      this.myMovies = data;
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
