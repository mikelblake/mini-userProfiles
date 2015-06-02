var app = angular.module('userProfiles');

app.controller('Main-Controller', function($scope, mainService){
		$scope.getUsers = function(){
		$scope.users = mainService.getUsers();
	}

	$scope.getUsers();
})