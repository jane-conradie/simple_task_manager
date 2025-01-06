const Filter = ({ setFilter }) => {
  return (
    <div>
      <h2>Filter:</h2>
      <button onClick={() => setFilter(true)}>Completed</button>
      <button onClick={() => setFilter(false)}>Incompleted</button>
      <button onClick={() => setFilter("")}>All</button>
    </div>
  );
};

export default Filter;
