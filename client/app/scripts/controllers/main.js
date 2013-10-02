'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.persons = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.submit = function () {
      $scope.persons.push($scope.newPerson);
      $scope.newPerson = '';
    };
  });
