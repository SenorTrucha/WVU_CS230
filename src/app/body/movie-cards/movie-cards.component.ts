import { Component, Input } from "@angular/core";

@Component({
    selector: 'movie-cards',
    templateUrl: 'movie-cards.component.html',
    styleUrls: ['movie-cards.component.css']
})

export class MovieCardsComponent {
    @Input()
    title! : string;
    @Input()
    company! : string;
    @Input()
    imgPath! : string;
}