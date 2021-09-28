import { Component, OnInit } from '@angular/core';
import { mock_moviecards } from '../movie-cards/mock-moviecards';
import { MovieCard } from '../movie-cards/moviecards.model';

@Component({
  selector: 'disney-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  moviecards: MovieCard [] = [];

  constructor() {
    for(var moviecard of mock_moviecards){
      this.moviecards.push(new MovieCard(moviecard))
    }
   }
    ngOnInit(): void {
    }
}
