import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

import "./style.css";
import useStore from "../../store";
import { useShallow } from "zustand/shallow";

import { Checkmark } from "../../svgs/Checkmark";
import { useEffect } from "react";

const TaskList = () => {
  const {
    tasks,
    isEditing,
    taskBeingEdited,
    editTask,
    markTaskAsCompleted,
    filterTasks,
    filteredTasks,
  } = useStore(
    useShallow((state) => {
      return {
        tasks: state.tasks,
        isEditing: state.isEditing,
        taskBeingEdited: state.taskBeingEdited,
        editTask: state.editTask,
        markTaskAsCompleted: state.markTaskAsCompleted,
        filterTasks: state.filterTasks,
        filteredTasks: state.filteredTasks,
      };
    })
  );

  useEffect(() => {
    filterTasks();
  }, [tasks]);

  return (
    <ol className="tasklist">
      {filteredTasks?.length > 0 ? (
        filteredTasks?.map((task) => (
          <div>
            {isEditing && task?.id === taskBeingEdited ? (
              <div className="edit-form">
                <TaskForm submitTask={editTask} />
              </div>
            ) : (
              <div>
                <TaskItem key={task.id} task={task} />
                <button
                  className="checkmark"
                  onClick={() => markTaskAsCompleted(task.id)}
                >
                  <Checkmark fill={`${task.isComplete ? "green" : "grey"}`} />
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </ol>
  );
};

export default TaskList;
