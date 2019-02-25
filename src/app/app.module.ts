import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from '@auth0/angular-jwt';

import { MaterialModule } from '@app/theme/material.module';

import { AppComponent } from '@app/app.component';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LibraryComponent,
    LoginComponent,
    MainComponent,
    MoviesComponent,
    SearchComponent,
    RegistrationComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    FormsModule,

    HttpClientModule,

    JwtModule.forRoot({
      config: {
        blacklistedRoutes: ['localhost:3000/login'],
        whitelistedDomains: ['localhost:3000'],
        tokenGetter: () => localStorage.getItem('access_token')
      }
    }),

    MaterialModule,
    ReactiveFormsModule,

    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
