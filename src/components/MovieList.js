import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const allNowPlaying = movies?.nowPlayingMovies;
  if (!allNowPlaying) return;
  return (
    <div className="">
        <h1 className="text-3xl p-2">{title}</h1>

      <div className="flex overflow-x-auto scrollbar-hide">
      <div className="flex scrollbar-hide scroll-smooth">
          {allNowPlaying.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
