import "./style.css";

import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

const Search = ({ setSearchString }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useDebounce(searchValue, 500);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setSearchString(searchValue);
  }, [searchQuery]);

  return (
    <div className={"sorter search"}>
      <h2>Search:</h2>
      <input
        className="search-bar"
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
