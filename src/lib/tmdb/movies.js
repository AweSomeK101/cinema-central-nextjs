import { TMDB_BASE_URL, TMBD_TOKEN, TMDB_URL_REGION } from "../Constants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMBD_TOKEN}`,
  },
};

export async function getNowPlayingMovies() {
  const res = await fetch(`${TMDB_BASE_URL}/movie/now_playing?${TMDB_URL_REGION}`, options);

  if (!res.ok) {
    console.log(res);
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  return data.results || [];
}
