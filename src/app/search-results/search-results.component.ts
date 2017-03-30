import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Artist } from '../models/artist';
import { SpeechRecognitionService } from '../speech-service/speech.service';


@Component({
    selector: 'app-results',
    templateUrl: 'search-results.component.html',
    styleUrls: ['styles.css']
})
export class SearchResultsComponent {
  
    showSearchButton: boolean;
    speechData: string;
    searchStr:string="";
    searchResults:any[]=[];
    sortAsc:any[]=[];
    sortPop:boolean=false;
    sortArtist:boolean=false;


    constructor(private spotifyService:SpotifyService,private speechService:SpeechRecognitionService) {
        this.showSearchButton = true;
        this.speechData = "";
     }
     ngOnDestroy() {
        this.speechService.DestroySpeechObject();
    }
  
    activateSpeechSearch(): void {
        this.showSearchButton = false;

        this.speechService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                console.log( this.speechData);
                 if(this.speechData==='sort'){
                    this.sortPopularity();
                }else{
                    this.searchMusic()
                }
               
               
               
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                 
                    this.activateSpeechSearch();
                }
            },
            //completion
            () => {
                
                this.showSearchButton = true;
                console.log("--complete--");
                this.activateSpeechSearch();
  
               
            });
            
    }
    searchMusic(){
        console.log("search")
        this.spotifyService.searchMusic(this.speechData)
            .subscribe(res=>this.searchResults=res.artists.items);
            this.sortAsc=[];
            this.searchResults.map(item=>{
                this.sortAsc.push(item.name);
     });
    }
  
     sortData(){
         console.log("ascending")
    this.sortArtist=!this.sortArtist;
        if(this.sortArtist==true){
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

        };
   
}
