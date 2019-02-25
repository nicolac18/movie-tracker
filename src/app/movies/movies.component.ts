import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Filter } from '@app/shared/filter/filter';
import { Movie } from '@app/core/movie/movie';

import { LoadingService } from '@app/core/loading/loading.service';
import { MovieService } from '@app/core/movie/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  filters: Filter;
  itemsPerPage: number;
  movies: Movie[];
  page: number;
  totResults: number;

  constructor(private loadingService: LoadingService, private movieService: MovieService) { }

  ngOnInit() {
    this.filters = new Filter();
    this.itemsPerPage = 20;
    this.movies = [];
    this.page = 1;

    this.initMovies();
  }

  filterChanged(event: Filter): void {
    this.filters = event;
    this.page = 1;

    this.initMovies();
  }

  initMovies(): void {
    const release_date =
      this.filters.year ? formatDate(new Date(this.filters.year, 11, 31), 'yyyy-MM-dd', 'en') : formatDate(new Date(), 'yyyy-MM-dd', 'en');

    const filters = Object.assign({}, this.filters, { page: this.page, release_date });

    this.loadingService.setLoadingOn();

    this.movieService.discoverMovies(filters).subscribe(data => {
      this.movies = data.data;
      this.totResults = data.totalResults;

      this.loadingService.setLoadingOff();
    });
  }

  onPaginatorChange(event) {
    this.page = event.pageIndex + 1;
    document.querySelector('#msc').scrollTo(0, 0);

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
