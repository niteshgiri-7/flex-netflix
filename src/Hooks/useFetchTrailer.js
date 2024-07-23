import { useEffect } from "react";
import { MOVIE_TRAILER_URL } from "../utils/constants";
import { TRAILER_FETCH_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useFetchTrailer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieVideo();
  }, []);
  const fetchMovieVideo = async () => {
    const response = await fetch(
      MOVIE_TRAILER_URL + "/1022789/videos",
      TRAILER_FETCH_OPTIONS
    );
    const json = await response.json();
    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useFetchTrailer;
