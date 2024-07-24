import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../utils/constants";
import useFetchTrailer from "../Hooks/useFetchTrailer";
const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailer();

  return (
    <div className=" ">
      <iframe
      className="w-screen aspect-video pointer-events-none"
        src={YOUTUBE_URL + trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
