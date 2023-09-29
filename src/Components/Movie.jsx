import card from "../assets/card.module.css";
import movie from "../assets/movie.module.css";

const Movie = ({ searchResults }) => {
  // const testMovieTitle = "Put Your Head on My Shoulder";

  const placeholderImgLink = "https://placehold.co/250";
  const testMovieTitle = "The Hobbit";
  const yearOfRelease = 1977;
  const testImgLink = "https://placehold.co/250";

  return (
    <>
      <ul className={card.wrapper}>
        {searchResults.map(({ Poster, Title, Type, Year, imdbID }) => {
          if (Poster === "N/A") {
            const posterContent = Title.replaceAll(" ", "+");
            Poster = `${placeholderImgLink}?text=${posterContent}`;
          }

          return (
            <li
              key={imdbID}
              className={card.container}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <h3 className={movie.title}>
                <span>{Title}</span>
              </h3>
              <span className="">
                <small className={movie.releaseDate}>{Year}</small>
                <small className={movie.releaseDate}>{Type}</small>
              </span>
              <p className={movie.summary}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                ullam repudiandae vel deleniti. Architecto eaque a, quibusdam
                quaerat aliquam expedita?
              </p>
            </li>
          );
        })}
        {/* <li className={card.container} style={bgStyles}>
          <h3 className={movie.title}>
            <span>Lorem10</span>
          </h3>
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
