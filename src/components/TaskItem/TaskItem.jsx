import "./style.css";

import useStore from "../../store";
import { useShallow } from "zustand/shallow";

import { default as pen } from "../../svgs/pen.svg";
import { default as trash } from "../../svgs/trash.svg";

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
        <button onClick={() => toggleEdit(task.id, task.name)}>
          <img src={pen} alt="pen image for editing" className="icon" />
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>
          <img src={trash} alt="trash image for deleting" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
