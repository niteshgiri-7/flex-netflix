import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  const filteredMovies = movies.filter((movie) => movie.poster_path);

  return (
    <div className="p-4 ">
      <h1 className="text-3xl py-2 px-8 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
