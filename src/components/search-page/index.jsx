import ResultGrid from "./ResultGrid";
import SearchBar from "./SearchBar";

const RESULTS = [
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "the bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "the bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "the bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "the bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "the bear", year: "2022", image: "/posters/the-bear.jpg" },
];

function Search() {
  return (
    <div>
      <SearchBar />
      <div className="mt-10">
        <ResultGrid items={RESULTS} />
      </div>
    </div>
  );
}

export default Search;
