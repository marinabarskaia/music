import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  MusicListService,
  Imusic
} from "../../app/services/music-list.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-listen-item",
  templateUrl: "./listen-item.component.html",
  styleUrls: ["./listen-item.component.css"]
})
export class ListenItemComponent implements OnInit {
  items$: Observable<Imusic[]>;
  midiID: string;
  item: any;
  name: string;

  constructor(
    private musicService: MusicListService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log("Params " + params);
     console.log("snapshot data " + this.route.snapshot.data);
    });
  }

  ngOnInit() {

    //getting id passed in url after clicking on id link on list page
    this.route.params.subscribe(item => {
      this.midiID = item.midiID;
      console.log("midiID==== " + this.midiID); 

        //Trying  to get name from that object==== its empty?????

        this.items$ = this.musicService.getItem(this.midiID, this.name).pipe(
          map(item => this.name = this.item.name));
        console.log("Item Name===" + this.item.name);
    });
    
    
  }
  

}
