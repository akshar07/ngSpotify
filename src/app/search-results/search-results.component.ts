import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Artist } from '../models/artist';


@Component({
    selector: 'app-results',
    templateUrl: 'search-results.component.html',
   

})
export class SearchResultsComponent implements OnInit {

    searchStr:string=""; 
    searchResults:any[]=[];
    sortAsc:any[]=[];
    sortPop:boolean=false;
    sortType:boolean=false;
    
    
    constructor(private spotifyService:SpotifyService) { }

    searchMusic(){
        this.spotifyService.searchMusic(this.searchStr)
            .subscribe(res=>this.searchResults=res.artists.items);
            this.sortAsc=[];
            this.searchResults.map(item=>{
                this.sortAsc.push(item.name);
     });
    }
     sortData(){
    this.sortType=!this.sortType;
        if(this.sortType==true){
         this.searchResults.sort((a:any,b:any)=>{
                if(a.name<b.name ){
                    return -1;
                }
                if(a.name>b.name){
                    return 1;
                }
            return 0;
           });
        }
         else{
              this.searchResults.reverse();
         }
    }
    sortPopularity(){
        this.sortPop =!this.sortPop;
        if(this.sortPop==true){
             this.searchResults.sort(function(a:any,b:any){
             return parseFloat(a.popularity)- parseFloat(b.popularity);
        });
        }
        else{
            this.searchResults.reverse();
        }
       
        }
    ngOnInit() { }
}