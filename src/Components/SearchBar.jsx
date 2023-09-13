import { useRef } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const searchBar = useRef(null);

  const resetSearchBar = () => {
    searchBar.current.value = "";
  };

  const getSearchQuery = (searchBar) => {
    const inputVal = searchBar.current.value.trim();

    if (inputVal) {
      // console.log("value");
      setSearchQuery(inputVal);
      return;
    }

    resetSearchBar();
    searchBar.current.focus();
  };

  return (
    <>
      <input type="search" ref={searchBar} />
      <button
        onClick={() => {
          getSearchQuery(searchBar);
        }}
      >
        Search
      </button>
    </>
  );
};

export default SearchBar;
