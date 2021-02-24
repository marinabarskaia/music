import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { MusicListService, Imusic } from "../app/services/music-list.service";
import { Observable } from "rxjs";


@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.css"]
})
export class MusicComponent implements OnInit {
  list$: Observable<Imusic[]>;

  constructor(private router: Router,
    private musicService: MusicListService) {}

  ngOnInit() {
    this.list$ = this.musicService.getMusic();
  }

  sentItem(midiID: string) {
    this.musicService.setViewed(midiID);
    this.router.navigate(["/listen", midiID]);
    alert("Redirected");
  }
}
