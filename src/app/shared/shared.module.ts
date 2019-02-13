import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/theme/material.module';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,

    MaterialModule,

    RouterModule
  ],
  declarations: [
    MovieCardComponent,
    SpinnerComponent,
    ToolbarComponent
  ],
  exports: [
    CommonModule,

    FlexLayoutModule,

    MovieCardComponent,
    SpinnerComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
