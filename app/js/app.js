var adminApp = angular.module('adminApp', [
  'ui.router',
  'adminControllers'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'views/users.html',
      controller: 'UsersListCtrl'
    })
    .state('userEdit', {
      url: '/users/:username',
      templateUrl: 'views/user-edit.html',
      controller: 'UserEditCtrl'
    })
    .state('groups', {
      url: '/groups',
      templateUrl: 'views/groups.html',
      controller: 'GroupsListCtrl'
    })
    .state('groupEdit', {
      url: '/groups/:groupname',
      templateUrl: 'views/group-edit.html',
      controller: 'GroupEditCtrl'
    })
      .state('groupUsers', {
        url:'/groups/:groupname/users',
        templateUrl: 'views/group-users.html',
        controller: 'GroupUsersCtrl'
      })
});