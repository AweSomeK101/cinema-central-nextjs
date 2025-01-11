import { CardCarousel, CardCarouselItem } from "@/components/utils/Carousel";
import { Tabs } from "@/components/utils/Tabs";
import ItemCard from "../ItemCard";
import { FALLBACK_PROFILE_IMAGE, TMDB_IMAGE_URL } from "@/lib/Constants";

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
      {creditList.slice(0, 12).map((credit) => (
        <CardCarouselItem key={credit.credit_id}>
          <ItemCard
            image={`${TMDB_IMAGE_URL}/w185${credit.profile_path}`}
            fallback={FALLBACK_PROFILE_IMAGE}
            primaryText={credit.name}
            secondaryText={credit.job || credit.character}
            size="xs"
          />
        </CardCarouselItem>
      ))}
    </CardCarousel>
  );
}

export default CreditsList;
