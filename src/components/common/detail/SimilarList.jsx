import { CardCarousel, CardCarouselItem } from "@/components/utils/Carousel";
import ItemCard from "../ItemCard";
import { TMDB_IMAGE_URL } from "@/lib/Constants";

function SimilarList({ similars, type }) {
  if (!similars || similars.length < 1) return null;
  return (
    <>
      <CardCarousel>
        {similars.map((similar) => (
          <CardCarouselItem key={similar.id}>
            <ItemCard
              slug={`/${type}/${similar.id}`}
              image={`${TMDB_IMAGE_URL}/w154${similar.poster_path}`}
              primaryText={type === "movies" ? similar.title : similar.name}
              secondaryText={
                type === "movies"
                  ? similar.release_date?.split("-")[0]
                  : similar.first_air_date?.split("-")[0]
              }
              size="xs"
            />
          </CardCarouselItem>
        ))}
      </CardCarousel>
    </>
  );
}

export default SimilarList;
