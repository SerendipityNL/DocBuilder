var fs = require('fs');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('angular-todo', 'root', 'usbw', {
	host: 'localhost',
	port: 3306,
	freezeTableName: true
});


var Todo = sequelize.define('Todo', 
	{	name: Sequelize.STRING,
		title: Sequelize.STRING
	},
	{tableName: 'todos'}
);

exports.index = function(req, res) {
	res.render('todos/index.jade', {
		pageTitle: 'Todolist AngularJS'
	});
}

exports.findAll = function(req, res) {
	Todo.findAll().success(function(rows) {
		res.send(rows)
	});
}

exports.findOne = function(req, res) {
	id = req.params.id;
	Todo.find(id).success(function(row) {
		res.send(row);
	})
}

exports.partial = function(req, res){
	var filePath = 'todos/partials/'+req.params.partial+'.jade';
	res.render(filePath);
};