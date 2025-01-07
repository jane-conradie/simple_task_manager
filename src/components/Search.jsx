const Search = ({ setSearchString }) => {
  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className={"sorter"}>
      <h2>Search:</h2>
      <input type="text" onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
