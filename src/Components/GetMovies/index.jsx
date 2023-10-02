import SearchBox from "./SearchBox";
import SearchBtn from "./SearchBtn";

const GetMovies = ({
  searchQuery,
  setSearchResults,
  setSearchQuery,
  setIsLoading,
}) => {
  // console.log(searchQuery);

  const apikey = "74b088c9";

  const handleFetch = (e) => {
    e.preventDefault();
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
        <SearchBox setSearchQuery={setSearchQuery} />
        <SearchBtn handleFetch={handleFetch} />
      </form>
    </>
  );
};

export default GetMovies;
