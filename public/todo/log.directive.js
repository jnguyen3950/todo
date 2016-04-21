var app = angular.module('todo');

app.directive('log', log);

function log() {
  return {
    templateUrl: 'todo/log.directive.html'
  }
}
