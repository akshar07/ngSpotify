import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';

@Component({
    selector:'app-artist',
    templateUrl:'artist.component.html'
})
export class ArtistComponent implements OnInit {

artist:Artist[]=[];



ngOnInit(){

}
}