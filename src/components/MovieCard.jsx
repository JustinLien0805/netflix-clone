import React from "react";

const MovieCard = ({ movie, isLargerRow }) => {
  return (
    <img
      className={`hover:scale-105 cursor-pointer ${isLargerRow ? `object-contain m-2 h-96` : `h-64 w-44 object-contain m-2`}`}
      src={
        isLargerRow
          ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
          : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
      }
      alt=""
    />
  );
};

export default MovieCard;
