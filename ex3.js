"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoClass = /** @class */ (function () {
    function TodoClass() {
        this.Tasks = [];
    }
    TodoClass.prototype.addTask = function (task) {
        var length = this.Tasks.push(task);
        console.log(task + " has been added to our Task List");
        return length;
    };
    TodoClass.prototype.listAllTasks = function () {
    };
    TodoClass.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted from our Task List");
        }
        else {
            console.log(task + " was not in our Task List");
        }
        return this.Tasks.length;
    };
    return TodoClass;
}());
var MyTodo = new TodoClass();
MyTodo.addTask("Sleep");
MyTodo.addTask("Eat");
MyTodo.listAllTasks();
