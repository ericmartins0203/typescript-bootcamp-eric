import inquirer from "inquirer";

import MoviesDB from "./database/Movies";
import UserDb from "./database/User";
import possibleAnswers from "./enums/possibleAnswers";
import Movie from "./Interfaces/Movie";
import User from "./Interfaces/User";
import calculateMoviesAverage from "./utils/calculateMoviesAverage";
import fulfillMovieDB from "./utils/fulfillMovieDB";
import orderByAverage from "./utils/orderByAverage";

const eric: User = {
  id: 1,
  name: "Eric",
  age: 17,
  myList: [],
};

UserDb.push(eric);

/*
  adicionar menu(
    - baixar filmes,
    - logar usuário(escolher por id),
    - dar avaliação(escolher um filme e avaliar),
    - adicionar filme ao meu filme,
    - listar filmes com média de avaliação
  )
*/

const questions = [
  {
    type: "input",
    name: "option",
    message:
      "Digite uma opção:  \n 1- Logar usuário \n 2- Listar filmes \n 3- Dar avaliação \n 4- Listar filmes com média de avaliação \n 5- Adicionar filme a minha lista \n 0- Sair \n",
  },
];

const chooseUserIdQuestions = [
  {
    type: "number",
    name: "option",
    message: "Insira o id do usuário que deseja logar:",
  },
];

const chooseMovieQuestions = [
  {
    type: "number",
    name: "option",
    message: "Insira o id do filme desejado:",
  },
];

const rateMovieQuestions = [
  {
    type: "number",
    name: "option",
    message: "Digite sua avaliação(de 0 a 5):",
  },
];

async function run() {
  if (MoviesDB.length < 1) {
    await fulfillMovieDB();
  }

  const answers = await inquirer.prompt(questions);

  let user: User | undefined;
  let movieId: number;
  let rate: number;
  let movie: Movie | undefined;
  let chooseMovieAnswers: any;
  let rateMovieAnswers: any;

  switch (answers.option) {
    case possibleAnswers.LOGIN:
      UserDb.map((user) => console.log(`${user.id} - ${user.name}`));
      const userId = await inquirer.prompt(chooseUserIdQuestions);
      user = UserDb.find((user) => user.id == userId.option);

      if (user) {
        console.log(`Bem vindo, ${user.name}`);
      } else {
        console.log("Usuário não encontrado");
      }

      run();
      break;

    case possibleAnswers.LIST_MOVIES:
      MoviesDB.map((movie) => console.log(`${movie.id} - ${movie.name}`));

      run();
      break;

    case possibleAnswers.RATE_MOVIE:
      chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);
      rateMovieAnswers = await inquirer.prompt(rateMovieQuestions);

      movieId = chooseMovieAnswers.option;
      rate = rateMovieAnswers.option;

      movie = MoviesDB.find((movie) => movie.id == movieId);

      if (!movie) {
        console.log("Filme não encontrado");
        run();
        break;
      }

      movie.ratings.push(rate);
      run();
      break;

    case possibleAnswers.LIST_MOVIES_WITH_AVERAGE:
      console.log("Listando filmes com média de avaliação");
      const moviesWithAverage = calculateMoviesAverage(MoviesDB);
      const ordered = orderByAverage(moviesWithAverage);
      ordered.map((movie) =>
        console.log(
          `id: ${movie.id} - ${movie.name} - avaliação: ${movie.average}`
        )
      );
      run();
      break;

    case possibleAnswers.ADD_MOVIE_TO_MY_LIST:
      chooseMovieAnswers = await inquirer.prompt(chooseMovieQuestions);

      movieId = chooseMovieAnswers.option;

      movie = MoviesDB.find((movie) => movie.id == movieId);
      console.log(user);
      if (!user) {
        console.log("Usuário não logado");
        run();
        break;
      }
      if (!movie) {
        console.log("Filme não encontrado");
        run();
        break;
      }

      user.myList = [...user.myList, movie];
      console.log("Avaliação salva");
      run();
      break;

    case possibleAnswers.EXIT:
      console.log("Saindo do programa");
      break;

    default:
      console.log("Opção inválida");
      run();
      break;
  }
}

run();
