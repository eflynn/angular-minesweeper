'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  it('should have 10 rows', inject(function($controller) {
    var scope = {};

    var ctrl = $controller('Minefield', {$scope: scope});

    expect(scope.game.rows).toBe(10);
  }));
});
