import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../utils/constants";
import useFetchTrailer from "../Hooks/useFetchTrailer";
const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailer();

  return (
    <div>
      VideoBackground
      <iframe
        width="560"
        height="315"
        src={YOUTUBE_URL + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
