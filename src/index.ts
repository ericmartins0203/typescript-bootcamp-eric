interface Movie {
  id: number;
  name: string;
  ratings: number[];
  indicativeRating: IndicativeRating;
}

enum IndicativeRating {
  AL = 0,
  A10 = 10,
  A12 = 12,
  A14 = 14,
  A16 = 16,
  A18 = 18,
}

interface User {
  name: string;
  age: number;
  myList: Movie[];
}

const movies: Movie[] = [
  {
    id: 1,
    name: "Spider Man",
    ratings: [1, 5, 3],
    indicativeRating: IndicativeRating.AL,
  },
  {
    id: 2,
    name: "Avengers",
    ratings: [4, 5, 3],
    indicativeRating: IndicativeRating.A18,
  },
  {
    id: 3,
    name: "Doctor Strange",
    ratings: [1, 2, 3],
    indicativeRating: IndicativeRating.A10,
  },
  {
    id: 4,
    name: "Se beber não case",
    ratings: [],
    indicativeRating: IndicativeRating.A16,
  },
];

type MovieWithAverage = Movie & { average: number };

const removeWithoutRatings = (movies: Movie[]) => {
  return movies.filter((movie) => movie.ratings.length > 0);
};

const calculateMoviesAverage = (movie: Movie): MovieWithAverage => {
  let average = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
  return {
    ...movie,
    average: average,
  };
};

const orderByAverage = (movies: MovieWithAverage[]) =>
  movies.sort((a, b) => {
    if (a.average > b.average) {
      return -1;
    }
    if (a.average < b.average) {
      return 1;
    }
    return 0;
  });

// const movieA = movies.find(movie => movie.name == "Avengers" )
// const movieB = movies.filter(movie => movie.rate <= 12 )
// const movieC = orderByAverage(removeWithoutRatings(movies).map(calculateMoviesAverage))

// console.log(movies)
// console.log(movieA)
// console.log(movieB)
// console.log(movieC)

const user: User = {
  name: "Eric",
  age: 17,
  myList: [],
};

// function filterMoviesByRate(movies: Movie[], user: User): Movie[] {
//   return movies.filter((movie) => movie.rate <= user.age);
// }
// console.log(filterMoviesByRate(movies, user));

function addMovieToMyList(movie: Movie, user: User): void {
  user.myList.push(movie);
}

function findMovieById(id: number) {
  return movies.find((movie) => movie.id == id);
}

// function addMovies(user: User, ids: number[]) {
//   ids.map((id) => {
//     let findMovieById = movies.find((movie) => movie.id == id);
//     if (findMovieById) {
//       user.myList.push(findMovieById);
//     }
//   });
//   console.log(user);
// }

// addMovies(user, [1, 3]);

function addMovies(user: User, movies: Movie[], ...ids: number[]) {
  const newList: Movie[] = [];

  ids.forEach((id) => {
    const foundMovie = movies.find((movie) => movie.id == id);

    if (!foundMovie) {
      throw new Error("Movie not listed");
    }

    newList.push(foundMovie);

    return {
      ...user,
      myList: [...newList, ...user.myList],
    };
  });
}

addMovies(user, movies, 1, 3);
console.log(user);
