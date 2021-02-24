import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject} from "rxjs";

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

  private itemSelectedAction = new BehaviorSubject<string>(null);
  itemSelectedAction$ = this.itemSelectedAction.asObservable();

  dataUrl = "https://us-east1-pianocrumbs-258021.cloudfunctions.net/get-songs";
  

  //dataSingleUrl = 'https://us-east1-pianocrumbs-258021.cloudfunctions.net/get-song';

  constructor(private http: HttpClient) {}

  getMusic(): Observable<Imusic[]> {
    return this.http.get<Imusic[]>(this.dataUrl);
   
  }

  getItem(midiID: string): Observable<Imusic> {
    return this.http.get<Imusic>(
      `https://us-east1-pianocrumbs-258021.cloudfunctions.net/get-song/${midiID}`
    );
    

  }
 //this is to be called in music.component.ts(component 1) to emit selected value
  setViewed(midiID: string){
    this.itemSelectedAction.next(midiID);
    console.log('from service itemSelectedAction' + midiID);
  }

//this is to be called in list-item.component(component2) to subscribe to value passed from music.component
  getViewed(){
    return this.itemSelectedAction.asObservable();
  }
}
