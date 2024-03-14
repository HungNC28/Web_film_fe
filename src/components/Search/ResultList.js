import React, { useState } from "react";
import { IMAGE_URL } from "../../utils/const";
import classes from "./ResultList.module.css";
import MovieDetail from "../MovieList/MovieDetail";

const ResultsList = ({ movies }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  
  // xử lý sự kiện khi click vào poster để hiển thị thông tin phim
  const handleShowDetail = (movie) => {
    if (movie.id !== currentMovie.id) {
      setShowDetails(movie);
      setCurrentMovie(movie);
    } else {
      setShowDetails(!showDetails);
    }
  };
  return (
    <div className={classes.ResultsList}>
      <h2>Search Result</h2>
      {/* list phim search ra  */}
      <div className={classes.ResultsListPoster}>
        {movies.map((e) => {
          return (
            e.poster_path && (
              <img
                key={e.id}
                className={classes.ImgSearchMovie}
                src={`${IMAGE_URL}${e.poster_path}`}
                alt=""
                onClick={() => handleShowDetail(e)}
              />
            )
          );
        })}
      </div>
      {/* thông tin phim khi kích vào poster */}
      <div className={classes.SearchMovieDetail}>
        {showDetails && <MovieDetail movie={currentMovie} />}
      </div>
    </div>
  );
};

export default ResultsList;
