import "./App.css";

import { TaskForm, TaskList, Search, Filter } from "./components";

import { useShallow } from "zustand/shallow";
import useStore from "./store";

function App() {
  const { addTask, isEditing } = useStore(
    useShallow((state) => {
      return {
        addTask: state.addTask,
        isEditing: state.isEditing,
      };
    })
  );

  return (
    <>
      <h1>To Do</h1>
      <div className="sorting">
        <Filter />
        <Search />
      </div>
      <TaskList />
      <h2>Add a new task:</h2>
      {!isEditing ? <TaskForm submitTask={addTask} /> : <div></div>}
    </>
  );
}

export default App;
