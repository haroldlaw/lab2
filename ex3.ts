import { TodoInterface } from "./TodoInterface";

class TodoClass implements TodoInterface{
    Tasks: string[] = [];

    addTask(task:string):number{
        let length:number = this.Tasks.push(task);
        console.log(task + " has been added to our Task List");
        return length;
    }

    listAllTasks():void{

    }
    deleteTask(task:string):number{
        let index:number = this.Tasks.indexOf(task);
        if(index>-1){
            this.Tasks.splice(index,1);
            console.log(task + " has been deleted from our Task List");
        }else{
            console.log(task + " was not in our Task List");
        }
        return this.Tasks.length;
    }
}

let MyTodo = new TodoClass();
MyTodo.addTask("Sleep");
MyTodo.addTask("Eat");
MyTodo.listAllTasks();
