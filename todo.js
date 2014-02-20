var Todo = angular.module('Todo', []);

Todo.controller('TodoListCtrl', function ($scope) {
    $scope.todos = [
        {"name": "first step"},
        {"name": "second step"},
        {"name": "third step"}
    ];

    $scope.addTodo = function () {
        $scope.todos.push({"name": $scope.toBeAdded});
        $scope.toBeAdded = "";
    };

    $scope.removeTodo = function (todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };
});
