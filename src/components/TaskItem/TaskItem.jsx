import "./style.css";

import { Checkmark } from "../../svgs/Checkmark";

const TaskItem = ({ task, markAsComplete, deleteTask, toggleEdit }) => {
  return (
    <div className="task">
      {task.name}
      <div className="buttons">
        <button className="checkmark" onClick={() => markAsComplete(task.id)}>
          <Checkmark fill={`${task.isComplete ? "green" : "grey"}`} />
        </button>
        <button onClick={() => toggleEdit(task)}>EDIT</button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
