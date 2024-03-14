import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HomeBanner from "../../components/Banner/HomeBanner";
import MovieList from "../../components/MovieList/MovieList";

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <HomeBanner />
      <MovieList />
    </div>
  );
}

export default Browse;
