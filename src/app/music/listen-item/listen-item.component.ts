import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MusicListService,
  Imusic
} from "../../app/services/music-list.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { stringify } from "querystring";

@Component({
  selector: "app-listen-item",
  templateUrl: "./listen-item.component.html",
  styleUrls: ["./listen-item.component.css"]
})
export class ListenItemComponent implements OnInit {
  item$: Observable<Imusic>;
  selected: any;

  constructor(
    private musicService: MusicListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      item => (this.item$ = this.musicService.getItem(item.midiID))
    );

    this.musicService.getViewed().subscribe(data => {
      this.item$.midiID = data;
      //alert("from getViewed=== " + data);
    });
  }

  isSelected(midiID: string): Observable<Boolean> {
    return this.musicService.getViewed()
      .map(data => data == this.item$.midiID);
         

  }
  
}
