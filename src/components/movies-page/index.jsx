import SectionList from "../common/SectionList";

const MOVIES = [
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
];

function Movies() {
  return (
    <div className="my-6">
      <SectionList title="Now Playing" items={MOVIES} />
      <SectionList title="Popular Movies" items={MOVIES} />
      <SectionList title="Trending Movies" items={MOVIES} />
    </div>
  );
}

export default Movies;
