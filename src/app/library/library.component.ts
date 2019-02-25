import { Component, OnInit } from '@angular/core';

import { LoadingService } from '@app/core/loading/loading.service';
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

  constructor(private loadingService: LoadingService, private movieService: MovieService) { }

  ngOnInit() {
    this.itemsPerPage = 20;
    this.myMovies = [];
    this.page = 1;

    this.initMovies();
  }

  initMovies(): void {
    this.loadingService.setLoadingOn();

    this.movieService.getMyMovies(this.page).subscribe(data => {
      this.myMovies = data.data;
      this.totPages = data.totalPages;

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
