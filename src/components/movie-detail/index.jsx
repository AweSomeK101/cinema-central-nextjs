import CreditsList from "../common/detail/CreditsList";
import DetailHero from "../common/detail/DetailHero";
import ReviewsList from "../common/detail/ReviewsList";
import SimilarList from "../common/detail/SimilarList";
import SectionLayout from "../common/SectionLayout";

function MovieDetail({ movie }) {
  const movieDetails = {
    poster_path: movie.poster_path,
    title: movie.title,
    release_year: movie.release_date?.split("-")[0],
    runtime: movie.runtime,
    overview: movie.overview,
    genres: movie.genres,
    language: movie.original_language.toUpperCase(),
    imdb: movie.imdb_id,
    website: movie.homepage,
    director: movie.credits?.crew
      .filter((c) => c.job.toLowerCase() === "director")
      .map((d) => d.name)
      .join(", "),
    cast: movie.credits?.cast
      .slice(0, 4)
      .map((c) => c.name)
      .join(", "),
  };

  return (
    <div className="flex flex-col gap-6">
      <DetailHero details={movieDetails} />

      <SectionLayout title="Credits">
        <CreditsList credits={movie.credits} />
      </SectionLayout>

      <SectionLayout title="Similar">
        <SimilarList similars={movie.similar?.results} type="movies" />
      </SectionLayout>

      <SectionLayout title="Reviews">
        <ReviewsList reviews={movie.reviews} />
      </SectionLayout>
    </div>
  );
}

export default MovieDetail;
