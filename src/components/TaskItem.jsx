const TaskItem = ({ task, markAsComplete, deleteTask, toggleEdit }) => {
  return (
    <div>
      {task.name}
      <p>task completion: {String(task.isComplete)}</p>
      <button onClick={() => markAsComplete(task.id)}>mark as complete</button>
      <button onClick={() => deleteTask(task.id)}>delete</button>
      <button onClick={() => toggleEdit(task)}>edit</button>
    </div>
  );
};

export default TaskItem;
