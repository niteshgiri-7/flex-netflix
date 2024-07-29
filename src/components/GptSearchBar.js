import React, { useRef } from "react";
import { HOME_IMG_URL } from "../utils/constants";
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
      

      <div className="flex justify-center z-10 relative">
        <div className="w-6/12  h-2/4 fixed  flex justify-center  ">
          <div className="w-[70%] h-[20%]  bg-black bg-opacity-70 rounded-md my-[10%]">
            <input
              className="m-4 p-4 w-[80%] rounded-md font-bold placeholder-gray-600"
              placeholder={lang[langKey].gptSearchPlaceHolder}
              ref={searchText}
            ></input>
            <button
              className="px-6 py-4 bg-red-700 rounded-lg text-white font-bold"
              onClick={()=>activateButton()}
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
