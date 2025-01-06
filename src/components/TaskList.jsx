import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

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
    <ol>
      {filteredTasks?.map((task) => (
        <div>
          {isEditing && task?.id === taskBeingEdited?.id ? (
            <TaskForm
              handleInputChange={handleInputChange}
              submitTask={editTask}
              taskName={newTaskName}
            />
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
      ))}
    </ol>
  );
};

export default TaskList;
