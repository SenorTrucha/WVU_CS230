import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WatchListCardInfo } from "./watchlist-card-info.model";
import { WatchlistCard } from "./watchlistcards.model";

@Injectable({providedIn: 'root'})
export class WatchlistCardService{
    url: string = "https://disney-app-167d8-default-rtdb.firebaseio.com/watchlist-card.json";

    constructor(private http: HttpClient){  
    }

    addWatchlistInfo(data: WatchListCardInfo){
        return this.http.post(this.url, data);
    }
  
    getCardInfo(){
        return this.http.get<WatchlistCard[]>(this.url);
    }
}
