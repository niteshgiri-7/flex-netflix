import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainmovie = movies ? movies[0] : null;
  return (
    <div className="hide-scrollbar relative">
      {movies ? (
        <>
          <VideoTitle title={mainmovie.title} overview = {mainmovie.overview} />  
          <VideoBackground />
        </>
      ) : (
        <h1>no movies</h1>
      )}
    </div>
  );
};

export default MainContainer;
