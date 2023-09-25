import SearchBox from "./SearchBox";
import SearchBtn from "./SearchBtn";

const GetMovies = ({ searchQuery, setSearchResults, setSearchQuery }) => {
  // console.log(searchQuery);

  const apikey = "74b088c9";

  const handleFetch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Response);

        if (data.Response == "True") {
          // console.log("true");
          setSearchResults([...data.Search]);
          return;
        }
        console.log(data.Error);
      });
  };

  return (
    <>
      <SearchBox setSearchQuery={setSearchQuery} />
      <SearchBtn handleFetch={handleFetch} />
    </>
  );
};

export default GetMovies;
