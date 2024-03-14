import React, { useState } from "react";
import classes from "./MovieItem.module.css";
import useFetchMovies from "../../hooks/use-http";
import { IMAGE_URL } from "../../utils/const";
import MovieDetail from "./MovieDetail";

// render phim theo list
const MovieItem = ({ info }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const movies = useFetchMovies(info.url);

  // xử lý sự kiện khi click vào ảnh để hiện thông tin phim
  const handleShowDetail = (movie) => {
    if (movie.id !== currentMovie.id) {
      setShowDetails(true);
      setCurrentMovie(movie);
    } else {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div className={classes.MovieItemContainer}>
      <h2>{info.label}</h2>
      <div className={classes.MovieSlider}>
        {movies.map(
          (movie, index) =>
            movie.backdrop_path && (
              <div key={index} className={classes.MovieItem}>
                <img
                  src={`${IMAGE_URL}${
                    // nếu là Original thì hiện poster
                    info.label === "" ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                  onClick={(e) => handleShowDetail(movie)}
                />
              </div>
            )
        )}
      </div>

      <div>{showDetails && <MovieDetail movie={currentMovie} />}</div>
    </div>
  );
};

export default MovieItem;
