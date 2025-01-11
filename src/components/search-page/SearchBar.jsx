"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleInput = useDebouncedCallback((e) => {
    const query = e.target.value;
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    if (query) params.set("q", query);
    else params.delete("q");

    router.push(pathname + "?" + params.toString());
  }, 400);

  return (
    <div>
      <input
        name="search"
        id="search"
        className="w-full bg-transparent border border-slate-500 h-10 sm:h-12 py-4 px-2 rounded-md focus:border-primary outline-none"
        placeholder="🔍 Search for any movie/tv show"
        onChange={handleInput}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}

export default SearchBar;
