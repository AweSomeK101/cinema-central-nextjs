import SectionList from "../common/SectionList";

const SHOWS = [
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
];

function TV() {
  return (
    <div className="my-6">
      <SectionList title="Now Airing" items={SHOWS} />
      <SectionList title="Popular Shows" items={SHOWS} />
      <SectionList title="Trending Shows" items={SHOWS} />
    </div>
  );
}

export default TV;
