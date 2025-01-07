import { useState } from "react";
import "./style.css";

const TaskForm = ({ taskName, handleInputChange, submitTask }) => {
  const [isValid, setIsValid] = useState(true);

  const validateField = () => {
    const parsedValue = taskName.replace(/\s/g, "");
    return parsedValue === "" ? false : true;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!validateField()) {
          setIsValid(validateField);
          alert("Field cannot be empty");
          return;
        }
        submitTask();
        setIsValid(true);
      }}
    >
      <div className="inputs">
        <input
          className={`${!isValid ? "invalid" : ""} input`}
          type="text"
          value={taskName}
          onChange={handleInputChange}
        />
        <button className="input" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
