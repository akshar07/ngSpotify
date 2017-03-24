import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';


import { ROUTES } from './app.routes';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SpotifyService } from './service/spotify.service';
import { Http,HttpModule } from '@angular/http';
import { OrderByPipe } from './orderby';
import { AboutComponent } from './about.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,
                RouterModule.forRoot(ROUTES,{useHash:true}) ],
  declarations: [ AppComponent,SearchResultsComponent,OrderByPipe,AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers:[SpotifyService]
})
export class AppModule { }
