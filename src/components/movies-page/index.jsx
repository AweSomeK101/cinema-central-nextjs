import SectionList from "../common/SectionList";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/tmdb";

async function Movies() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <div>
      <SectionList title="Now Playing" items={nowPlayingMovies} type="movies" />
      <SectionList title="Popular Movies" items={popularMovies} type="movies" />
      <SectionList title="Upcoming" items={upcomingMovies} type="movies" />
      <SectionList title="Top Rated Movies" items={topRatedMovies} type="movies" />
    </div>
  );
}

export default Movies;
