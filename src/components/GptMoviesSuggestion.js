import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMoviesSuggestion = () => {
  const { gptMovies, gptMoviesNames,showShimmer } = useSelector(
    (store) => store.gpt
  );


  if(showShimmer && gptMovies.length===0 ) return <Shimmer/>
  if ((!gptMoviesNames || gptMovies.length === 0)) return null;
    

  return (
    <div className="bg-black bg-opacity-90 mt-8 rounded-tl-lg rounded-tr-lg">
      <div className="text-white p-4">
        <div>
          {gptMoviesNames.map((gptMoviesName, index) => (
            <MovieList
              key={gptMoviesName}
              title={gptMoviesName}
              movies={gptMovies[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
