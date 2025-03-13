import React from "react";

const VideoTitle = ({title,overview}) => {
  return (
  <div className="absolute top-[15rem] text-white w-[90vw] left-1/2 -translate-x-1/2 p-3 rounded-lg bg-black/60 z-40 md:w-1/2 xl:w-1/3 md:left-1/2 md:-translate-x-full xl:left-1/3 xl:top-1/2">
    <h1 className="text-6xl font-bold overflow-hidden">
    {title}
    </h1>
   <p className="py-6 text-lg  font-bold">
   {overview}
    </p>  
      <button className="bg-white text-black w-[100px] h-auto p-4  rounded-lg hover:bg-opacity-80">
      ▶Play
      </button>
      <button className="bg-gray-500 text-white w-auto h-auto p-4 mt-4  mx-2 rounded-lg hover:bg-opacity-80">
        More Info
      </button>
        
  </div>
  );
};

export default VideoTitle;
