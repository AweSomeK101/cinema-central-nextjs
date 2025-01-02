import { CardCarousel, CardCarouselItem } from "@/components/utils/Carousel";
import ItemCard from "../ItemCard";

function SimilarList({ similars }) {
  if (!similars || similars.length < 1) return null;
  return (
    <>
      <CardCarousel>
        {similars.map((item, index) => (
          <CardCarouselItem key={index}>
            <ItemCard
              image={item.image}
              primaryText={item.title}
              secondaryText={item.year}
              size="xs"
            />
          </CardCarouselItem>
        ))}
      </CardCarousel>
    </>
  );
}

export default SimilarList;
