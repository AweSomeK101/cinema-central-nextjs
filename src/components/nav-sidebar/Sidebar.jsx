import FilmIcon from "@/../public/icons/film.svg";
import SearchIcon from "@/../public/icons/search.svg";
import TvIcon from "@/../public/icons/tv.svg";
import NavButton from "./NavButton";

function Sidebar() {
  return (
    <nav className="flex flex-col gap-6 bg-black py-4 w-12">
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
