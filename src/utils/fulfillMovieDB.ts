import MoviesDB from "../database/Movies";
import Movie from "../Interfaces/Movie";
import MovieService from "../services/MovieService";

const fulfillMovieDB = async () => {
  const movieService = new MovieService();

  const movies = await movieService.listAll();

  MoviesDB.push(...movies);

  return MoviesDB;
};

export default fulfillMovieDB;
