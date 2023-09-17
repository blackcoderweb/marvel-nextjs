import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";


const getEventsByName = async (value) => {
    const res = await fetch(`http://localhost:3000/api/events/search?value=${value}`);
    const data = await res.json();
    return data;
}

async function SearchEventsPage(request) {
    const {value} = request.searchParams;
    const {events, attribution} = await getEventsByName(value);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">{events.length} results found for "{value}" in EVENTS</h1>
      <CardsPagination totalItems={events.length} items={events} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchEventsPage