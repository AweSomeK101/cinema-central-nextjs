import TvDetail from "@/components/tv-detail";
import { getTVDetail } from "@/lib/tmdb";

export async function generateMetadata({ params }) {
  const tv_id = (await params).tv_id;
  const tv = await getTVDetail(tv_id);

  return {
    title: `CC - ${tv.name}`,
  };
}

async function TvDetailPage({ params }) {
  const tv_id = (await params).tv_id;
  const [tv, reviews] = await Promise.all([getTVDetail(tv_id), getReviews(tv_id)]);

  return <TvDetail tv={{ ...tv, reviews }} />;
}

export default TvDetailPage;
