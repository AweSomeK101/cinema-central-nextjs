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
      <SectionList title="Now Playing" items={nowPlayingMovies} />
      <SectionList title="Popular Movies" items={popularMovies} />
      <SectionList title="Upcoming" items={upcomingMovies} />
      <SectionList title="Top Rated Movies" items={topRatedMovies} />
    </div>
  );
}

export default Movies;
