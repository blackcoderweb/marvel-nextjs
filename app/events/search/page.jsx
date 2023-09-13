import Attribution from "@/components/Attribution";
import EventCards from "@/components/EventCards";

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
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-5">
        {events.map((event) => (
          <EventCards event={event} key={event.id} />
        ))}
      </div>
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchEventsPage