import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MusicListService,
  Imusic
} from "../../app/services/music-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-listen-item",
  templateUrl: "./listen-item.component.html",
  styleUrls: ["./listen-item.component.css"]
})
export class ListenItemComponent implements OnInit {
  item$: Observable<Imusic>;

  constructor(
    private musicService: MusicListService,
    //private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      item => (this.item$ = this.musicService.getItem(item.midiID))
    );

    this.musicService.getViewed().subscribe(data => {
      this.item$.midiID = data;
      alert("from getViewed=== "  + data);
    });
   
  }
}
