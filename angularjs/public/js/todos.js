angular.module('todo', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'todos/list',
				controller: todoIndex
			}).
			when('/new', {
				templateUrl: 'todos/new',
			}).
			when('/edit/:id', {
				templateUrl: 'todos/edit',
				controller: todoFind
			}).
			when('/delete/:id', {
				templateUrl: 'todos/delete',
			}).
			otherwise({
				redirectTo:'/'
			});
	});

function todoIndex($scope, $http) {
	$http.get('todos/find_all').success(function(todos, status, headers, config) {
		$scope.todos = todos;
	});
}

function todoFind($scope, $http, $routeParams) {
	id = $routeParams.id;
	$http.get('todos/find/'+id).success(function(todo) {
		$scope.todo = todo;
	})
}