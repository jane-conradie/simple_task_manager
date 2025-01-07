import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

import "./style.css";

const TaskList = ({
  filteredTasks,
  isEditing,
  taskBeingEdited,
  editTask,
  handleInputChange,
  newTaskName,
  markAsComplete,
  deleteTask,
  toggleEdit,
}) => {
  return (
    <ol className="tasklist">
      {filteredTasks.length > 0 ? (
        filteredTasks?.map((task) => (
          <div>
            {isEditing && task?.id === taskBeingEdited?.id ? (
              <div className="edit-form">
                <TaskForm
                  handleInputChange={handleInputChange}
                  submitTask={editTask}
                  taskName={newTaskName}
                />
              </div>
            ) : (
              <TaskItem
                key={task.id}
                task={task}
                markAsComplete={markAsComplete}
                deleteTask={deleteTask}
                toggleEdit={toggleEdit}
              />
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
