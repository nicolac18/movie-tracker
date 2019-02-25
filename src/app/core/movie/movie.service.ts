import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Movie } from '@app/core/movie/movie';

import { environment } from '@env/environment';

import { ErrorHandlerService } from '@app/core/error-handler/error-handler.service';

@Injectable({ providedIn: 'root' })
export class MovieService {
  baseUrl: string;

  constructor(private errorHandler: ErrorHandlerService, private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  addMovie(movie: Movie): Observable<any> {
    const url = `${this.baseUrl}/movies`;

    return this.http.post<any>(url, movie)
      .pipe(catchError(this.errorHandler.handleError));
  }

  addWatchlist(movie: Movie): Observable<any> {
    let url = `${this.baseUrl}/movies`;

    if (movie.id) {
      url += `/${movie.id}`;
      return this.http.put<any>(url, { watched: new Date() })
        .pipe(catchError(this.errorHandler.handleError));
    }

    movie.watched = new Date();
    return this.http.post<any>(url, movie)
      .pipe(catchError(this.errorHandler.handleError));
  }

  addWishlist(movie: Movie): Observable<any> {
    let url = `${this.baseUrl}/movies`;

    if (movie.id) {
      url += `/${movie.id}`;
      return this.http.put<any>(url, { wishlist: true })
        .pipe(catchError(this.errorHandler.handleError));
    }

    movie.wishlist = true;
    return this.http.post<any>(url, movie)
      .pipe(catchError(this.errorHandler.handleError));
  }

  discoverMovies(query: any): Observable<any> {
    const url = `${this.baseUrl}/discover/movies`;

    return this.http.get<any>(url, { observe: 'response', params: query })
      .pipe(
        catchError(this.errorHandler.handleError),
        map(response => ({
          data: response.body,
          totalResults: response.headers.get('Total-Results'),
        }))
      );
  }

  getMovies(type: string, query: any): Observable<any> {
    let url = this.baseUrl;

    switch (type) {
      case 'nowPlay':
        url += '/collections/atcinema';
        break;
      case 'popular':
        url += '/collections/popular';
        break;
      default:
        url += '/movie/latest';
        break;
    }

    return this.http.get<any>(url, { params: query });
  }

  getMyMovies(page: number = 1): Observable<any> {
    const url = `${this.baseUrl}/movies`;

    return this.http.get<any>(url, { observe: 'response', params: { page: page.toString() } })
      .pipe(
        catchError(this.errorHandler.handleError),
        map(response => ({
          data: response.body,
          totalResults: response.headers.get('Total-Results'),
        }))
      );
  }

  removeWatchlist(movie: Movie): Observable<any> {
    const url = `${this.baseUrl}/movies/${movie.id}`;

    return this.http.put<any>(url, { watched: null })
      .pipe(catchError(this.errorHandler.handleError));
  }

  removeWishlist(movie: Movie): Observable<any> {
    const url = `${this.baseUrl}/movies/${movie.id}`;

    return this.http.put<any>(url, { wishlist: false })
      .pipe(catchError(this.errorHandler.handleError));
  }

  search(query: any) {
    const url = `${this.baseUrl}/movies/search`;

    return this.http.get<any>(url, { params: query })
      .pipe(catchError(this.errorHandler.handleError));
  }

  toggleWatchlist(movie, operation) {
    if (operation) {
      this.addWatchlist(movie).subscribe((data) => {
        Object.assign(movie, data);
        if (movie.id === undefined) {
          movie.id = movie._id;
        }
      });
    } else {
      this.removeWatchlist(movie).subscribe((data) => {
        Object.assign(movie, data);
      });
    }
  }

  toggleWishlist(movie, operation) {
    if (operation) {
      this.addWishlist(movie).subscribe((data) => {
        Object.assign(movie, data);
        if (movie.id === undefined) {
          movie.id = movie._id;
        }
      });
    } else {
      this.removeWishlist(movie).subscribe((data) => {
        Object.assign(movie, data);
      });
    }
  }
}
