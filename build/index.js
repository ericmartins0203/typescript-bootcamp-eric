"use strict";
const movies = [
    {
        name: "Spider Man",
        ratings: [1, 5, 3],
        rate: 10,
    },
    {
        name: "Avengers",
        ratings: [4, 5, 3],
        rate: 15,
    },
    {
        name: "Doctor Strange",
        ratings: [1, 2, 3],
        rate: 18,
    },
    {
        name: "Se beber não case",
        ratings: [],
        rate: 18,
    },
];
const removeWithoutRatings = (movies) => {
    return movies.filter((movie) => movie.ratings.length > 0);
};
const calculateMoviesAverage = (movie) => {
    let average = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
    return Object.assign(Object.assign({}, movie), { average: average });
};
const orderByAverage = (movies) => movies.sort((a, b) => {
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
const user = {
    name: "Eric",
    age: 17,
    myList: [],
};
function filterMoviesByRate(movies, user) {
    return movies.filter((movie) => movie.rate <= user.age);
}
function addMovieToMyList(movie, user) {
    user.myList.push(movie);
}
console.log(filterMoviesByRate(movies, user));
