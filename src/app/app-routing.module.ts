import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from './core/authentication/authentication.guard';

import { HomeComponent } from './home/home.component';

import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { MoviesComponent } from './movies/movies.component';

import { RegistrationComponent } from './registration/registration.component';

import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // default
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // authorized pages
  { path: '', component: MainComponent, canActivate: [AuthenticationGuard], children: [
    { path: 'home', component: HomeComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'search', component: SearchComponent },
  ] },

  // unauthorized pages
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
