import { getSearchResults } from "@/lib/tmdb";
import ResultGrid from "./ResultGrid";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { Suspense } from "react";

async function Search({ params }) {
  const queryResult = await getSearchResults(params.q, params.page);

  return (
    <div>
      <SearchBar />
      <div className="my-10">
        <Suspense fallback={<p>Loading...</p>}>
          <ResultGrid items={queryResult.results} />
        </Suspense>
      </div>
      <Pagination totalPages={queryResult.total_pages} />
    </div>
  );
}

export default Search;
