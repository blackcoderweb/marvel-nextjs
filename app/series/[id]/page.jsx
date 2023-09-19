
import Attribution from "@/components/Attribution";
import RelatedItemsCard from "@/components/RelatedItemsCard";
import SingleComicEventSerie from "@/components/SingleComicEventSerie";


const getSerieById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/serials/${id}`);
  const data = await res.json();
  return data;
};

const getCharactersBySerieId = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/serials/${id}/characters`);
  const data = await res.json();
  return data;
};

const getComicsBySerieId = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/serials/${id}/comics`);
  const data = await res.json();
  return data;
};

const getCreatorsBySerieId = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/serials/${id}/creators`);
  const data = await res.json();
  return data;
};

const getEventsBySerieId = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/serials/${id}/events`);
  const data = await res.json();
  return data;
};

async function SeriePage({ params }) {
  const { serie, attribution } = await getSerieById(params.id);
  const { serieCharacters } = await getCharactersBySerieId(params.id);
  const { serieComics } = await getComicsBySerieId(params.id);
  const { serieCreators } = await getCreatorsBySerieId(params.id);
  const { serieEvents } = await getEventsBySerieId(params.id);

  return (
    <div className="flex flex-col items-center pt-5">
      <SingleComicEventSerie item={serie} />
      <hr className="w-[100%] mt-10 border-blue-500"/>
      <div className="flex flex-wrap gap-10 p-10">
        {serieCharacters.length > 0 && (
          <RelatedItemsCard heading="CHARACTERS" list={serieCharacters} />
        )}
        {serieComics.length > 0 && (
          <RelatedItemsCard heading="COMICS" list={serieComics} />
        )}
        {serieCreators.length > 0 && (
          <RelatedItemsCard heading="CREATORS" list={serieCreators} />
        )}
        {serieEvents.length > 0 && (
          <RelatedItemsCard heading="EVENTS" list={serieEvents} />
        )}
      </div>
      <Attribution attribution={attribution} />
    </div>
  );
}

export default SeriePage;
