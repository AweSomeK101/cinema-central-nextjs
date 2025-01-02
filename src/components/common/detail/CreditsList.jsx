import { CardCarousel, CardCarouselItem } from "@/components/utils/Carousel";
import { Tabs } from "@/components/utils/Tabs";
import ItemCard from "../ItemCard";

function handleCreditsObj(credits) {
  if (!credits) return [];

  return Object.keys(credits).map((key) => ({
    name: key,
    component: <Credits creditList={credits[key]} />,
  }));
}

function CreditsList({ credits }) {
  const TABS = handleCreditsObj(credits);

  return (
    <>
      <Tabs tabs={TABS} />
    </>
  );
}

function Credits({ creditList }) {
  return (
    <CardCarousel>
      {creditList.map((credit, index) => (
        <CardCarouselItem key={index}>
          <ItemCard
            image={credit.image}
            primaryText={credit.name}
            secondaryText={credit.role}
            size="xs"
          />
        </CardCarouselItem>
      ))}
    </CardCarousel>
  );
}

export default CreditsList;
