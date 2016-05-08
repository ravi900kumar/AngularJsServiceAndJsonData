app.controller('userslistController', function($scope, $routeParams, usersService){
	 $scope.userlistmessage = 'userslistController  userlistsmessage';
	 $scope.allUserslist =  usersService.allUsers();
	 

});
