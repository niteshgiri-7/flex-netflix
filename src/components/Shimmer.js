// import React from "react";

// const Shimmer = () => {
//   return (
//     <div className="bg-black bg-opacity-90 mt-8 rounded-tl-lg rounded-tr-lg h-full w-full absolute px-[48px] py-4 flex flex-wrap">
//       {Array.from({ length: 24 }, (_, i) => (
//         <div
//           key={i}
//           className="w-[200px] min-w-[200px] min-h-[275px] h-[275px] bg-slate-200 bg-opacity-45 rounded-sm mx-3 "
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Shimmer;
import React from "react";

const Shimmer = () => {
  // Total number of movie cards
  const totalCards = 24;

  // Number of cards per row
  const cardsPerRow = 8;

  return (
    <div className="bg-black bg-opacity-90 mt-8 rounded-tl-lg rounded-tr-lg h-full w-full absolute px-[48px] py-4 flex flex-col gap-4">
      {Array.from({ length: Math.ceil(totalCards / cardsPerRow) }, (_, rowIndex) => (
        <di v key={rowIndex} className="flex flex-col">
          {/* Shimmer effect for the title */}
          <div className="w-full mb-4 ">
            <div className="w-[300px] h-[40px] ml-3 bg-slate-200 bg-opacity-30 rounded-sm"></div>
          </div>

          {/* Movie cards shimmer */}
          <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
              {Array.from({ length: cardsPerRow }, (_, cardIndex) => (
                <div
                  key={cardIndex + rowIndex * cardsPerRow}
                  className="w-[200px] min-w-[200px] min-h-[275px] h-[275px] bg-slate-200 bg-opacity-30 rounded-sm mx-3"
                ></div>
              ))}
            </div>
          </div>
        </di>
      ))}
    </div>
  );
};

export default Shimmer;

