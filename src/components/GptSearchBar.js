import React, { useRef } from "react";
import { HOME_IMG_URL } from "../utils/constants";
const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleSearch = () => {
    const searchedVal = searchText.current.value;
    console.log(searchedVal);
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
          <div className="w-[70%] h-[20%] align-middle bg-black">
            <input
              className="m-4 p-4 w-[80%] rounded-md "
              placeholder="what do you like to watch today?"
              ref={searchText}
              
            ></input>
            <button className="px-6 py-4 bg-red-700 rounded-lg text-white font-bold" onClick={()=>handleSearch()}> 
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
