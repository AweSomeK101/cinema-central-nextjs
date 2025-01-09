import MovieDetail from "@/components/movie-detail";
import { getMovieDetail } from "@/lib/tmdb";

async function MovieDetailPage({ params }) {
  const movie_id = (await params).movie_id;
  const movie = await getMovieDetail(movie_id);

  return <MovieDetail movie={movie} />;
}

export default MovieDetailPage;
