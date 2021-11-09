import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './body/watchlist/watchlist.component';
import { OriginalsComponent } from './body/originals/originals.component';
import { HomeComponent } from './body/home/home.component';
import { SearchComponent } from './body/search/search.component';
import {RouterModule, Routes} from '@angular/router';
import { MoviesComponent } from './body/movies/movies.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: 'watchlist', component: WatchlistComponent},
{path: 'originals', component: OriginalsComponent},
{path: 'movies', component: MoviesComponent},
{path: 'auth', component: AuthComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
