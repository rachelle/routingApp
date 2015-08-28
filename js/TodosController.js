(function() {
  'use strict';

  angular
    .module("todoApp")
    .controller("TodosController", TodosController);

  TodosController.$inject = ['DataService'];

  function TodosController(DataService){
    var vm = this;

    // have our local lists point to the Data Service,
    // so that our templates watch the original arrays...
    vm.todoId   = DataService.todoId;
    vm.todoList = DataService.todoList;
    // however! when we make changes internally, we change the
    // Data Service directly (see code below), while reading
    // from it via the vm's references.

    vm.addTodo        = addTodo;
    vm.deleteTodo     = deleteTodo;
    vm.completedTodos = completedTodos;
    vm.remainingTodos = remainingTodos;
    vm.s = s; // add an s to plural words!

    function addTodo() {
      DataService.todoList.push({id: vm.todoId, task: vm.text, done: false});
      DataService.todoId++;
      vm.text = null;
    }

    function deleteTodo(todo) {
      DataService.todoList = DataService.todoList.filter(function(td) {
        return td != todo;
      });
    }

    function completedTodos() {
      return DataService.todoList.filter(function(todo) {
        return todo.complete;
      });
    }

    function remainingTodos() {
      return DataService.todoList.filter(function(todo) {
        return !todo.complete;
      });
    }

    function s(vals, capital) {
      var letter = vals.length === 1 ? '' : 's';
      return capital ? letter.toUpperCase() : letter;
    }
  }

})();