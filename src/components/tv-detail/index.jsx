import CreditsList from "../common/detail/CreditsList";
import DetailHero from "../common/detail/DetailHero";
import SimilarList from "../common/detail/SimilarList";
import SectionLayout from "../common/SectionLayout";
import SeasonsList from "./SeasonsList";

const CREDITS = {
  cast: [
    { image: "/posters/whiplash.jpg", name: "John Malkovich", role: "John Doe" },
    { image: "/posters/whiplash.jpg", name: "John Malkovich", role: "John Doe" },
    { image: "/posters/whiplash.jpg", name: "John Malkovich", role: "John Doe" },
  ],
  crew: [{ image: "/posters/the-bear.jpg", name: "John Ham", role: "John Lam" }],
};

const SIMILAR = [
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
];

const SEASONS = [
  {
    air_date: "2022-06-23",
    episode_count: 8,
    id: 215540,
    name: "Season 1",
    overview: "",
    poster_path: "/l2NFRq7w6azQ2gyG0tDgJdkVACV.jpg",
    season_number: 1,
    vote_average: 8.3,
  },
  {
    air_date: "2023-06-22",
    episode_count: 10,
    id: 332307,
    name: "Season 2",
    overview:
      "In season two, Carmen 'Carmy' Berzatto, Sydney Adamu and Richard 'Richie' Jerimovich work to transform their grimy sandwich joint into a next-level spot. As they strip the restaurant down to its bones, the crew undertakes transformational journeys of their own, each forced to confront the past and reckon with who they want to be in the future.",
    poster_path: "/wXTfqXSjG0i4YaL3mEmQOTGO3uS.jpg",
    season_number: 2,
    vote_average: 8.8,
  },
  {
    air_date: "2024-06-26",
    episode_count: 10,
    id: 392941,
    name: "Season 3",
    overview:
      "In season three, Carmen 'Carmy' Berzatto, Sydney Adamu, and Richard 'Richie' Jerimovich do what it takes to elevate The Bear, their beef stand turned fine dining establishment, to the highest level, all while doing their best just to stay in business. Our chefs have learned that every second counts, but this season we'll find out if they have what it takes to make it to tomorrow.",
    poster_path: "/1r6xIemjvw58xanzE4KbBhY1N4p.jpg",
    season_number: 3,
    vote_average: 7.8,
  },
];

function TvDetail() {
  return (
    <div className="flex flex-col gap-6">
      <DetailHero />

      <SectionLayout title="Credits">
        <CreditsList credits={CREDITS} />
      </SectionLayout>

      <SectionLayout title="Seasons">
        <SeasonsList seasons={SEASONS} />
      </SectionLayout>

      <SectionLayout title="Similar">
        <SimilarList similars={SIMILAR} />
      </SectionLayout>
    </div>
  );
}

export default TvDetail;
