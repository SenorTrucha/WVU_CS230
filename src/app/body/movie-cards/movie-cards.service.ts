import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieCard } from "./moviecards.model";

@Injectable({providedIn: 'root'})
export class MovieCardService{
    url: string = "https://disney-app-167d8-default-rtdb.firebaseio.com/movie-card.json";

    constructor(private http: HttpClient){  
    }

    getCardInfo(){
        return this.http.get<MovieCard[]>(this.url);
    }
}