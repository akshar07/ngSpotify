import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';


import { ROUTES } from './app.routes';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SpotifyService } from './service/spotify.service';
import { Http,HttpModule } from '@angular/http';
import { AboutComponent } from './about.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,
                RouterModule.forRoot(ROUTES,{useHash:true}) ],
  declarations: [ AppComponent,SearchResultsComponent,AboutComponent,ArtistComponent ],
  bootstrap:    [ AppComponent ],
  providers:[SpotifyService]
})
export class AppModule { }
