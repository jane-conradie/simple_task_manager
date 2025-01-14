import "./style.css";

import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

import useStore from "../../store";
import { useShallow } from "zustand/shallow";

const Search = () => {
  const { search, setSearch, filterTasks } = useStore(
    useShallow((state) => {
      return {
        search: state.search,
        setSearch: state.setSearch,
        filterTasks: state.filterTasks,
      };
    })
  );

  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useDebounce(searchValue, 500);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setSearch(searchValue);
  }, [searchQuery]);

  useEffect(() => {
    filterTasks();
  }, [search]);

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
