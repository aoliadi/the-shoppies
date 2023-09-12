import { useRef } from "react";

const SearchBar = ({ setsearchQuery }) => {
  const searchBar = useRef(null);

  const resetSearchBar = () => {
    searchBar.current.value = "";
  };

  const getSearchQuery = (searchBar) => {
    const inputVal = searchBar.current.value.trim();

    if (inputVal) {
      // console.log("value");
      setsearchQuery(inputVal);
      return;
    }

    resetSearchBar();
    searchBar.current.focus();
  };

  return (
    <>
      <input type="password" ref={searchBar} />
      <button
        onClick={() => {
          getSearchQuery(searchBar);
        }}
      >
        Check the password
      </button>
    </>
  );
};

export default SearchBar;
