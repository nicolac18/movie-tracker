import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { MovieService } from '@app/core/movie/movie.service';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule
  ],
  declarations: [],
  providers: [
    MovieService
  ]
})
export class CoreModule { }
