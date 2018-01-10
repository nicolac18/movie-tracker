import { Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },

  // default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
