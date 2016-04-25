var app = angular.module('todo');

app.factory('userService', userService);

userService.$inject = ['$http'];

function userService($http) {
  function getUser() {
    return $http.get('http://localhost:8080/user');
  }

  function getList(userName) {
    return $http.get('http://localhost:8080/todo/' + userName);
  }

  function add(userName, exercise) {
    return $http.post('http://localhost:8080/todo/' + userName + '/' + exercise)
  }

  function finished(userName, exercise) {
    return $http.delete('http://localhost:8080/todo/' + userName + '/' + exercise)
  }

  return {
    getUser: getUser,
    getList: getList,
    add: add,
    finished: finished
  }
}
