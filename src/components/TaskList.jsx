import TaskItem from "./TaskItem";

const TaskList = ({ tasks, newTaskName, setNewTaskName, saveEdit }) => {
  return (
    <ol>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          newTaskName={newTaskName}
          setNewTaskName={setNewTaskName}
          saveEdit={saveEdit}
        />
      ))}
    </ol>
  );
};

export default TaskList;
