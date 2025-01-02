import { CardCarousel, CardCarouselItem } from "../utils/Carousel";
import ItemCard from "./ItemCard";

function ItemListSlider({ items }) {
  return (
    <CardCarousel>
      {items &&
        items.map((item, index) => (
          <CardCarouselItem key={index}>
            <ItemCard
              image={item.image}
              primaryText={item.title}
              secondaryText={item.year}
              size="sm"
            />
          </CardCarouselItem>
        ))}
    </CardCarousel>
  );
}

export default ItemListSlider;
