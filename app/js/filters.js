'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('image', function () {
    return function(tile) {
      return tile.flag ? 'flag.png' : 'blank.png';
    };
  });
