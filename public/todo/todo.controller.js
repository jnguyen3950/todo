var app = angular.module('todo');

app.controller('todoController', todo);

app.$inject = ['$http'];

function todo($http) {
  var vm = this;
  var promise = $http.get('http://localhost:8080/todo/');
  promise.then(function(todo) {
    vm.list = todo.data;
  })

  vm.finished = function(item) {
    var deleted = $http.delete('http://localhost:8080/todo/' + item.exercise);
    deleted.then(function() {
      var update = $http.get('http://localhost:8080/todo/');
      update.then(function(todo) {
        vm.list = todo.data;
      })
    })
  }

  vm.add = function(item) {
    var promise = $http.post('http://localhost:8080/todo/' + item);
    promise.then(function() {
      var update = $http.get('http://localhost:8080/todo/');
      update.then(function(todo) {
        vm.list = todo.data;
      })
    })
  }
}
