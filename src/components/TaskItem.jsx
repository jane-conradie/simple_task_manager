import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskItem = ({ task, newTaskName, setNewTaskName, deleteTask }) => {
  // to do set user input focus on form field after clikcing add
  const [toggleEdit, setToggleEdit] = useState(false);

  return (
    <div>
      {toggleEdit ? (
        <TaskForm
          submitTask={editTask}
          taskName={newTaskName}
          setNewTaskName={setNewTaskName}
        />
      ) : (
        <div>
          {task.name}
          {task.isComplete ? <p>i done</p> : <p></p>}

          <button
            onClick={() => {
              setToggleEdit(!toggleEdit);
              setNewTaskName(task.name);
            }}
          >
            edit
          </button>
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
