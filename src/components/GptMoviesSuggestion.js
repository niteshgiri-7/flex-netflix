import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMoviesSuggestion = () => {
  const { gptMovies, gptMoviesNames } = useSelector((store) => store.gpt);
  if (gptMovies) {
    console.log(gptMoviesNames);
    console.log("\n tmdbMovies", gptMovies);
  }
  return (
    <div className=" w-full h-full overflow-y-auto fixed  flex justify-center items-end" >
 <div className="w-screen h-2/4 bg-black bg-opacity-80 p-4 sticky">
 {gptMoviesNames.map((gptMoviesName,index)=> <MovieList title={gptMoviesName} movies={gptMovies[index]}/>)}
     
    </div>
    </div>
   
  );
};

export default GptMoviesSuggestion;
