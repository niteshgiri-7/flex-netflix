import React from "react";
import { TMDB_IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ poster_path }) => {
   
  return (
    <div className="w-[200px] p-2 min-w-[200px] min-h-[275px]">
      <img className="rounded-md" alt="movies card" src={TMDB_IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
