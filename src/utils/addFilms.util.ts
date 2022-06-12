import Movie from "../Interfaces/Movie";
import User from "../Interfaces/User";

function addFilms(user: User, movies: Movie[], ...ids: number[]) {
  const newList: Movie[] = [];

  ids.forEach((id) => {
    const foundMovie = movies.find((movie) => movie.id == id);

    if (!foundMovie) {
      throw new Error("Movie not listed");
    }

    if (!(newList.includes(foundMovie) || user.myList.includes(foundMovie))) {
      newList.push(foundMovie);
    }
  });

  return {
    ...user,
    myList: [...user.myList, ...newList],
  };
}

export default addFilms;

// function addMovies(user: User, ids: number[]) {
//   ids.map((id) => {
//     let findMovieById = movies.find((movie) => movie.id == id);
//     if (findMovieById) {
//       user.myList.push(findMovieById);
//     }
//   });
//   console.log(user);
// }
