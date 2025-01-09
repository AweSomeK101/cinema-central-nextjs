import { getTrendingTV, getOnTheAirTV, getPopularTV, getTopRatedTV } from "@/lib/tmdb";
import SectionList from "../common/SectionList";

async function TV() {
  const trendingTv = await getTrendingTV();
  const onTheAirTv = await getOnTheAirTV();
  const populatTv = await getPopularTV();
  const topRatedTv = await getTopRatedTV();

  return (
    <div>
      <SectionList title="Treding Shows" items={trendingTv} type="tv" />
      <SectionList title="Popular Shows" items={populatTv} type="tv" />
      <SectionList title="On The Air" items={onTheAirTv} type="tv" />
      <SectionList title="Top Rated Shows" items={topRatedTv} type="tv" />
    </div>
  );
}

export default TV;
