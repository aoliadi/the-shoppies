import { useRef } from "react";

const GetMovies = ({
  searchQuery,
  setSearchResults,
  setSearchQuery,
  setIsLoading,
}) => {
  const searchBar = useRef(null);
  const apikey = "74b088c9";

  const resetSearchBar = () => {
    searchBar.current.value = "";
  };

  const isEmpty = (ref) => {
    const refVal = ref.current.value.trim();
    return !Boolean(refVal);
  };

  const handleFetch = (e) => {
    e.preventDefault();

    if (isEmpty(searchBar)) {
      resetSearchBar();
      searchBar.current.focus();
      return;
    }

    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response == "True") {
          setSearchResults([...data.Search]);
          setIsLoading(false);
          return;
        }
        console.log(data.Error);
      });
  };

  return (
    <>
      <form action="" className="" onSubmit={handleFetch}>
        <input
          type="search"
          ref={searchBar}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default GetMovies;
