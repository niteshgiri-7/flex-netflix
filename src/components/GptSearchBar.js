import React, { useRef } from "react";
import lang from "../utils/langData";
import { useDispatch, useSelector } from "react-redux";
import { callGPTsearchHook,toggleShowShimmer } from "../utils/Slices/gptSlice";
import useHandleSearch from "../Hooks/useHandleGPTsearch";

const GptSearchBar = () => {

 const dispatch = useDispatch();


  const searchText = useRef(null);
  const langOpt = useSelector((store) => store.lang);
  const langKey = langOpt.chosenLang;
  const activateButton = ()=>{
    dispatch(toggleShowShimmer());
    dispatch(callGPTsearchHook());
  }
  const {isLoading}=useHandleSearch(searchText);//to obtain the ai suggestion,on basis of result search in tmdb and get the result(add in slice)
  return (
    <>
      

      <div className="pt-[30%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-2/3 md:p-4 bg-black bg-opacity-70 rounded-lg flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          className=" p-4 m-4 rounded-md col-span-7 font-bold text-gray-700  text-sm md:text-lg w-[80%]"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          
        />
        <button
          className="w-[20%] m-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-opacity-80"
          onClick={()=>{activateButton()}}
        >
          { isLoading?"Searching":lang[langKey].search}
        </button>
      </form>
    </div>
    </>
  );
};

export default GptSearchBar;
