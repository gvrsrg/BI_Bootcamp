import { TodoList } from "./todo.js";

let myTodoList = new TodoList();

let newTask1 = myTodoList.addTask("Buy milk");
let newTask2 = myTodoList.addTask("Buy eggs");
let newTask3 = myTodoList.addTask("Buy bread");

myTodoList.completeTask(newTask2)

myTodoList.listTasks()