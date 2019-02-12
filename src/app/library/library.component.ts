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
