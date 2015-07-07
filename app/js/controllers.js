var adminControllers = angular.module('adminControllers', ['ui.bootstrap']);

/*Контроллер списка пользователей*/
adminControllers.controller('UsersListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('users/users.json').success(function(usersData) {
    	$scope.users = usersData;
  	});

}]);

adminControllers.controller('UserEditCtrl', ['$scope', '$http', '$stateParams',
  function($scope, $http, $stateParams) {
    $scope.username = $stateParams.username;

	  $http.get('users/users.json').success(function(usersData) {
		  $scope.users = usersData;
	  });

}]);

adminControllers.controller('GroupsListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('groups/groups.json').success(function(groupsData) {
    	$scope.groups = groupsData;
  	});
}]);

adminControllers.controller('GroupEditCtrl', ['$scope', '$http', '$stateParams',
	function($scope, $http, $stateParams) {
		$scope.groupname = $stateParams.groupname;

		$http.get('groups/groups.json').success(function(groupsData) {
			$scope.groups = groupsData;
		});

	}]);


adminControllers.controller('GroupUsersCtrl', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
	$http.get('users/users.json').success(function(usersData) {
		$scope.users = usersData;
	});
	$scope.groupname = $stateParams.groupname;
}]);

