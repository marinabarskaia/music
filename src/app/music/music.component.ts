import { Component, OnInit } from '@angular/core';
import {MusicListService, Imusic} from '../app/services/music-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit {

  list$: Imusic[];

  constructor(private musicService: MusicListService 
    ) {}
    getKeys(obj){
      return Object.keys(obj)
    }

  ngOnInit(): void {
    
    this.musicService.getMusic().subscribe((data )=> {
      console.log(data);
    this.list$ = data });
 
  
  
   
  }

}
