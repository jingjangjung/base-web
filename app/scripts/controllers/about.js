'use strict';

/**
 * @ngdoc function
 * @name baseWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the baseWebApp
 */
angular.module('baseWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
