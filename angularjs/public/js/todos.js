angular.module('todo', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'todos/list',
				controller: listTodos
			}).
			when('/new', {
				templateUrl: 'todos/new',
				controller: insertTodo
			}).
			when('/edit/:id', {
				templateUrl: 'todos/edit',
				controller: updateTodo
			}).
			when('/delete/:id', {
				templateUrl: 'todos/delete',
				controller: deleteTodo
			}).
			otherwise({
				redirectTo:'/'
			});
	});

function listTodos($scope, $http) {
	$http.get('todos/find_all').success(function(todos, status, headers, config) {
		$scope.sortableArray = [];
		for (var i = 0; i<todos.length; i++) { 
			$scope.sortableArray.push(todos[i].id);
		}
		$scope.todos = todos;
	});

	$scope.dragStart = function(e, ui) {
		ui.item.data('start', ui.item.index());
	}

	$scope.dragEnd = function(e, ui) {
		var start = ui.item.data('start'),
			end = ui.item.index();

		$scope.sortableArray.splice(end, 0, $scope.sortableArray.splice(start, 1)[0]);

		$scope.$apply();
		console.log($scope.sortableArray);
		$http.post('todos/order', $scope.sortableArray).
			success(function() {});
	}

	var sortableEle;
	sortableEle = $('#sortable').sortable({
		start: $scope.dragStart,
		update: $scope.dragEnd
	});
}

function insertTodo($scope, $http, $location) {
	$scope.save = function() {
		$http.post('todos/save', $scope.todo).
			success(function(todo) {
				$location.path('/');
		});
	}
}

function updateTodo($scope, $http, $location, $routeParams) {
	var todoId = $routeParams.id;
	$http.get('todos/find/'+todoId).success(function(todo) {
		$scope.todo = todo;
	});

	$scope.save = function() {
		$http.post('todos/save/'+todoId, $scope.todo).
			success(function(todo) {
				$location.path('/');
		});
	}
}

function deleteTodo($scope, $http, $location, $routeParams) {
	var todoId = $routeParams.id;
	$scope.delete = function() {
		$http.post('todos/delete/'+todoId, {delete: true})
			.success(function() {
				$location.path('/');

		});
	}	
}
