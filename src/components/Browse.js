import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopReatedMovies";
import useUpComingMovies from "../Hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGpt);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="">
      <Header />
     {
      showGpt?<GptPage/>:
      <>
            <MainContainer />
            <SecondaryContainer />
      </>

     }
    </div>
  );
};

export default Browse;
