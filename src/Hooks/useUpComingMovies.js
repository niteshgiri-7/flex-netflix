import { useDispatch } from "react-redux";
import { UPCOMING_URL,POPULAR_API_OPTIONS } from "../utils/constants"
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const getUpComingMovies=async()=>{
        const response =  await fetch(UPCOMING_URL,POPULAR_API_OPTIONS);
        const json = await response.json();
        dispatch(addUpComingMovies(json.results));
    }
    useEffect(()=>{
        getUpComingMovies();
    },[])
}

export default useUpComingMovies;