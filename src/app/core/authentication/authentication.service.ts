import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

import { ErrorHandlerService } from '@app/core/error-handler/error-handler.service';

@Injectable({ providedIn: 'root', })
export class AuthenticationService {
  baseUrl: string;

  constructor(private errorHandler: ErrorHandlerService, private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth/login`;

    return this.http.post<any>(url, { email, password })
      .pipe(catchError(this.errorHandler.handleError));
  }

  logout(): Observable<any> {
    const url = `${this.baseUrl}/auth/logout`;

    return this.http.get<any>(url)
      .pipe(catchError(this.errorHandler.handleError));
  }

  register(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth/register`;

    return this.http.post<any>(url, { email, password })
      .pipe(catchError(this.errorHandler.handleError));
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }
}
