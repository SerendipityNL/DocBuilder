var Sequelize = require('sequelize');
var sequelize = new Sequelize('angular-todo', 'root', 'usbw', {
	host: 'localhost',
	port: 3306,
	freezeTableName: true
});

// Set the todo model
var Todo = sequelize.define('Todo', 
	{	name: Sequelize.STRING,
		title: Sequelize.STRING,
		sort: {type: Sequelize.INTEGER, defaultValue: 0}
	},
	{	tableName: 'todos',
		underscored: true
	}
);

exports.index = function(req, res) {
	res.render('todos/index.jade', {
		pageTitle: 'Todolist AngularJS'
	});
}

exports.findAll = function(req, res) {
	Todo.findAll({order: 'sort ASC'}).success(function(todos) {
		res.send(todos)
	});
}

exports.findOne = function(req, res) {
	var id = req.params.id;
	Todo.find(id).success(function(todo) {
		res.send(todo);
	});
}

exports.insert = function(req, res) {
	Todo.create({
		name: req.body.name, 
		title: req.body.title
	}).success(function(todo) {
		res.send(todo);
	});
}

exports.update = function(req, res) {
	var id = req.params.id;
	Todo.find(id).success(function(todo) {
		todo.updateAttributes({
			name: req.body.name, 
			title: req.body.title
		}).success(function() {
			res.send('Done!');
		});
	});
}

function updateById(todoId, data) {
	Todo.find(todoId).success(function(todo) {
		todo.updateAttributes(data).success(function() {});
	});
}

exports.order = function(req, res) {
	var todos = req.body;
	var data = {}
	
	for (i = 0; i < todos.length; i++) {
		var data = {sort: i}
		updateById(todos[i], data);
	}
}

exports.delete = function(req, res) {
	var id = req.params.id;
	Todo.find(id).success(function(todo) {
		todo.destroy().success(function() {
			res.send('Todo deleted!');
		});
	});
}

exports.partial = function(req, res){
	var filePath = 'todos/partials/'+req.params.partial+'.jade';
	res.render(filePath);
};