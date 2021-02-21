import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MusicModule} from './music/music.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
