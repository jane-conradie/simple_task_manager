import "./style.css";

import useStore from "../../store";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

const Filter = () => {
  const { filter, setFilter, filterTasks } = useStore(
    useShallow((state) => {
      return {
        filter: state.filter,
        setFilter: state.setFilter,
        filterTasks: state.filterTasks,
      };
    })
  );

  useEffect(() => {
    filterTasks();
  }, [filter]);

  return (
    <div className={"sorter"}>
      <h2>Filter:</h2>
      <button onClick={() => setFilter(true)}>Completed</button>
      <button onClick={() => setFilter(false)}>Incompleted</button>
      <button onClick={() => setFilter("")}>All</button>
    </div>
  );
};

export default Filter;
