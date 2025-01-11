import Search from "@/components/search-page";

async function SearchPage({ searchParams }) {
  const params = await searchParams;

  return <Search params={params} />;
}

export default SearchPage;
