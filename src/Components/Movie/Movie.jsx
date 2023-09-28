import card from "./card.module.css";
import movie from "./movie.module.css";

const Movie = ({ searchResults }) => {
  // const testMovieTitle = "Put Your Head on My Shoulder";

  // https://placehold.co/600?text=Hello+World
  // https://placehold.co/600x400/000000/FFFFFF/png

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
                {/* <span>{pos}</span> */}
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
