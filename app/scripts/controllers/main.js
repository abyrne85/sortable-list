'use strict';

/**
 * @ngdoc function
 * @name angulistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulistApp
 */
angular.module('angulistApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  var tmpList = [];
  
  

  $http.get('./jobs.json').success(function(data){
		$scope.jobs = data;

    $scope.pool1 = $scope.jobs[0];
    $scope.pool2 = $scope.jobs[1];
  
  });
  
  $scope.sortableOptions = {
    placeholder: "job",
    connectWith: ".jobs-container"
  };

    
});
