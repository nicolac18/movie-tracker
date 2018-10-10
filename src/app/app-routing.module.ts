import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'movies', component: MoviesComponent },

  // default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
