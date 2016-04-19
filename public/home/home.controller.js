var app = angular.module('todo');

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
