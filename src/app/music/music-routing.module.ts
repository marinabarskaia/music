import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicComponent } from './music.component';
import {ListenItemComponent} from './listen-item/listen-item.component';

const routes: Routes = [
  { path: '', component: MusicComponent },
  {path: 'listen/:id', component: ListenItemComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
