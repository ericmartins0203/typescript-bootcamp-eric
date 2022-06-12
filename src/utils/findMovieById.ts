import Movie from "../Interfaces/Movie";

function findMovieById(movies: Movie[], id: number) {
  return movies.find((movie) => movie.id == id);
}

export default findMovieById;
