import SectionList from "../common/SectionList";
import { getNowPlayingMovies } from "@/lib/tmdb";

async function Movies() {
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <div>
      <SectionList title="Now Playing" items={nowPlayingMovies} />
      {/* <SectionList title="Popular Movies" items={MOVIES} /> */}
      {/* <SectionList title="Trending Movies" items={MOVIES} /> */}
    </div>
  );
}

export default Movies;
