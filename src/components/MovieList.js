import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const allNowPlaying = movies?.nowPlayingMovies;
  if (!allNowPlaying) return;
  return (
    <div className=" ">
        <h1 className="text-3xl py-2 px-8 text-white">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar px-6">
      <div className="flex">
          {allNowPlaying.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;