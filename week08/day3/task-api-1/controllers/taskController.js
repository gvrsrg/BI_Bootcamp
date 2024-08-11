const { _getAllTasks, _getTaskById, _createTask, _updateTask, _deleteTask } = require('../models/taskModel.js')

const getAllTasks =  (req, res) => {
    try {
        const tasks =  _getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTaskById =  (req, res) => {
    try {
        const { taskId } = req.params;
        const task =  _getTaskById(taskId);
        if (!task) {
            return res.status(404).json({ error: "Task not found." });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createTask =  (req, res) => {
    const { title, description } = req.body;

    try {
        const task =  _createTask(title, description);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTask =  (req, res) => {
    const { taskId } = req.params;
    const { title, description } = req.body;

    try {
        const task =  _updateTask(taskId, { title, description });
        if (task.length == 0) {
            return res.status(404).json({ error: "Task not found." });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTask =  (req, res) => {
    const { taskId } = req.params;

    try {
        const task =  _deleteTask(taskId);
        if (task.length == 0) {
            return res.status(404).json({ error: "Task not found." });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}
