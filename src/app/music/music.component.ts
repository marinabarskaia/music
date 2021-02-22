import { Component, OnInit } from '@angular/core';
import {MusicListService, Imusic} from '../app/services/music-list.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})


export class MusicComponent implements OnInit {

  list$: Observable<Imusic[]>;

  constructor(private musicService: MusicListService) {}
   
    
  ngOnInit() {
    this.list$ = this.musicService.getMusic();
  }
}
