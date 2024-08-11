const { readTasks, writeTasks } = require("../utils/tasksUtils.js");

function _getAllTasks() {
    return readTasks();
}

function _getTaskById(taskId) {
    const tasks = readTasks();
    return tasks.find((task) => task.id == taskId);
}

 function _createTask(title, description) {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
    };
    tasks.push(newTask);
    writeTasks(tasks);
    return newTask;
}

 function _updateTask(taskId, newDetails) {
    const tasks = readTasks();

    const newTasks = tasks.map((task) => {
        if (task.id == taskId) {
            return { ...task, ...newDetails };
        }
        return task;
    });
     writeTasks(newTasks);

    return newTasks;
}

 function _deleteTask(taskId) {
    const tasks = readTasks();
    const newTasks = tasks.filter((task) => task.id != taskId);
    writeTasks(newTasks);
    return newTasks;
}

module.exports = {
    _getAllTasks,
    _getTaskById,
    _createTask,
    _updateTask,
    _deleteTask,
};

