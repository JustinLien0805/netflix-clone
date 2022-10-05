import React, { useEffect, useState } from "react";
import axios from "axios";
import request from "..//Requset";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <>
      <div className="h-20 w-full"></div>
      <div
        className="relative object-contain h-[36rem] flex"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col m-20 absolute w-full top-20 text-white">
          <h1 className="text-[4.5rem] font-bold">
            {movie?.name || movie?.original_title || movie?.original_name}
          </h1>
          <div className="flex space-x-4 text-xl font-semibold mb-4">
            <button className="bg-neutral-800 p-2 rounded-md">Play</button>
            <button className="bg-neutral-800 p-2 rounded-md">My List</button>
          </div>
          <p className="w-96 font-medium">{truncate(movie?.overview, 150)}</p>
        </div>
        <div className="h-28 absolute bg-gradient-to-b from-transparent to-black w-full bottom-0"></div>
      </div>
    </>
  );
};

export default Banner;
