import { title } from "process";
import Movie from "../Interfaces/Movie";

interface MoviesFromApiDTO {
  id: number;
  title: string;
  duration: number;
  directed_by: string;
}

function loadMovies(moviesFromApi: MoviesFromApiDTO[]): Partial<Movie>[] {
  return moviesFromApi.map((movie) => ({
    id: movie.id,
    name: movie.title,
    duration: movie.duration,
    directedBy: movie.directed_by,
  }));
}

export default loadMovies;
