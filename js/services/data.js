'use strict';
angular.module('todoListApp')


.service('dataService', function($http){
	this.helloWorld = function(){
		console.log('this is services');
	}
	this.getTodos = function(callback){
		$http.get('mock/todos.json').
		then(callback)
	}
	this.deleteTodo= function(todo){
		console.log("The " + todo.name + " todo has been deleted");
	};
	this.saveTodo = function(todo){
		console.log("The " + todo.name + "todo has been saved");
}
})