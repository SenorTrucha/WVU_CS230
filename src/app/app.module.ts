import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavButtonsComponent } from './Buttons/nav-buttons.component';
import { CarouselComponent } from './Carousel/carousel.component';
import { BottomNavBarComponent } from './Footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './Header/top-nav-bar.component';
import { LayoutMainComponent } from './Layout/layout-main.component';
import { WatchlistComponent } from './body/watchlist/watchlist.component';
import { OriginalsComponent } from './body/originals/originals.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './body/home/home.component';
import { SearchComponent } from './body/search/search.component';
import { MoviesComponent } from './body/movies/movies.component';
import { MovieCardsComponent } from './body/movie-cards/movie-cards.component';
import { UserInfoComponent } from './User-Info/user-info.component';
import{ HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { WatchlistCard } from './body/add-watchlist-card/watchlistcards.model';
import { WatchlistCardService } from './body/add-watchlist-card/add-watchlist-card.service';
import { AddWatchCardlistComponent } from './body/add-watchlist-card/add-watchlist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CarouselComponent,
    NavButtonsComponent,
    LayoutMainComponent,
    HomeComponent,
    SearchComponent,
    WatchlistComponent,
    OriginalsComponent,
    MoviesComponent,
    MovieCardsComponent,
    UserInfoComponent,
    AddWatchCardlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
