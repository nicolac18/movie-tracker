import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { LoadService } from '@app/core/load/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {
  isLoading: boolean;
  isOpen: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private loadService: LoadService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    loadService.loading$.subscribe(loading => this._setLoading(loading));
  }

  activate() {
    document.querySelector('#msc').scrollTo(0, 0);
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
