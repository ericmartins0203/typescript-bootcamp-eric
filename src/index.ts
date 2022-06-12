import axios from "axios";

import User from "./Interfaces/User";
import MovieService from "./services/MovieService";

const user: User = {
  name: "Eric",
  age: 17,
  myList: [],
};

new MovieService().listAll().then((result) => {
  console.log(result);
});
