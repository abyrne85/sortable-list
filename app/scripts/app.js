'use strict';

/**
 * @ngdoc overview
 * @name angulistApp
 * @description
 * # angulistApp
 *
 * Main module of the application.
 */
angular
  .module('angulistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/twolists', {
        templateUrl: 'views/twolists.html',
        controller: 'TwoListsCtrl'
      })
      .when('/onelist', {
        templateUrl: 'views/onelist.html',
        controller: 'OneListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
