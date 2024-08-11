const express = require("express");

const { getAllTasks, getTaskById, createTask, updateTask, deleteTask, } = require("../controllers/taskController.js");
const validateTask = require("../middleware/taskValidator.js");


const taskRouter = express.Router();

taskRouter.get("", getAllTasks);
taskRouter.get("/:taskId", getTaskById);
taskRouter.post("", validateTask, createTask);
taskRouter.put("/:taskId", validateTask, updateTask);
taskRouter.delete("/:taskId", deleteTask);



module.exports = {
    taskRouter,
}
