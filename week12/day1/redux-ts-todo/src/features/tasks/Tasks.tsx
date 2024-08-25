import TasksTitle from "./TasksTitle";
import TasksInput from "./TasksInput";
import TasksFilterButtons from "./TasksFilterButtons";
import TasksList from "./TasksList";

import { useTasks } from "./hooks";

const Tasks = () => {
  const tasks = useTasks();
  console.log(tasks);
  
  return (
    <>
      <h2>Tasks</h2>
      <TasksTitle taskscount={tasks.length} />
      <TasksInput />
      <TasksFilterButtons />
      <TasksList />
    </>
  );
};
export default Tasks;
