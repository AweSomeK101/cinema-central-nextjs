import { apiFetch } from "@/lib/api-method";
import { TMDB_BASE_URL, TMBD_TOKEN, TMDB_URL_REGION } from "@/lib/Constants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMBD_TOKEN}`,
  },
  next: {
    revalidate: 60 * 60 * 24,
  },
};

export async function getNowPlayingMovies() {
  const data = await apiFetch(`${TMDB_BASE_URL}/movie/now_playing?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getTrendingMovies() {
  const data = await apiFetch(`${TMDB_BASE_URL}/trending/movie/week?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getPopularMovies() {
  const data = await apiFetch(`${TMDB_BASE_URL}/movie/popular?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getTopRatedMovies() {
  const data = await apiFetch(`${TMDB_BASE_URL}/movie/top_rated?${TMDB_URL_REGION}`, {
    ...options,
    next: { revalidate: 60 * 60 * 24 * 30 },
  });

  return data.results || [];
}

export async function getUpcomingMovies() {
  const data = await apiFetch(`${TMDB_BASE_URL}/movie/upcoming?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getMovieDetail(id) {
  const data = await apiFetch(
    `${TMDB_BASE_URL}/movie/${id}?${TMDB_URL_REGION}&append_to_response=credits,similar`,
    { ...options, next: undefined }
  );

  return data;
}
