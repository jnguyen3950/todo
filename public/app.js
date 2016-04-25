var app = angular.module('todo', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/todo', {
    templateUrl: 'todo/show.directive.html',
    controller: 'todoController',
    controllerAs: 'todo'
  });
}]);

app.controller('')
