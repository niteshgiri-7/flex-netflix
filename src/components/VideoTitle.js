import React from "react";

const VideoTitle = ({title,overview}) => {
  return <div className="h-screen pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black ">
    <h1 className="text-6xl font-bold overflow-hidden">
    {title}
    </h1>
   <p className="py-6 text-lg w-1/4 font-bold">
   {overview}
    </p>  
      <button className="bg-white text-black w-[100px] h-auto p-4  rounded-lg hover:bg-opacity-80">
      ▶Play
      </button>
      <button className="bg-gray-500 text-white w-auto h-auto p-4 mt-4  mx-2 rounded-lg hover:bg-opacity-80">
        More Info
      </button>
        
  </div>;
};

export default VideoTitle;
