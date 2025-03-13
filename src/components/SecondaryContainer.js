import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if(!movies) return;
  return (
    <div className="bg-black min-h-screen">
      <div className="pt-80 md:pt-0">
        <MovieList title="now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upComingMovies} />        
      </div>
    </div>
  );
};

export default SecondaryContainer;
