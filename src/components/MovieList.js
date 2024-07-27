import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  if(!movies) return;
  return (
    <div className=" ">
        <h1 className="text-3xl py-2 px-8 text-white font-bold">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar px-6">
      <div className="flex">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
