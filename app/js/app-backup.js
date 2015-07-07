var adminApp = angular.module('adminApp', [
  'ui.router',
  'adminControllers'
]);

adminApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersListCtrl'
      }).
      when('/users/:username', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl'
      }).
      when('/groups',{
      	 templateUrl: 'views/groups.html',
         controller: 'GroupsListCtrl'
      }).
      when('/groups/:name', {
        templateUrl: 'views/group-edit.html',
        controller: 'GroupEditCtrl'
      }).
      when('/groups/:name/users', {
        templateUrl: 'views/group-users.html',
        controller: 'GroupUsersCtrl'
      }).
      otherwise({
        redirectTo: '/users' 
      });
  }]);