'use strict';

/* Services */

var module = angular.module('myApp', []);

module.factory('tiles', function() {
    var tileService = {};

    tileService.tiles = {
        Partial1 : {
            url : "partials/partial1.html"
        },
        Partial2 : {
            url : "partials/partial2.html"
        }
    };

    tileService.callback = function(tile) {
        return function(message) {
            console.log(tileService);
            if (tileService.master !== null)
                tileService.master(message);
        };
    }

    tileService.master = null,

    tileService.registerMaster = function(callback) {
        console.log("registering master");
        this.master = callback; 
    }

    tileService.register = function(tile) {
        this.primaryTile = this.tiles[tile].url;
        return this.callback(tile);
    }

    tileService.getTiles = function() {
        return {
            bigTile : this.tiles.Partial1.url,
            smallTile1 : this.tiles.Partial2.url
        }
        return this.tiles.Partial1.url;
    }

    return tileService;

});
