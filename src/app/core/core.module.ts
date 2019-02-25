import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from '@app/core/authentication/authentication.service';
import { ErrorHandlerService } from './error-handler/error-handler.service';
import { LoadingService } from '@app/core/loading/loading.service';
import { MovieService } from '@app/core/movie/movie.service';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    ErrorHandlerService,
    LoadingService,
    MovieService
  ]
})
export class CoreModule { }
