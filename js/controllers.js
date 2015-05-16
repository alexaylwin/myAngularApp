myAppControllers = angular.module('myAppControllers', []);
myAppControllers.controller('listController', ['$scope', '$http', 
	function($scope, $http) {
		$scope.mylist = {'name' : 'Item1'};	
	}
]);

myAppControllers.controller('detailsController', ['$scope', '$http', 
	function($scope, $http) {
	
	}
]);