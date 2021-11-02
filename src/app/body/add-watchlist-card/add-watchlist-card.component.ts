import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { WatchlistCardService } from './add-watchlist-card.service';
import { WatchListCardInfo } from './watchlist-card-info.model';
import { WatchlistCard } from './watchlistcards.model';

@Component({
  selector: 'add-watchlist-card',
  templateUrl: './add-watchlist-card.component.html',
})
export class AddWatchCardlistComponent {

  constructor(private infoService: WatchlistCardService,private dbService: DatabaseService){

  }

  @Input()
    Movie! : string;
    @Input()
    User! : string;
}