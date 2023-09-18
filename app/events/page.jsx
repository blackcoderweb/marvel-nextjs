import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getEvents = async () => {
    const res = await fetch("http://127.0.0.1:3000/api/events");
    const data = await res.json();
    return data;
}

async function Events() {

    const { events, attribution } = await getEvents();
    
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">EVENTS</h1>
      <CardsPagination totalItems={events.length} items = {events} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default Events