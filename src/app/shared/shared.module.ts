import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/theme/material.module';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,

    MaterialModule
  ],
  declarations: [
    MovieCardComponent,
    ToolbarComponent
  ],
  exports: [
    CommonModule,

    FlexLayoutModule,

    MovieCardComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
