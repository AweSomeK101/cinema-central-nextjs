import { TMDB_IMAGE_URL } from "@/lib/Constants";
import ItemCard from "../common/ItemCard";

function ResultGrid({ items }) {
  return (
    <section>
      <div className="flex flex-wrap gap-4">
        {items &&
          items
            .filter((item) => item.media_type !== "person")
            .map((item) => (
              <ItemCard
                image={`${TMDB_IMAGE_URL}/w342${item.poster_path}`}
                primaryText={item.media_type == "movie" ? item.title : item.name}
                secondaryText={
                  item.media_type == "movie"
                    ? item.release_date?.split("-")[0]
                    : item.first_air_date?.split("-")[0]
                }
                slug={item.media_type == "movie" ? "/movies/" + item.id : "/tv/" + item.id}
                key={item.id}
              />
            ))}
      </div>
    </section>
  );
}

export default ResultGrid;
