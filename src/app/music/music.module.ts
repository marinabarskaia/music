import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { ListenItemComponent } from './listen-item/listen-item.component';


@NgModule({
  declarations: [MusicComponent, ListenItemComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
