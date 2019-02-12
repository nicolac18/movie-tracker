import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Movie } from '@app/core/movie/movie';
import { MovieService } from '@app/core/movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  itemsPerPage: number;
  movies: Movie[];
  page: number;
  totPages: number;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.itemsPerPage = 20;
    this.movies = [];
    this.page = 1;

    this.initMovies();
  }

  initMovies(): void {
    const release_date = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.movieService.discoverMovies({ page: this.page, release_date }).subscribe(data => {
      this.movies = data.data;
      this.totPages = data.totalPages;
    });
  }

  onPaginatorChange(event) {
    this.page = event.pageIndex + 1;

    this.initMovies();
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
