var app = angular.module('todo');

app.controller('homeController', home);

app.$inject = ['userService'];

function home(userService) {
  var vm = this;
  vm.message = "Welcome ";

  var promise = userService.getUser();
  promise.then(function(info) {
    vm.user = info.data;
  })
}
