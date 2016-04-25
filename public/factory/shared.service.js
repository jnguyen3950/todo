var app = angular.module('todo');

app.factory('mySharedService', mySharedService);

function mySharedService() {
  var sharedService = {};
  function share() {
    sharedService.message = '';
    sharedService.prepForBroadcast = function(msg) {
      this.message = msg;
      this.broadcastItem();
    };
    sharedService.broadcastItem = function() {
      $rootScope.$broadcast('handleBroadcast');
    };
  };
  return sharedService;
};
