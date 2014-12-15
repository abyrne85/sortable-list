'use strict';

describe('Controller: OnelistCtrl', function () {

  // load the controller's module
  beforeEach(module('angulistApp'));

  var OnelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnelistCtrl = $controller('OnelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
