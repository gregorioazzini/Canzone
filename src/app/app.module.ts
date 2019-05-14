import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import {
FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { ListaCanzoneComponent } from './lista-canzone/lista-canzone.component';
import { DettagliAlbumComponent } from './dettagli-album/dettagli-album.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCanzoneComponent,
    DettagliAlbumComponent
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
