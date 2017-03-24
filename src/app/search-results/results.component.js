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
var ResultsComponent = (function () {
    function ResultsComponent(spotifyService) {
        this.spotifyService = spotifyService;
    }
    ResultsComponent.prototype.searchMusic = function () {
        var _this = this;
        this.spotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) { return _this.searchResults = res.artists.items; });
    };
    ResultsComponent.prototype.ngOnInit = function () { };
    ResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-results',
            templateUrl: 'results.component.html'
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map