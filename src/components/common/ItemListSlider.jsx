import { TMDB_IMAGE_URL } from "@/lib/Constants";
import { CardCarousel, CardCarouselItem } from "../utils/Carousel";
import ItemCard from "./ItemCard";

function ItemListSlider({ items }) {
  return (
    <CardCarousel>
      {items &&
        items.map((item, index) => (
          <CardCarouselItem key={index}>
            <ItemCard
              slug={`/movies/${item.id}`}
              image={`${TMDB_IMAGE_URL}/w185${item.poster_path}`}
              primaryText={item.title}
              secondaryText={item.release_date?.split("-")[0]}
              size="sm"
            />
          </CardCarouselItem>
        ))}
    </CardCarousel>
  );
}

export default ItemListSlider;
