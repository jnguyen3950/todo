var app = angular.module('todo');

app.controller('todoController', todo);

app.$inject = ['$http'];
app.$inject = ['$interval'];

function todo($http, $interval) {
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

  vm.add = function(task) {
    var promise = $http.post('http://localhost:8080/todo/' + task);
    promise.then(function() {
      var update = $http.get('http://localhost:8080/todo/');
      update.then(function(todo) {
        vm.list = todo.data;
      })
    })
  }

  vm.current = function() {
    function update() {
      vm.date = new Date();
    }
    $interval(update, 1000);
  }

  vm.remain = function(due) {
    vm.timeLeft = Math.abs(due - vm.date);
  }
}
