import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '@app/core/movie/movie';

import { environment } from '@env/environment';

@Injectable()
export class MovieService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  getMovies(type: string, page: number = 1): Observable<Movie[]> {
    const today = new Date().toISOString();
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
    return this.http.get<Movie[]>(url);
  }
}
