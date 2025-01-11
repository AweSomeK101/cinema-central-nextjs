import MovieDetail from "@/components/movie-detail";
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
  const movie = await getMovieDetail(movie_id);

  return <MovieDetail movie={movie} />;
}

export default MovieDetailPage;
