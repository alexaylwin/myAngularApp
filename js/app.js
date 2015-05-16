var myApp = angular.module('myApp', ['ngRoute', 'myAppControllers']);

myApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.when(
			'/list', {
				templateUrl: 'views/list.html',
				controller: 'listController'
			}
		).when(
			'/item/:itemId', {
				templateUrl: 'views/details.html',
				controller: 'detailsController'
			}
		).otherwise(
			{
				redirectTo: '/list'
			}
		); 
}])
