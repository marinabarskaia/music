import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {MusicListService, Imusic} from '../../app/services/music-list.service';
import { Observable } from 'rxjs';
import { map} from "rxjs/operators";


@Component({
  selector: "app-listen-item",
  templateUrl: "./listen-item.component.html",
  styleUrls: ["./listen-item.component.css"]
})
export class ListenItemComponent implements OnInit {
  items$: Observable<Imusic[]>;
  midiID:string;
  item: any;
  name: string;

  constructor(private musicService: MusicListService,
        private route: ActivatedRoute) {}
  
  ngOnInit(){
    this.item.midiID = this.route.snapshot.paramMap.get(this.midiID);  
    this.item.name = this.route.snapshot.paramMap.get(this.name);  
    // this.route.params.pipe(map(data => {
    //   this.route = this.items$.midiID;
    // })).map((item => this.item.get(item.name);

    console.log(this.midiID);
   
  }

}