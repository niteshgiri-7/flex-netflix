import React, { useRef } from "react";
import { HOME_IMG_URL } from "../utils/constants";
import lang from "../utils/langData";
import { useSelector } from "react-redux";
import model from "../utils/ai";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const langOpt = useSelector((store) => store.lang);
  const langKey = langOpt.chosenLang;
  const HandleSearch = () => {
   const  searchedValue = searchText.current.value;
    const prompt = "act as a movie recommendation system and suggest me just the name of 5 movies with the description given as :"+searchedValue+"response should be like for example. Movie1,Movie2,Movie3,Movie4,Movie5,note that you don't need to give description of movies, you must give only the names";
   getMovieRecommendation(prompt);
  };
  async function getMovieRecommendation(prompt) {
    
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  
  return (
    <>
      <img
        className="-z-10 absolute h-full w-full"
        src={HOME_IMG_URL}
        alt="homeImage"
      />

      <div className="flex justify-center">
        <div className="w-6/12  h-2/4 fixed  flex justify-center items-center ">
          <div className="w-[70%] h-[20%] align-middle bg-black bg-opacity-80 rounded-md">
            <input
              className="m-4 p-4 w-[80%] rounded-md font-bold placeholder-gray-600"
              placeholder={lang[langKey].gptSearchPlaceHolder}
              ref={searchText}
            ></input>
            <button
              className="px-6 py-4 bg-red-700 rounded-lg text-white font-bold"
              onClick={() => HandleSearch()}
            >
              {lang[langKey].search}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
