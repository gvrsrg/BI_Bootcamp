import { useTasks } from "./hooks";
import TaskItem from "./TaskItem";
// import { nanoid } from "@reduxjs/toolkit";

const TasksList = () => {
  const tasks = useTasks();
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
export default TasksList;
