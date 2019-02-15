import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root', })
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuthorization();
  }

  checkAuthorization(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
