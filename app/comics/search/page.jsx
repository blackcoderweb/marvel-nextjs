import Attribution from "@/components/Attribution";
import ComicCards from "@/components/ComicCards";

const getComicsByTitle = async (value) => {
    const res = await fetch(`http://localhost:3000/api/comics/search?value=${value}`);
    const data = await res.json();
    return data;
}

async function SearchComicsPage(request) {
    const {value} = request.searchParams;
    const {comics, attribution} = await getComicsByTitle(value);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">{comics.length} results found for "{value}" in COMICS</h1>
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-5">
        {comics.map((comic) => (
          <ComicCards comic={comic} key={comic.id} />
        ))}
      </div>
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchComicsPage