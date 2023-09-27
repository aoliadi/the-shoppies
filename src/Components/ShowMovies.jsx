import Movie from "./Movie/Movie";

const ShowMovies = ({ searchResults }) => {
  // console.log(searchResults);
  return (
    <>
      <div>ShowMovies</div>
      <Movie searchResults={searchResults} />
    </>
  );
};

export default ShowMovies;
