var app = angular.module('todo', []);

app.controller('homeController', home);

app.$inject = ['$http'];

function home($http) {
  var vm = this;
  vm.message = "Welcome ";
  var promise = $http.get('http://localhost:8080/user');
  promise.then(function(info) {
    vm.user = info.data;
  })
}

app.controller('todoController', todo);

app.$inject = ['$http'];

function todo($http) {
  var vm = this;
  var promise = $http.get('http://localhost:8080/todo/Justin');
  promise.then(function(todo) {
    vm.list = todo.data;
  })

  vm.finished = function(item) {
    var position = vm.list.indexOf(item);
    vm.list.splice(position, 1);
  }
}
