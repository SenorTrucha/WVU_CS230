import { Component, Input } from "@angular/core";
import { WatchlistCardService } from "../add-watchlist-card/add-watchlist-card.service";
import { WatchlistCard } from "../add-watchlist-card/watchlistcards.model";
import { WatchListCardInfo } from "../add-watchlist-card/watchlist-card-info.model";

@Component({
  selector: 'disney-watchlist',
  templateUrl: './watchlist.component.html',
})
export class WatchlistComponent{
  watchlistcards: WatchlistCard[] = [];
  
    constructor(private infoService: WatchlistCardService){
      this.infoService.getCardInfo().subscribe((data: WatchListCardInfo[]) => {

        for(let i = 0; i < data.length; i++){
          var watchlistcard:(WatchListCardInfo | undefined) = data[i];
          this.watchlistcards.push(new WatchlistCard(watchlistcard))
        }
  
      })
    }
      onEditWatchlistInfo(data: WatchlistCard){
        this.infoService.addWatchlistInfo(data).subscribe(data =>{
          console.log(data);
        });
      }
}

