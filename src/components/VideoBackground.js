import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../utils/constants";
import useFetchTrailer from "../Hooks/useFetchTrailer";

const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailer();

  return (
    <div className="bg-gradient-to-tr from-black">
      <iframe
        className=" w-screen aspect-video pointer-events-none"
        src={YOUTUBE_URL + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&showinfo=0&playlist=" + trailerVideo?.key}
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
