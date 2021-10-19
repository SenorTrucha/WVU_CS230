import { Component, OnInit } from '@angular/core';
//import { mock_moviecards } from '../movie-cards/mock-moviecards';
import { MovieCardService } from '../movie-cards/movie-cards.service';
import { MovieCard } from '../movie-cards/moviecards.model';
import { MovieCardInfo } from '../movie-cards/movie-card-info.model';

@Component({
  selector: 'disney-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent{
  moviecards: MovieCard[] = [];

  constructor(private moviecardService: MovieCardService) {

    this.moviecardService.getCardInfo().subscribe((data: MovieCardInfo[]) => {

      for(let i = 0; i < data.length; i++){
        var moviecard:(MovieCardInfo | undefined) = data[i];
        this.moviecards.push(new MovieCard(moviecard))
      }

    })
    
   }
}
