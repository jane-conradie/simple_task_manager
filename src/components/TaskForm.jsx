const TaskForm = ({ taskName, handleInputChange, submitTask }) => {
  return (
    <form onSubmit={submitTask}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
