import { apiFetch } from "@/lib/api-method";
import { TMDB_BASE_URL, TMBD_TOKEN, TMDB_URL_REGION } from "@/lib/Constants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMBD_TOKEN}`,
  },
};

export async function getTrendingTV() {
  const data = await apiFetch(`${TMDB_BASE_URL}/trending/tv/week?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getOnTheAirTV() {
  const data = await apiFetch(`${TMDB_BASE_URL}/tv/on_the_air?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getPopularTV() {
  const data = await apiFetch(`${TMDB_BASE_URL}/tv/popular?${TMDB_URL_REGION}`, options);

  return data.results || [];
}

export async function getTopRatedTV() {
  const data = await apiFetch(`${TMDB_BASE_URL}/tv/top_rated?${TMDB_URL_REGION}`, options);

  return data.results || [];
}
