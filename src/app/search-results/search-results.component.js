"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var spotify_service_1 = require('../service/spotify.service');
var SearchResultsComponent = (function () {
    function SearchResultsComponent(spotifyService) {
        this.spotifyService = spotifyService;
        this.searchStr = "";
        this.searchResults = [];
        this.sortAsc = [];
        this.sortPop = false;
        this.sortType = false;
    }
    SearchResultsComponent.prototype.searchMusic = function () {
        var _this = this;
        this.spotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) { return _this.searchResults = res.artists.items; });
        this.sortAsc = [];
        this.searchResults.map(function (item) {
            _this.sortAsc.push(item.name);
        });
    };
    SearchResultsComponent.prototype.sortData = function () {
        this.sortType = !this.sortType;
        if (this.sortType == true) {
            this.searchResults.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            this.searchResults.reverse();
        }
    };
    SearchResultsComponent.prototype.sortPopularity = function () {
        this.sortPop = !this.sortPop;
        if (this.sortPop == true) {
            this.searchResults.sort(function (a, b) {
                return parseFloat(a.popularity) - parseFloat(b.popularity);
            });
        }
        else {
            this.searchResults.reverse();
        }
    };
    SearchResultsComponent.prototype.ngOnInit = function () { };
    SearchResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-results',
            templateUrl: 'search-results.component.html',
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map