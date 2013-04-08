angular.module('todo', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'todos/list',
				controller: todoIndex
			}).
			when('/new', {
				templateUrl: 'todos/new',
				controller: todoNew
			}).
			when('/edit/:todoId', {
				templateUrl: 'todos/edit'm
				controller: todoEdit
			}).
			when('/delete/:todoId', {
				templateUrl: 'todos/delete',
				controller: todoDelete
			}).
			otherwise({
				redirectTo:'/'
			});
	});

function todoIndex($scope, $http) {
	$http.get('todos/list.json').
		success(function(data, status, headers, config) {
			$scope.todos = data;
	});
}

function todoNew($scope, $http) {

}

function todoEdit($scope, $http) {
}

function todoDelete($scope, $http) {
}