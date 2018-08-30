import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '@app/core/movie/movie';

import { environment } from '@env/environment';

@Injectable()
export class MovieService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  addMovie(movie: Movie): Observable<any> {
    const url = `${this.baseUrl}/movies`;

    return this.http.post<any>(url, movie);
  }

  addWatchlist(movie: Movie): Observable<any> {
    let url = `${this.baseUrl}/movies`;

    if (movie.id) {
      url += `/${movie.id}`;
      return this.http.put<any>(url, { watched: new Date() });
    }

    movie.watched = new Date();
    return this.http.post<any>(url, movie);
  }

  addWishlist(movie: Movie): Observable<any> {
    let url = `${this.baseUrl}/movies`;

    if (movie.id) {
      url += `/${movie.id}`;
      return this.http.put<any>(url, { wishlist: true });
    }

    movie.wishlist = true;
    return this.http.post<any>(url, movie);
  }

  getMovies(type: string, page: number = 1): Observable<any> {
    let url = this.baseUrl;

    switch (type) {
      case 'nowPlay':
        url += '/collections/atcinema?';
        break;
      case 'popular':
        url += '/collections/popular?';
        break;
      default:
        url += '/movie/latest?';
        break;
    }

    url += `page=${page}`;
    return this.http.get<any>(url);
  }

  removeWatchlist(movie: Movie): Observable<any> {
    const url = `${this.baseUrl}/movies/${movie.id}`;

    return this.http.put<any>(url, { watched: null });
  }

  removeWishlist(movie: Movie): Observable<any> {
    const url = `${this.baseUrl}/movies/${movie.id}`;

    return this.http.put<any>(url, { wishlist: false });
  }
}
