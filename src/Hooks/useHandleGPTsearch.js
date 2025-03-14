import { useDispatch, useSelector } from "react-redux";
import getMovieRecommendation from "../utils/getMovieRecommendation";
import searchTmdb from "../utils/searchTMDB";
import {
  addGptmoviesResult,
  
} from "../utils/Slices/gptSlice";
import { useEffect, useState} from "react";

const useHandleSearch = (searchText) => {
  const dispatch = useDispatch();
  const[isLoading,setIsLoading] = useState(false);
  const fetchMovie = useSelector((store) => store.gpt.fetchData);
  useEffect(() => {
    HandleSearch(searchText);
  }, [fetchMovie]); //when search button is clicked, fetchData toggles to run this UseEffect
  const HandleSearch = async (searchText) => {
    try {
      
      const searchedValue = searchText.current.value;
      const prompt = `act as a movie recommendation system and suggest me just the name of 5 movies with the description given as: ${searchedValue}. Response should be like for example: Movie1,Movie2,Movie3,Movie4,Movie5. Note that you don't need to give a description of movies, you must give only the names. Also, can you give the movie names in an array?`;
      setIsLoading(true);
      const moviesName = await getMovieRecommendation(prompt); // Await the promise

      const PromiseArray = moviesName.map((movies) => searchTmdb(movies));
      const resultMovie = await Promise.all(PromiseArray);

      dispatch(
        addGptmoviesResult({
          gptMoviesNames: moviesName,
          gptMovies: resultMovie,
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error in HandleSearch:", error);
      setIsLoading(false);
    }
  };
  return {isLoading};
};

export default useHandleSearch;
