import { create } from "zustand";

const useStore = create((set) => ({
  tasks:
    localStorage.getItem("tasks") === null
      ? []
      : JSON.parse(localStorage.getItem("tasks")),
  filteredTasks: [],
  taskBeingEdited: null,
  isEditing: false,
  newTaskName: "",
  filter: "",
  setFilter: (value) => {
    set(() => ({
      filter: value,
    }));
  },
  setSearch: (value) => {
    set(() => ({
      search: value,
    }));
  },
  search: "",
  filterTasks: () => {
    set((state) => ({
      filteredTasks:
        state.filter !== "" || state.search !== ""
          ? state.tasks.filter((task) =>
              state.filter === ""
                ? task.name.includes(state.search)
                : task.isComplete == state.filter &&
                  task.name.includes(state.search)
            )
          : state.tasks,
    }));
  },
  setNewTaskName: (text) => {
    set(() => ({
      newTaskName: text,
    }));
  },
  addTask: (text) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id:
            state.tasks.length > 0
              ? state.tasks[state.tasks.length - 1].id + 1
              : 0,
          name: text,
          isComplete: false,
        },
      ],
    }));
  },
  toggleEdit: (id, text) => {
    set((state) => ({
      taskBeingEdited: id,
      isEditing: !state.isEditing,
      newTaskName: text,
    }));
  },
  editTask: (text, id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, name: text } : task
      ),
      isEditing: false,
    }));
  },
  markTaskAsCompleted: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      ),
    }));
  },
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));

export default useStore;
