import { useEffect, useState } from "react";
import "./App.css";

import { TaskForm, TaskList, Search, Filter } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskName, setNewTaskName] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState();

  const [filter, setFilter] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const validateField = () => {
    const parsedValue = newTaskName.replace(/\s/g, "");
    return parsedValue === "" ? false : true;
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    setNewTaskName(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();

    const isValid = validateField();

    if (!isValid) {
      alert("Cannot enter an empty field.");
      return;
    }

    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
      name: newTaskName,
      isComplete: false,
    };

    setTasks(tasks.concat(task));

    setNewTaskName("");
  };

  const deleteTask = (id) => {
    // remove from tasks
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (event) => {
    event.preventDefault();

    const isValid = validateField();

    // form validation
    if (!isValid) {
      alert("Cannot enter an empty field.");
      return;
    }

    // update task details
    const task = tasks.find((t) => t.id === taskBeingEdited.id);
    const changedTask = { ...task, name: newTaskName };

    setTasks(
      tasks.map((task) => (task.id === changedTask.id ? changedTask : task))
    );

    setTaskBeingEdited();
    setIsEditing(false);
    setNewTaskName("");
  };

  const markAsComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    const changedTask = { ...task, isComplete: !task.isComplete };

    setTasks(
      tasks.map((task) => (task.id === changedTask.id ? changedTask : task))
    );
  };

  const toggleEdit = (task) => {
    setTaskBeingEdited(task);
    setIsEditing(true);
    setNewTaskName(task.name);
  };

  const filteredTasks =
    filter !== "" || searchString !== ""
      ? tasks.filter((task) =>
          filter === ""
            ? task.name.includes(searchString)
            : task.isComplete == filter && task.name.includes(searchString)
        )
      : tasks;

  return (
    <>
      <h1>To Do</h1>
      <Filter setFilter={setFilter} />
      <Search setSearchString={setSearchString} />
      <TaskList
        filteredTasks={filteredTasks}
        isEditing={isEditing}
        markAsComplete={markAsComplete}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleEdit={toggleEdit}
        taskBeingEdited={taskBeingEdited}
        newTaskName={newTaskName}
        handleInputChange={handleInputChange}
      />
      <h2>Add a new task:</h2>
      {!isEditing ? (
        <TaskForm
          handleInputChange={handleInputChange}
          submitTask={addTask}
          taskName={newTaskName}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
