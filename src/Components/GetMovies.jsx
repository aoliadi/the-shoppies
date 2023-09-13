const GetMovies = ({ searchQuery, setSearchResults }) => {
  // console.log(searchQuery);

  const apikey = "74b088c9";

  const handleFetch = () => {
    fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${apikey}`)
      .then((res) => res.json())
      .then(({ Search }) => {
        setSearchResults([...Search]);
      });
  };

  return (
    <>
      <section>Get Movies</section>
      <button onClick={handleFetch}>fetch now!</button>
    </>
  );
};

export default GetMovies;
