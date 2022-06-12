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
}

export default MovieService;
