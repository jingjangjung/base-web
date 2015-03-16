'use strict';

/**
 * @ngdoc overview
 * @name baseWebApp
 * @description
 * # baseWebApp
 *
 * Main module of the application.
 */
angular
  .module('baseWebApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
