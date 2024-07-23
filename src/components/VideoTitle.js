import React from "react";

const VideoTitle = ({title,overview}) => {
  return <div className=" pt-[250px] px-12">
    <h1 className="text-6xl font-bold">
    {title}
    </h1>
   <p className="py-6 text-lg w-1/4 font-bold">
   {overview}
    </p>  
      <button className="bg-gray-500 text-white w-[100px] h-auto p-4  rounded-lg">
      ▶Play
      </button>
      <button className="bg-gray-500 text-white w-auto h-auto p-4 mt-4  mx-2 rounded-lg">
        More Info
      </button>
        
  </div>;
};

export default VideoTitle;
