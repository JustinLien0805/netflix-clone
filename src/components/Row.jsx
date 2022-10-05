import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
const Row = ({ title, fetchURL, isLargerRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchURL);
      setMovies(res.data.results);
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div className="flex flex-col mx-20 my-10 text-white">
      <h2 className="font-bold text-3xl">{title}</h2>
      <div className="flex overflow-y-scroll scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isLargerRow={isLargerRow} />
        ))}
      </div>
    </div>
  );
};

export default Row;
