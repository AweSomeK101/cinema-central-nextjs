import CreditsList from "../common/detail/CreditsList";
import DetailHero from "../common/detail/DetailHero";
import SimilarList from "../common/detail/SimilarList";
import SectionLayout from "../common/SectionLayout";

const CREDITS = {
  cast: [
    { image: "/posters/whiplash.jpg", name: "John Malkovich", role: "John Doe" },
    { image: "/posters/whiplash.jpg", name: "John Malkovich", role: "John Doe" },
    { image: "/posters/whiplash.jpg", name: "John Malkovich", role: "John Doe" },
  ],
  crew: [{ image: "/posters/the-bear.jpg", name: "John Ham", role: "John Lam" }],
};

const SIMILAR = [
  { title: "Whiplash", year: "2014", image: "/posters/whiplash.jpg" },
  { title: "The Bear", year: "2022", image: "/posters/the-bear.jpg" },
];

function MovieDetail() {
  return (
    <div className="flex flex-col gap-6">
      <DetailHero />

      <SectionLayout title="Credits">
        <CreditsList credits={CREDITS} />
      </SectionLayout>

      <SectionLayout title="Similar">
        <SimilarList similars={SIMILAR} />
      </SectionLayout>
    </div>
  );
}

export default MovieDetail;
