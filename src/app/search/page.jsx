import Search from "@/components/search-page";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const { q } = params;

  return {
    title: q ? `CC - ${q}` : "CC - Search",
  };
}

async function SearchPage({ searchParams }) {
  const params = await searchParams;

  return <Search params={params} />;
}

export default SearchPage;
