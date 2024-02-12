export interface TodoInterface{
    Tasks:string[];
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}