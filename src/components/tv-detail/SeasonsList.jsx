import { FALLBACK_POSTER_IMAGE, TMDB_IMAGE_URL } from "@/lib/Constants";
import Image from "@/components/utils/FallbackImage";

function SeasonsList({ seasons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-4">
      {seasons.map((season) => (
        <Season season={season} key={season.id} />
      ))}
    </div>
  );
}

function Season({ season }) {
  const { name, overview, season_number, air_date, episode_count, poster_path } = season;
  return (
    <div className="flex gap-2 shadow-slate-900 shadow rounded p-2 border border-slate-600">
      <div className="min-w-[120px] h-auto relative">
        <Image
          src={`${TMDB_IMAGE_URL}/w154${poster_path}`}
          fallback={FALLBACK_POSTER_IMAGE}
          alt={name}
          width={100}
          height={100 / 0.7}
        />
      </div>

      <div>
        <p className="text-lg font-medium">{`${name}`}</p>
        <p className="text-gray-300 text-sm">{`${air_date} ${episode_count}EPs`}</p>

        <p className="mt-4 line-clamp-3">{overview}</p>
      </div>
    </div>
  );
}

export default SeasonsList;
