import Movie from "../Interfaces/Movie";

const removeMoviesWithoutRatings = (movies: Movie[]) => {
  return movies.filter((movie) => movie.ratings.length > 0);
};

export default removeMoviesWithoutRatings;
