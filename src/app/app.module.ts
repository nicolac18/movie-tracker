import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/theme/material.module';

import { AppComponent } from '@app/app.component';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    LibraryComponent,
    MoviesComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    FormsModule,

    MaterialModule,

    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
