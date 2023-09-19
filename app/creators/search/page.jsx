import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getCreatorsByName = async (value) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/creators/search?value=${value}`);
    const data = await res.json();
    return data;
}

async function SearchCreatorsPage(request) {
    const {value} = request.searchParams;
    const {creators, attribution} = await getCreatorsByName(value);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">{creators.length} results found for "{value}" in CREATORS</h1>
      <CardsPagination totalItems={creators.length} items={creators} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchCreatorsPage