import { useDispatch } from "react-redux";
import { UPCOMING_URL,API_OPTIONS } from "../utils/constants"
import { addUpComingMovies } from "../utils/Slices/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const getUpComingMovies=async()=>{
        const response =  await fetch(UPCOMING_URL,API_OPTIONS);
        const json = await response.json();
        dispatch(addUpComingMovies(json.results));
    }
    useEffect(()=>{
        getUpComingMovies();
    },[])
}

export default useUpComingMovies;