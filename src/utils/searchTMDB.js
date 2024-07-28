import { MOVIE_SEARCH_URL_START,MOVIE_SEARCH_URL_END } from "./constants"
import { API_OPTIONS } from "./constants"
const searchTmdb = async(moviesName)=>{
       const response = await fetch(MOVIE_SEARCH_URL_START+moviesName+MOVIE_SEARCH_URL_END,API_OPTIONS);
       
       const json = await response.json();
       return json.results;
}

export default searchTmdb;