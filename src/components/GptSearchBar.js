import React, { useRef } from "react";
import { HOME_IMG_URL } from "../utils/constants";
import lang from "../utils/langData";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const langOpt = useSelector((store) => store.lang);
  const langKey = langOpt.chosenLang;
  const handleSearch = () => {
    const searchedVal = searchText.current.value;
    console.log(searchedVal);
    console.log("userchosen", langOpt);
    const langKey = langOpt.chosenLang;
    console.log(lang[langKey]);
  };
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
              className="m-4 p-4 w-[80%] rounded-md "
              placeholder={lang[langKey].gptSearchPlaceHolder}
              ref={searchText}
            ></input>
            <button
              className="px-6 py-4 bg-red-700 rounded-lg text-white font-bold"
              onClick={() => handleSearch()}
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
