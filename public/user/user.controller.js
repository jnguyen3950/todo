var app = angular.module('todo');

app.controller('userController', user);

app.$inject = ['$scope', 'userService', 'mySharedService'];

function home(userService, mySharedService) {
  var vm = this;
  vm.handleClick = function(msg) {
    sharedService.prepForBroadcast(msg);
  };

  vm.$on('handleBroadcast', function() {
    vm.message = sharedService.message;
  });
};
