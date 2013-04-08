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
			when('/edit/:id', {
				templateUrl: 'todos/edit',
				controller: todoNew
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
	$scope.form = {};
	$scope.submitPost = function () {
		alert('form submitted');
		/*
		$http.post('/api/post', $scope.form).
		success(function(data) {
			$location.path('/');
		});
		*/
	};
}