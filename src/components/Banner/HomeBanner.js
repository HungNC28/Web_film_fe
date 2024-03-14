import React, { useState, useEffect } from "react";
import { BASE_URL, token } from "../../utils/const";

import classes from "./HomeBanner.module.css";

const HomeBanner = () => {
  const [movies, setMovies] = useState({});

  const getMovies = async () => {
    try {
      // lấy API fetchNetflixOriginals.
      const url = `${BASE_URL}/trending?token=${token}`;
      const respone = await fetch(url);
      const data = await respone.json();

      //  lấy ngẫu nhiên một bộ phim trong array.
      const randomFilm =
        data.results[Math.floor(Math.random() * data.results.length - 1)];

      setMovies({ ...randomFilm });
    } catch (error) {}
  };

  function getBgr() {
    // url để lấy hình ảnh
    const url = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";
    // lấy background

    let background = "";
    if (movies.backdrop_path || movies.poster_path) {
      background = `${url}${
        movies.backdrop_path ? movies.backdrop_path : movies.poster_path
      }`;
    }
    return background;
  }

  useEffect(() => {
    getMovies();
  }, []);

  // loại trường hợp trả về undified
  useEffect(() => {
    if (!movies.backdrop_path && !movies.poster_path) {
      getMovies();
    }
  }, [movies]);

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `linear-gradient(
          rgba(34, 34, 34, 0.6),
          rgba(34, 34, 34, 0.6)
        ), url(${getBgr()})`,
      }}
    >
      <div>
        <h2 className={classes.bannerName}>{movies.name}</h2>
        <button className={classes.buttonPlay}>Play</button>
        <button>My List</button>
        <div className={classes.bannerOverview}>{movies.overview}</div>
      </div>
    </div>
  );
};

export default HomeBanner;
