import React, { useEffect } from "react";
import { MOVIE_TRAILER_URL, TRAILER_FETCH_OPTIONS } from "../utils/constants";
const url = "https://api.themoviedb.org/3/movie/1022789/videos";
const VideoBackground = () => {
  useEffect(() => {
    fetchMovieVideo();
  }, []);
  const fetchMovieVideo = async () => {
    const response = await fetch(url, TRAILER_FETCH_OPTIONS);
    const json = await response.json();
    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length?filteredVideos[0]:json.results[0];
    console.log(trailer);
  };
  return <div>VideoBackground</div>;
};

export default VideoBackground;
