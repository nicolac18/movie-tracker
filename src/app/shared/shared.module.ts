import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/theme/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,

    BrowserModule,
    BrowserAnimationsModule,

    RouterModule,

    FlexLayoutModule,

    MaterialModule
  ],
  declarations: [
    ToolbarComponent,
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
