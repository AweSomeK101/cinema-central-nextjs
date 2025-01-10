import TvDetail from "@/components/tv-detail";
import { getTVDetail } from "@/lib/tmdb";

async function TvDetailPage({ params }) {
  const tv_id = (await params).tv_id;
  const tv = await getTVDetail(tv_id);

  return <TvDetail tv={tv} />;
}

export default TvDetailPage;
