import { apiFetch } from "../api-method";
import { APP_BASE_URL } from "../Constants";

export async function getReviews(id) {
  const data = await apiFetch(`${APP_BASE_URL}/api/movie/${id}/review`, {
    cache: "no-store",
  });
  return data;
}
