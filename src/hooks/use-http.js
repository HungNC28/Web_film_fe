import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/const";

// Custom hooks để lấy từ api
const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const finalUrl = BASE_URL + url;
        const response = await fetch(finalUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return movies;
};

export default useFetchMovies;
