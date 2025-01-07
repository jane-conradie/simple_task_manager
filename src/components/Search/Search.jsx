import "./style.css";

const Search = ({ setSearchString }) => {
  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className={"sorter search"}>
      <h2>Search:</h2>
      <input className="search-bar" type="text" onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
