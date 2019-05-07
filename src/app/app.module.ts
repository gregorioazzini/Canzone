import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import {
FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { ListaCanzoneComponent } from './lista-canzone/lista-canzone.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCanzoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
