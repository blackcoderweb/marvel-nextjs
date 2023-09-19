import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";


const getSeries = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/serials`);
    if (!res.ok) { throw new Error("fetch characters failed") }
    const data = await res.json();
    return data;
}

async function Series() {

    const { series, attribution } = await getSeries();
    
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">SERIES</h1>
      <CardsPagination totalItems={series.length} items={series} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default Series
