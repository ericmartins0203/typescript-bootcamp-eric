import Movie from "../Interfaces/Movie";
import loadMovies from "../utils/loadMovies";
import BaseService from "./BaseService";

class MovieService extends BaseService {
  constructor() {
    super();
  }

  async listAll() {
    const result = await this.getInstance().get("/movies");
    return loadMovies(result.data.data);
  }

  // async findById(id: number): Promise<Movie | undefined> {
  //   const result = await this.getInstance().get("/movies");
  //   const movies = loadMovies(result.data.data);

  //   return movies.find((movie) => movie.id == id);
  // }
}

export default MovieService;
