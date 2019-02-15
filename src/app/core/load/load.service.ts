import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root', })
export class LoadService {
  public loading$: EventEmitter<boolean>;
  private loading = false;

  constructor() {
    this.loading$ = new EventEmitter();
  }

  setLoadingOff(): void {
    this.loading = false;
    this.loading$.emit(this.loading);
  }

  setLoadingOn(): void {
    this.loading = true;
    this.loading$.emit(this.loading);
  }
}
