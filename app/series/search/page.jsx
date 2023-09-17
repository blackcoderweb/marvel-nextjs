import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getSeriesByTitle = async (value) => {
    const res = await fetch(`http://localhost:3000/api/serials/search?value=${value}`);
    const data = await res.json();
    return data;
}

async function SearchSeriesPage(request) {
    const {value} = request.searchParams;
    const {series, attribution} = await getSeriesByTitle(value);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">{series.length} results found for "{value}" in SERIES</h1>
      <CardsPagination totalItems={series.length} items={series} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchSeriesPage