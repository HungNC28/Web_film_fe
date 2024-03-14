import React from "react";
import classes from "./MovieList.module.css";

import { MOVIE_INFO } from "../../utils/const";
import MovieItem from "./MovieItem";

// render các list phim theo chủ đề
const MovieList = () => {
  return (
    <div className={classes.MovieList}>
     
      {MOVIE_INFO.map((info, index) => {
        return <MovieItem key={index} info={info} />;
      })}
    </div>
  );
};

export default MovieList;
