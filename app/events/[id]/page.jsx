
import Attribution from "@/components/Attribution";
import RelatedItemsCard from "@/components/RelatedItemsCard";
import SingleComicEventSerie from "@/components/SingleComicEventSerie";



const getEventById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/events/${id}`);
    const data = await res.json();
    return data;
}

const getCharactersByEventId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/events/${id}/characters`);
    const data = await res.json();
    return data;
}

const getComicsByEventId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/events/${id}/comics`);
    const data = await res.json();
    return data;
}

const getCreatorsByEventId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/events/${id}/creators`);
    const data = await res.json();
    return data;
}

const getSeriesByEventId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/events/${id}/serials`);
    const data = await res.json();
    return data;
}

async function EventPage({params}) {
    const {event, attribution} = await getEventById(params.id)
    const { eventCharacters } = await getCharactersByEventId(params.id);
    const { eventComics } = await getComicsByEventId(params.id);
    const { eventCreators } = await getCreatorsByEventId(params.id);
    const { eventSeries } = await getSeriesByEventId(params.id);
    

  return (
    <div className="flex flex-col items-center pt-5">
      <SingleComicEventSerie item={event} />
      <hr className="w-[100%] mt-10 border-blue-500"/>
      <div className="flex flex-wrap gap-10 p-10">
        {eventCharacters.length > 0 && (
          <RelatedItemsCard heading="CHARACTERS" list={eventCharacters} />
        )}
        {eventComics.length > 0 && (
          <RelatedItemsCard heading="COMICS" list={eventComics} />
        )}
        {eventCreators.length > 0 && (
          <RelatedItemsCard heading="CREATORS" list={eventCreators} />
        )}
        {eventSeries.length > 0 && (
          <RelatedItemsCard heading="SERIES" list={eventSeries} />
        )}
        
      </div>
      <Attribution attribution={attribution} />
    </div>
  )
}

export default EventPage