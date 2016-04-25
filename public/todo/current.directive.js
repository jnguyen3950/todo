var app = angular.module('todo');

app.directive('current', current);

function current() {
  return {
    templateUrl: 'todo/current.directive.html'
  }
}
