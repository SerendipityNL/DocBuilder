angular.module('todo', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'todos/list',
				controller: listTodos
			}).
			when('/new', {
				templateUrl: 'todos/new',
				controller: saveTodo
			}).
			when('/edit/:id', {
				templateUrl: 'todos/edit',
				controller: saveTodo
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

function saveTodo($scope, $http, $location) {
	$scope.save = function() {
		$http.post('todos/save', $scope.todo).
			success(function(data) {
				$location.path('/');				
		});
	}
}
