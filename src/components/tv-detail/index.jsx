import CreditsList from "../common/detail/CreditsList";
import DetailHero from "../common/detail/DetailHero";
import SimilarList from "../common/detail/SimilarList";
import SectionLayout from "../common/SectionLayout";
import SeasonsList from "./SeasonsList";

function TvDetail({ tv }) {
  const tvDetails = {
    poster_path: tv.poster_path,
    title: tv.name,
    release_year: tv.first_air_date?.split("-")[0],
    status: tv.in_production ? "Airing" : "Finished",
    next_episode: tv.next_episode_to_air?.air_date,
    seasons: tv.number_of_seasons,
    overview: tv.overview,
    genres: tv.genres,
    language: tv.original_language.toUpperCase(),
    website: tv.homepage,
    created_by: tv.created_by.map((d) => d.name).join(", "),
    cast: tv.credits?.cast
      .slice(0, 4)
      .map((c) => c.name)
      .join(", "),
  };

  return (
    <div className="flex flex-col gap-6">
      <DetailHero details={tvDetails} />

      <SectionLayout title="Credits">
        <CreditsList credits={tv.credits} />
      </SectionLayout>

      <SectionLayout title="Seasons">
        <SeasonsList seasons={tv.seasons} />
      </SectionLayout>

      <SectionLayout title="Similar">
        <SimilarList similars={tv.similar?.results} />
      </SectionLayout>
    </div>
  );
}

export default TvDetail;
