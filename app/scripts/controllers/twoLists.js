'use strict';

/**
 * @ngdoc function
 * @name angulistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulistApp
 */
angular.module('angulistApp')
  .controller('TwoListsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.showMovedJobs=false;


var pool1location, pool2location;
$scope.updatedPool1=[];
$scope.updatedPool2=[];

 function initList(){

    $http.get('jobs.json').success(function(data){

  		$scope.jobs = data;

      $scope.pool1 = $scope.jobs[0];
      $scope.pool2 = $scope.jobs[1];

      pool1location = $scope.pool1[0].pool;
      pool2location = $scope.pool2[0].pool;

    });
  }
  initList();


  $scope.sortableOptions = {
    
    placeholder: 'job',
    connectWith: '.jobs-container',
    'stop':function(){
      updateList();
    }
  };

    
  $scope.resetList = function(){
    $scope.showMovedJobs=false;
    initList();
  };

  function updateList(){

    $scope.updatedPool1=[];
    $scope.updatedPool2=[];

    for(var i=0;i<$scope.pool1.length;i++){
        $scope.updatedPool1.push($scope.pool1[i]);
     
    }
    for(var i=0;i<$scope.pool2.length;i++){
        $scope.updatedPool2.push($scope.pool2[i]);
    }

    $scope.showMovedJobs=true;

  };


});
