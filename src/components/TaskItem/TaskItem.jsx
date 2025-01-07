import "./style.css";

import useStore from "../../store";
import { useShallow } from "zustand/shallow";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleEdit } = useStore(
    useShallow((state) => {
      return {
        deleteTask: state.deleteTask,
        toggleEdit: state.toggleEdit,
        editTask: state.editTask,
      };
    })
  );

  return (
    <div className="task">
      <p>{task.name}</p>
      <div className="buttons">
        <button onClick={() => toggleEdit(task.id, task.name)}>EDIT</button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
