function SearchBar() {
  return (
    <div>
      <input
        name="search"
        id="search"
        className="w-full bg-transparent border border-slate-500 h-10 sm:h-12 py-4 px-2 rounded-md focus:border-primary outline-none"
        placeholder="🔍 Search for any movie/tv show"
      />
    </div>
  );
}

export default SearchBar;
