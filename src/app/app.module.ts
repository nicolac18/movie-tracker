import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { ROUTES } from '@app/routes';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/theme/material.module';

import { AppComponent } from '@app/app.component';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(ROUTES),

    FlexLayoutModule,

    MaterialModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
