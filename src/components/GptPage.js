
import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { HOME_IMG_URL } from "../utils/constants";
const GptPage = () => {
  return <div >
    <img className="w-full h-full absolute"src={HOME_IMG_URL} alt="homeImage" />
    <GptSearchBar/>
    <GptMoviesSuggestion/>
  </div>;
};

export default GptPage;