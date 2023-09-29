import { useRef } from "react";

const SearchBox = ({ setSearchQuery }) => {
  const searchBar = useRef(null);

  const resetSearchBar = () => {
    searchBar.current.value = "";
  };

  const getSearchQuery = (searchBar) => {
    const inputVal = searchBar.current.value.trim();

    if (inputVal) {
      setSearchQuery(inputVal);
      return;
    }

    resetSearchBar();
    searchBar.current.focus();
  };

  return (
    <>
      <input
        type="search"
        ref={searchBar}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBox;
