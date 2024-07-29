import React, { useRef } from "react";
import lang from "../utils/langData";
import { useDispatch, useSelector } from "react-redux";
import { callGPTsearchHook } from "../utils/Slices/gptSlice";
import useHandleSearch from "../Hooks/useHandleGPTsearch";

const GptSearchBar = () => {
 const dispatch = useDispatch();

  const searchText = useRef(null);
  const langOpt = useSelector((store) => store.lang);
  const langKey = langOpt.chosenLang;
  const activateButton = ()=>{
    dispatch(callGPTsearchHook());
  }
  useHandleSearch(searchText);//to obtain the ai suggestion,on basis of result search in tmdb and get the result(add in slice)
  return (
    <>
      

      <div className="pt-[30%] md:pt-[5%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-70 rounded-lg grid grid-cols-9"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 rounded-md col-span-7 font-bold text-gray-700 text-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-2 m-4 py-4 px-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-opacity-80"
          onClick={()=>{activateButton()}}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
    </>
  );
};

export default GptSearchBar;
