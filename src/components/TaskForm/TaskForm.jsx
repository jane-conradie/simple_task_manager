import { useEffect, useState } from "react";
import "./style.css";

import useStore from "../../store";
import { useShallow } from "zustand/shallow";

const TaskForm = ({ submitTask }) => {
  const { tasks, newTaskName, setNewTaskName, taskBeingEdited } = useStore(
    useShallow((state) => {
      return {
        tasks: state.tasks,
        newTaskName: state.newTaskName,
        setNewTaskName: state.setNewTaskName,
        taskBeingEdited: state.taskBeingEdited,
      };
    })
  );

  const [isValid, setIsValid] = useState(true);

  const validateField = () => {
    const parsedValue = newTaskName.replace(/\s/g, "");
    return parsedValue === "" ? false : true;
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!validateField()) {
          setIsValid(validateField);
          alert("Field cannot be empty");
          return;
        }
        setNewTaskName("");
        submitTask(newTaskName, taskBeingEdited);
        setIsValid(true);
      }}
    >
      <div className="inputs">
        <input
          className={`${!isValid ? "invalid" : ""} input`}
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button className="input" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
