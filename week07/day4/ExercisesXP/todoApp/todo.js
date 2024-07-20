export class TodoList{

    idCount = 0;

    constructor(){
        this.tasks = []
    }

    addTask(taskDescription){

        this.idCount++
        let newTask = {
            id: this.idCount,
            task: taskDescription,
            isCompleted: false
        }
        this.tasks.push(newTask)

        return newTask
    }

    completeTask(task){
        task.isCompleted = true
    }

    listTasks(){
        console.log(this.tasks)
    }
}