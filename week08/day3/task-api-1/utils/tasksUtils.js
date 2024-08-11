const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../config/tasks.json");

function readTasks() {
  try {
    const data = fs.readFileSync(filePath, "utf-8")

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    throw new Error("Error reading tasks file");
  }
}

function writeTasks(tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
  } catch (err) {
    throw new Error("Error writing tasks file");
  }
}

module.exports = {
  readTasks,
  writeTasks,
};