import { apiFetch } from "@/lib/api-method";
import { TMDB_BASE_URL, TMBD_TOKEN, TMDB_URL_REGION } from "@/lib/Constants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMBD_TOKEN}`,
  },
};

export async function getNowPlayingMovies() {
  const data = await apiFetch(`${TMDB_BASE_URL}/movie/now_playing?${TMDB_URL_REGION}`, options);

  return data.results || [];
}
