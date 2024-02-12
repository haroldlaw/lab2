let Tasks:string[]=[];

function addTask(task:string):number{
    let length:number = Tasks.push(task);
    console.log(task + " has been added to our Task List");
    return length;
}

function listAllTasks():void{
    Tasks.forEach(function(item){
        console.log("Item: "+item+ " is in my Tasks List.");
    })
}

function deleteTask(task:string):number{
    let index:number = Tasks.indexOf(task);

    if(index>-1){
        Tasks.splice(index,1);
        console.log(task + " has been deleted from our Task List");
    }else{
        console.log(task + " was not in our Task List");
    }
    return Tasks.length;
}

addTask("Eat");
addTask("Work");
listAllTasks();
deleteTask("Eat");
deleteTask("Sleep");
listAllTasks();
