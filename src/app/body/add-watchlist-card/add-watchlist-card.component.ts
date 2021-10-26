import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { WatchlistCardService } from './add-watchlist-card.service';
import { WatchlistCard } from './watchlistcards.model';

@Component({
  selector: 'add-watchlist-card',
  templateUrl: './add-watchlist-card.component.html',
})
export class AddWatchCardlistComponent {
  @Input()
    Movie! : string;
    @Input()
    User! : string;
}