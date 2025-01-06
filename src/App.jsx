import { useEffect, useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskName, setNewTaskName] = useState();

  const [isEditing, setIsEditing] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState();

  // const [showForm, setShowForm] = useState(false);
  // const [newTaskName, setNewTaskName] = useState("");
  // const [taskBeingEdited, setTaskBeingEdited] = useState();

  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (savedTasks) {
  //     setTasks(savedTasks);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // console.log(tasks);

  // const addTask = (event) => {
  //   event.preventDefault();

  //   const newTask = {
  //     id: tasks.length + 1,
  //     name: newTaskName,
  //     isCompleted: false,
  //   };

  //   setTasks(tasks.concat(newTask));
  //   setShowForm(false);
  // };

  // const saveEdit = (task) => {
  //   console.log(tasks);
  //   console.log(task);
  //   // remove old
  //   const taskToEdit = localStorage.getItem("tasks", task);
  //   console.log(taskToEdit);

  //   taskToEdit.name = task.name;
  //   // add new

  //   // setTasks(tasks.concat(task));
  // };

  // const deleteTask = (id) => {
  //   // remove from local stroage usign key
  //   const newTasks = tasks.filter((task) => task.id !== id);

  //   setTasks(tasks.concat(newTasks));

  //   // remove from tasks
  //   localStorage.removeItem("tasks", id);
  // };

  const validateField = () => {
    const parsedValue = newTaskName.replace(/\s/g, "");
    return parsedValue === "" ? false : true;
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

  const handleInputChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const deleteTask = (id) => {
    // remove from tasks
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (event) => {
    event.preventDefault();

    const isValid = validateField();

    if (!isValid) {
      alert("Cannot enter an empty field.");
      return;
    }

    // set form input as value
    console.log(taskBeingEdited);

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

  console.log(tasks);

  return (
    // <>
    //   <h1>To Do:</h1>
    //   <TaskList
    //     tasks={tasks}
    //     saveEdit={saveEdit}
    //     newTaskName={newTaskName}
    //     setNewTaskName={setNewTaskName}
    //   />
    //   {showForm ? (
    //     <TaskForm setNewTaskName={setNewTaskName} submitTask={addTask} />
    //   ) : (
    //     <div></div>
    //   )}
    //   <button onClick={() => setShowForm(!showForm)}>Add task</button>
    // </>
    <>
      <h1>To Do</h1>
      {tasks.map((task) => (
        <div>
          {isEditing && task && task.id === taskBeingEdited.id ? (
            <div>
              <form onSubmit={editTask}>
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={newTaskName}
                />
                <button>Save edit</button>
              </form>
            </div>
          ) : (
            <div>
              {task.name}
              <p>task completion: {String(task.isComplete)}</p>
              <button onClick={() => markAsComplete(task.id)}>
                mark as complete
              </button>
              <button onClick={() => deleteTask(task.id)}>delete</button>
              <button onClick={() => toggleEdit(task)}>edit</button>
            </div>
          )}
        </div>
      ))}
      {!isEditing ? (
        <form onSubmit={addTask}>
          <input type="text" onChange={handleInputChange} value={newTaskName} />
          <button>Save</button>
        </form>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
