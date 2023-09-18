import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getComicsByTitle = async (value) => {
    const res = await fetch(`http://127.0.0.1:3000/api/comics/search?value=${value}`);
    const data = await res.json();
    return data;
}

async function SearchComicsPage(request) {
    const {value} = request.searchParams;
    const {comics, attribution} = await getComicsByTitle(value);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">{comics.length} results found for "{value}" in COMICS</h1>
      <CardsPagination totalItems={comics.length} items={comics} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchComicsPage