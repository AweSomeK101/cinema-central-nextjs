import FilmIcon from "@/../public/icons/film.svg";
import SearchIcon from "@/../public/icons/search.svg";
import TvIcon from "@/../public/icons/tv.svg";
import NavButton from "./NavButton";

function Sidebar() {
  return (
    <nav className="flex fixed sm:static bottom-0 sm:flex-col sm:justify-start justify-around sm:gap-6 bg-black sm:py-4 pb-2 w-full sm:w-12 z-10">
      <NavButton href="/movies">
        <FilmIcon alt="movies" />
      </NavButton>
      <NavButton href="/tv">
        <TvIcon alt="tv shows" />
      </NavButton>
      <NavButton href="/search">
        <SearchIcon alt="search" />
      </NavButton>
    </nav>
  );
}

export default Sidebar;
