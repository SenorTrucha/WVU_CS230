import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavButtonsComponent } from './Buttons/nav-buttons.component';
import { CarouselComponent } from './Carousel/carousel.component';
import { BottomNavBarComponent } from './Footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './Header/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    CarouselComponent,
    NavButtonsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
