import FilmIcon from "@/../public/icons/film.svg";
import SearchIcon from "@/../public/icons/search.svg";
import TvIcon from "@/../public/icons/tv.svg";

function Sidebar() {
  return (
    <nav className="flex flex-col gap-6 bg-black py-4 w-12">
      <div className="cursor-pointer grid place-items-center h-8 hover:text-accent current-page">
        <FilmIcon alt="movies" />
      </div>
      <div className="cursor-pointer grid place-items-center h-8 hover:text-accent">
        <TvIcon alt="tv shows" />
      </div>
      <div className="cursor-pointer grid place-items-center h-8 hover:text-accent">
        <SearchIcon alt="search" />
      </div>
    </nav>
  );
}

export default Sidebar;
