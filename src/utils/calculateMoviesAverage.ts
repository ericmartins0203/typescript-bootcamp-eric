import Movie from "../Interfaces/Movie";
import removeMoviesWithoutRatings from "./removeMoviesWhithoutRatings";

type MovieWithAverage = Movie & { average: number };

const calculateMoviesAverage = (movies: Movie[]): MovieWithAverage[] => {
  const sanitizedMovies = removeMoviesWithoutRatings(movies);

  return sanitizedMovies.map((movie) => {
    const average =
      movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
    return {
      ...movie,
      average: average,
    };
  });
};

export default calculateMoviesAverage;
