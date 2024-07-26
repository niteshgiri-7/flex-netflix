import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies)
  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-10">
      <MovieList title="now Playing" movies={movies} />
      <MovieList title="Trending" movies={movies} />
      <MovieList title="Popular" movies={movies} />
      <MovieList title="Upcoming Movies" movies={movies} />
      <MovieList title="Horror Movies" movies={movies} />
      </div>
     

    </div>
  );
};

export default SecondaryContainer;
