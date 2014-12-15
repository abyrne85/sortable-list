'use strict';

/**
 * @ngdoc function
 * @name angulistApp.controller:OnelistCtrl
 * @description
 * # OnelistCtrl
 * Controller of the angulistApp
 */
angular.module('angulistApp')
  .controller('OneListCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showMovedJobs=false;
  	$scope.updatedList =[];

	function initList(){
    	$http.get('jobs.json').success(function(data){
      		$scope.pool = data[0];
    	});
  	}
  	initList();

	$scope.resetList = function(){
    	$scope.showMovedJobs=false;
    	initList();
  	};

  	$scope.updateList=function(){
  		$scope.updatedList=[];
	    $scope.showMovedJobs=true;

 		for(var i=0;i<$scope.pool.length;i++){
		   $scope.updatedList.push($scope.pool[i].name);     
 		} 		
  	}

 });