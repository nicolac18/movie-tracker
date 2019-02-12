import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { MovieService } from '@app/core/movie/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: any[];

  input: string;

  constructor(private movieService: MovieService) { }

  emptySearch() {
    this.input = null;
    this.movies = [];
  }

  ngOnInit() {
    this.input = null;

    this._initObservable();
  }

  submitSearch(input) {
    this.movieService.search({ query: input }).subscribe(data => {
      this.movies = data;
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

  _initObservable() {
    const searchBox = document.getElementsByName('title');
    const event = fromEvent(searchBox, 'input')
      .pipe(
        map((o: KeyboardEvent) => <HTMLTextAreaElement>o.currentTarget),
        debounceTime(750)
      );

    event.subscribe(data => {
      if (data.value) {
        this.submitSearch(data.value);
      } else {
        this.emptySearch();
      }
    });
  }
}
