import { TMDB_IMAGE_URL } from "@/lib/Constants";
import Image from "next/image";

function DetailHero({ details }) {
  const {
    poster_path,
    title,
    release_year,
    runtime,
    overview,
    genres,
    language,
    director,
    cast,
    imdb,
    website,
    status,
    next_episode,
    seasons,
    created_by,
  } = details;

  return (
    <section className="flex flex-col sm:flex-row gap-2 md:gap-4">
      <div className="mx-auto sm:mx-0 max-w-[240px]">
        <Image
          src={`${TMDB_IMAGE_URL}/w342${poster_path}`}
          alt={title}
          width={240}
          height={240 / 0.7}
          priority
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="text-center sm:text-start">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">
            {release_year} {runtime ? runtime + "min" : ""} {seasons ? seasons + "Seasons" : ""}{" "}
            {language}
          </p>
        </div>

        <p className="text-justify sm:text-start sm:w-11/12 max-w-[650px]">{overview}</p>

        <div>
          {director && (
            <p>
              <span className="text-sm text-gray-300">director: </span>
              {director}
            </p>
          )}
          {created_by && (
            <p>
              <span className="text-sm text-gray-300">creator: </span>
              {created_by}
            </p>
          )}
          {cast && (
            <p>
              <span className="text-sm text-gray-300">cast: </span>
              {cast}
            </p>
          )}
          {status && (
            <p>
              <span className="text-sm text-gray-300">status: </span>
              {status}
            </p>
          )}
          {next_episode && (
            <p>
              <span className="text-sm text-gray-300">next episode: </span>
              {next_episode}
            </p>
          )}
          <p>
            <span className="text-sm text-gray-300">external: </span>
            <span className="inline-flex gap-2 text-accent">
              {website && (
                <a
                  href={website}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
              {imdb && (
                <a
                  href={`https://imdb.com/title/${imdb}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                >
                  IMDb
                </a>
              )}
            </span>
          </p>
        </div>

        <div className="text-primary flex gap-4">
          {genres && genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
        </div>
      </div>
    </section>
  );
}

export default DetailHero;
