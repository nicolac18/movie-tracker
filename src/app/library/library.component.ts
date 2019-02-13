import { Component, OnInit } from '@angular/core';

import { MovieService } from '@app/core/movie/movie.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  itemsPerPage: number;
  myMovies: any[];
  page: number;
  totPages: number;
  search: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.itemsPerPage = 20;
    this.myMovies = [];
    this.page = 1;

    this.initMovies();
  }

  initMovies(): void {
    this.movieService.getMyMovies(this.page).subscribe(data => {
      this.myMovies = data.data;
      this.totPages = data.totalPages;
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
