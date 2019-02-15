import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadService } from '@app/core/load/load.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy, OnInit {
  isLoading: boolean;
  isOpen: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private authService: AuthenticationService, private loadService: LoadService, private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    loadService.loading$.subscribe(loading => this._setLoading(loading));
  }

  activate() {
    document.querySelector('#msc').scrollTo(0, 0);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.isOpen = this.mobileQuery.matches ? false : true;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  _setLoading(loading) {
    this.isLoading = loading;
  }
}
