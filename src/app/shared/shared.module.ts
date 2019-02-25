import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/theme/material.module';

import { FilterComponent } from './filter/filter.component';
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
    FilterComponent,
    MovieCardComponent,
    SpinnerComponent,
    ToolbarComponent
  ],
  exports: [
    CommonModule,

    FlexLayoutModule,

    FilterComponent,
    MovieCardComponent,
    SpinnerComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
