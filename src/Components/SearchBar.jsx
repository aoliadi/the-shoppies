import { useRef, useState } from "react";

const SearchBar = () => {
  const searchBar = useRef(null);
  const [searchQuery, setsearchQuery] = useState("");

  const onBtnClick = ({ current: { value: inputVal } }) => {
    if (inputVal) {
      console.log(inputVal);
      setsearchQuery(inputVal);
    }
    searchBar.current.focus();
  };

  return (
    <>
      <input type="password" ref={searchBar} />
      <button
        onClick={() => {
          onBtnClick(searchBar);
        }}
      >
        Check the password
      </button>
    </>
  );
};

export default SearchBar;
