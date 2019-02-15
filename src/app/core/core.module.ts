import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { LoadService } from '@app/core/load/load.service';
import { MovieService } from '@app/core/movie/movie.service';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    LoadService,
    MovieService
  ]
})
export class CoreModule { }
