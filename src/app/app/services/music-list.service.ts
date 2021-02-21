import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Imusic {
  midiID: string;
  name: string;
  description: string;
  album: {
    name: string;
    image: string;
    url: string;
  };
  artist: {
    name: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class MusicListService {
  dataUrl = "https://us-east1-pianocrumbs-258021.cloudfunctions.net/get-songs";

  constructor(private http: HttpClient) {}

  getMusic(): Observable<Imusic[]> {
    return this.http.get<Imusic[]>(this.dataUrl);
  }

  getItem(midiID) {
   return this.http.get(this.dataUrl+'?midiID='+ midiID);
  }

}