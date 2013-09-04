'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PageCtrl', ['$scope', function($scope) {
    $scope.games = [];

    $scope.onNewGame = function() {
      var game = {
        "rows": 10,
        "columns": 10,
        "mines": 10,
        "tiles": [],
        "state": "START"
      };

      for(var i=0; i < game.rows; i++) {
        var row = [];
        for(var j=0; j < game.columns; j++) {
          row.push({
            "flag" : false,
            "exposed" : true,
            "nearbyMines" : 0
          });
        }

        game.tiles.push(row);
      }

      $scope.games.push(game);
    };

    $scope.onClone = function(game) {
      $scope.games.push(game);
    };

    $scope.onRemove = function(index) {
      $scope.games.splice(index, 1);
    };

    $scope.onClick = function($event, tile, row, column) {
      if ($scope.gameOver) {
        return;
      }

      if ($event.ctrlKey) {
        tile.flag = !tile.flag;
        return;
      }

      // if ($scope.state == 'START') {
      //   firstClick($scope.tile);
      //   $scope.state = 'PLAYING';
      // }
    };

    $scope.onNewGame();
  }]).
  controller('TileCtrl', ['$scope', function($scope) {
    var tiles = $scope.game.tiles,

    visit = function(tile) {
      var exposed = 1;

      tile.exposed = true;

      if (tile.nearbyMines == 0) {
      }

    },

    cascade = function(tile) {

    },

    firstClick = function(tile) {
      var flat = tiles.reduce(function(a, b) {
        return a.concat(b);
      });

      flat.splice(tile.row * $scope.rows + tile.column, 1);

      shuffle(flat);

      $scope.game.mineSet = flat.slice(0, $scope.mines);
    };

  }]);

function shuffle(array) {
  var counter = array.length, temp, index;

  // While there are elements in the array
  while (counter--) {
    // Pick a random index
    index = (Math.random() * (counter + 1)) | 0;

  // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
