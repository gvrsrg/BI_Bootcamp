import { Item } from "../../model/ListItem";
import TaskRemove from "./TaskRemove";
// import TaskEdit from "./TaskEdit";
import { useCheckTask } from "./hooks";
import "./tasks.css";

type TaskItemProps = {
  task: Item;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const check = useCheckTask();

  // const edit = true;

  const handleClick = () => {
    check(task.id);
  };

  // const editTask = () => {
  //   console.log("Edit task");
  // }

  return (
    <>
      <div>
        <span
          // contentEditable={edit}
          className={task.checked ? "completed" : ""}
          onClick={handleClick}
        >
          {task.item}
        </span>
        {/* <TaskEdit /> */}
        <TaskRemove id={task.id} />
      </div>
    </>
  );
};
export default TaskItem;
