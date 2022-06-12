import calculateMoviesAverage from "./calculateMoviesAverage";
import Movie from "../Interfaces/Movie";

const orderByAverage = (movies: Movie[]) => {
  const moviesWithAverage = calculateMoviesAverage(movies);

  const moviesOrdered = moviesWithAverage.sort((a, b) => {
    if (a.average > b.average) {
      return -1;
    }
    if (a.average < b.average) {
      return 1;
    }
    return 0;
  });
  return moviesOrdered;
};

export default orderByAverage;
