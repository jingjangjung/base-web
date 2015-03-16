'use strict';

/**
 * @ngdoc function
 * @name baseWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baseWebApp
 */
angular.module('baseWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
