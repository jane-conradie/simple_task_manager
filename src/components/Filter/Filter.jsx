import "./style.css";

const Filter = ({ setFilter }) => {
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
