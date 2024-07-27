export const LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const HOME_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/ad9ba504-dd55-4fdb-9d41-f2870752f478/NP-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_88f0cb52-ba16-4e23-b10f-141b5bd9f0ca_medium.jpg";

export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';

export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming"

export const MOVIE_TRAILER_URL = "https://api.themoviedb.org/3/movie/";


export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const NOWPLAYING_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_KEY,
  },
};
export const POPULAR_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmJhMTEyMmU1NWQ2ZGI3ZjI5ZDM5YThiNWM3MDNmOSIsIm5iZiI6MTcyMjA2NTI1NC4wMzYzMDMsInN1YiI6IjY2OWU4ZTBjYWVlNjdjYmEzN2RkMmI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dZMOCHlSRzJGEtl-2_SW3ilY-mA1oJGQOJ0eY5fNOBo'
  }
};

export const TRRAILER_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_KEY,
  },
};
