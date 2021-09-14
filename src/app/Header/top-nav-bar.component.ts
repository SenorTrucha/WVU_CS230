import {Component} from "@angular/core"

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: 'top-nav-bar.component.html'
})
export class TopNavBarComponent{
    home: string = "Home"
    search: string = "Search"
    watchlist: string = "Watchlist"
}