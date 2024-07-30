import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-black bg-opacity-90 mt-8 rounded-tl-lg rounded-tr-lg h-full w-full absolute px-[48px] py-4 flex flex-wrap">
      {Array.from({ length: 24 }, (_, i) => (
        <div
          key={i}
          className="w-[200px] min-w-[200px] min-h-[275px] h-[275px] bg-slate-200 bg-opacity-45 rounded-sm mx-3 "
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
