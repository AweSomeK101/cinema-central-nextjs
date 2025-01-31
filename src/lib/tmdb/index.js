import { apiFetch } from "../api-method";
import { TMBD_TOKEN, TMDB_BASE_URL } from "../Constants";

export * from "./movies";
export * from "./tv";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMBD_TOKEN}`,
  },
  next: {
    revalidate: 0,
  },
};

export async function getSearchResults(query, page = 1) {
  if (!query) return {};

  const data = await apiFetch(
    `${TMDB_BASE_URL}/search/multi?query=${query}&page=${page}&language=en-IN`,
    options
  );

  return data;
}
