import { apiFetch } from "../api-method";
import { APP_BASE_URL } from "../Constants";

export async function getReviews(id) {
  try {
    const data = await apiFetch(`${APP_BASE_URL}/api/movie/${id}/review`, {
      next: {
        tags: ["reviews"],
      },
    });
    return data;
  } catch (e) {
    console.log("Reviews Error: ", e);
    return [];
  }
}
