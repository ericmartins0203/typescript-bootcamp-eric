import IndicativeRating from "../enums/IndicativeRating";

interface Movie {
  id: number;
  name: string;
  ratings: number[];
  // indicativeRating: IndicativeRating;
  duration: number;
  directedBy: string;
}

export default Movie;
