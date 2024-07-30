import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { HOME_IMG_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const GptPage = () => {

  return (
    <div>
      <img
        className="w-full h-full fixed -z-10"
        src={HOME_IMG_URL}
        alt="homeImage"
      />
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptPage;
