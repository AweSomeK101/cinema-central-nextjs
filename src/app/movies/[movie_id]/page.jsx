import MovieDetail from "@/components/movie-detail";
import { getReviews } from "@/lib/reviews";
import { getMovieDetail } from "@/lib/tmdb";

export async function generateMetadata({ params }) {
  const movie_id = (await params).movie_id;
  const movie = await getMovieDetail(movie_id);

  return {
    title: `CC - ${movie.title}`,
  };
}

async function MovieDetailPage({ params }) {
  const movie_id = (await params).movie_id;
  const [movie, reviews] = await Promise.all([getMovieDetail(movie_id), getReviews(movie_id)]);

  return <MovieDetail movie={{ ...movie, reviews }} />;
}

export default MovieDetailPage;
