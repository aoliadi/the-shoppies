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

  const handleFetch = () => {
    setIsLoading(true);

    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Response);

        if (data.Response == "True") {
          // console.log("true");
          setSearchResults([...data.Search]);
          setIsLoading(false);
          return;
        }
        console.log(data.Error);
      });
  };

  return (
    <>
      {/* <form action="" className=""> */}
      <SearchBox setSearchQuery={setSearchQuery} />
      <SearchBtn handleFetch={handleFetch} />
      {/* </form> */}
    </>
  );
};

export default GetMovies;
