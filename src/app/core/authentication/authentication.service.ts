import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root', })
export class AuthenticationService {
  baseUrl: string;

  constructor(private http: HttpClient) {
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

    return this.http.post<any>(url, { email, password });
  }

  logout(): Observable<any> {
    const url = `${this.baseUrl}/auth/logout`;

    return this.http.get<any>(url);
  }

  register(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth/register`;

    return this.http.post<any>(url, { email, password });
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }
}
