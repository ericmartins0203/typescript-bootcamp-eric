import Movie from "../Interfaces/Movie";
import User from "../Interfaces/User";

function addMovieToMyList(movie: Movie, user: User): void {
  user.myList.push(movie);
}

export default addMovieToMyList;
