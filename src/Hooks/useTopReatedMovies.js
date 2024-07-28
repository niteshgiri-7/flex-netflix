import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/Slices/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const response = await fetch(TOP_RATED_URL, API_OPTIONS);
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;