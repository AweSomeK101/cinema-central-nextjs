export const TMBD_TOKEN = process.env.TMDB_BEARER_TOKEN;
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p";
export const TMDB_URL_REGION = "language=en-IN&region=in";
export const FALLBACK_IMAGE = "/fallback/fallback-image.jpg";
export const FALLBACK_PROFILE_IMAGE = "/fallback/fallback-profile.jpg";
export const FALLBACK_POSTER_IMAGE = "/fallback/fallback-poster.jpg";
export const MONGODB_URI = process.env.MONGODB_URI;
export const NODE_ENV = process.env.NODE_ENV || process.env.VERVCEL_ENV;
export const APP_BASE_URL = process.env.VERCECL_URL
  ? "https://" + process.env.VERCECL_URL
  : process.env.BASE_URL || "http://localhost:3000";
