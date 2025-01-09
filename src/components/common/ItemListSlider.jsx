import { TMDB_IMAGE_URL } from "@/lib/Constants";
import { CardCarousel, CardCarouselItem } from "../utils/Carousel";
import ItemCard from "./ItemCard";

function ItemListSlider({ items, type }) {
  return (
    <CardCarousel>
      {items &&
        items.map((item, index) => (
          <CardCarouselItem key={index}>
            <ItemCard
              slug={`/${type}/${item.id}`}
              image={`${TMDB_IMAGE_URL}/w185${item.poster_path}`}
              primaryText={type === "movies" ? item.title : item.name}
              secondaryText={
                type === "movies"
                  ? item.release_date?.split("-")[0]
                  : item.first_air_date?.split("-")[0]
              }
              size="sm"
            />
          </CardCarouselItem>
        ))}
    </CardCarousel>
  );
}

export default ItemListSlider;
