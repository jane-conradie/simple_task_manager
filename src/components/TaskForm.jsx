import { useState } from "react";

const TaskForm = ({ taskName, setNewTaskName, submitTask }) => {
  // to do set user input focus on form field after clikcing add

  const handleInputFieldChange = (event) => {
    setNewTaskName(event.target.value);
  };

  return (
    <form onSubmit={submitTask}>
      <input type="text" value={taskName} onChange={handleInputFieldChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
