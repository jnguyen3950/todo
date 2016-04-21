var app = angular.module('todo');

app.controller('todoController', todo);

app.$inject = ['$interval'];
app.$inject = ['userService'];

function todo($http, $interval, userService) {
  var vm = this;
  var user = {name: "Justin"};
  var promise = userService.getList(user.name);
  promise.then(function(todo) {
    vm.list = todo.data;
  })

  vm.switch = function(userName) {
    user.name = userName;
    var update = userService.getList(user.name);
    update.then(function(todo) {
      vm.list = todo.data;
    })
  }

  vm.finished = function(item) {
    var deleted = userService.finished(user.name, item.exercise);
    deleted.then(function() {
      var update = userService.getList(user.name);
      update.then(function(todo) {
        vm.list = todo.data;
      })
    })
  }

  vm.add = function(task) {
    var added = userService.add(user.name, task);
    added.then(function() {
      var update = userService.getList(user.name);
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

  // vm.remain = function(due) {
  //   vm.timeLeft = Math.abs(due - vm.date);
  // }
}
