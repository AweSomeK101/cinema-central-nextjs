import { CardCarousel, CardCarouselItem } from "../utils/Carousel";
import ItemCard from "./ItemCard";

function ItemListSlider({ items }) {
  return (
    <CardCarousel>
      {items &&
        items.map((item, index) => (
          <CardCarouselItem key={index}>
            <ItemCard image={item.image} title={item.title} year={item.year} size="sm" />
          </CardCarouselItem>
        ))}
    </CardCarousel>
  );
}

export default ItemListSlider;
