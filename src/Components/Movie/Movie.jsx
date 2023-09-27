import card from "./card.module.css";
import movie from "./movie.module.css";

const Movie = ({ searchResults }) => {
  const testMovieTitle = "Put Your Head on My Shoulder";
  const yearOfRelease = 2023;
  const testImgLink =
    "https://m.media-amazon.com/images/M/MV5BN2ZmZGM3YTktOTk0Ni00Mjc4LThjYzEtYmExZGJiZjBlOTg3XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg";

  const bgStyles = {
    backgroundImage: `url(${testImgLink})`,
  };

  return (
    <>
      <ul className={card.wrapper}>
        {searchResults.map((searchResult) => (
          <li
            key={searchResult.imdbID}
            className={card.container}
            style={{ backgroundImage: `url(${searchResult.Poster})` }}
          >
            <h3 className={movie.title}>{searchResult.Title}</h3>
            <small className={movie.releaseDate}>{searchResult.Year}</small>
            <p className={movie.summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              ullam repudiandae vel deleniti. Architecto eaque a, quibusdam
              quaerat aliquam expedita?
            </p>
          </li>
        ))}
        {/* <li className={card.container} style={bgStyles}>
          <h3 className={movie.title}>{testMovieTitle}</h3>
          <small className={movie.releaseDate}>{yearOfRelease}</small>
          <p className={movie.summary}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam
            repudiandae vel deleniti. Architecto eaque a, quibusdam quaerat
            aliquam expedita?
          </p>
        </li> */}
      </ul>
    </>
  );
};

export default Movie;