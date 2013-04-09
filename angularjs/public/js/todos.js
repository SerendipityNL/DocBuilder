angular.module('todo', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'todos/list',
				controller: listTodos
			}).
			when('/new', {
				templateUrl: 'todos/new',
				controller: createTodo
			}).
			when('/edit/:id', {
				templateUrl: 'todos/edit',
				controller: updateTodo
			}).
			when('/delete/:id', {
				templateUrl: 'todos/delete',
			}).
			otherwise({
				redirectTo:'/'
			});
	});

function listTodos($scope, $http) {
	$http.get('todos/find_all').success(function(todos, status, headers, config) {
		$scope.todos = todos;
	});
}

function updateTodo($scope, $http, $routeParams) {
	id = $routeParams.id;
	$http.get('todos/find/'+id).success(function(todo) {
		$scope.todo = todo;
	})
}

function createTodo($scope, $http) {
	$scope.save = function() {
		console.log($scope.todo);
	}
}