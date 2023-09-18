import Attribution from "@/components/Attribution";
import RelatedItemsCard from "@/components/RelatedItemsCard";
import SingleCharacterCard from "@/components/SingleCharacterCard";


const getCharacterById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/characters/${id}`);

  const data = await res.json();

  return data;
};

const getComicsByCharacterId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/characters/${id}/comics`);

  const data = await res.json();

  return data;
};

const getEventsByCharacterId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/characters/${id}/events`);

  const data = await res.json();

  return data;
};

const getSeriesByCharacterId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/characters/${id}/serials`);

  const data = await res.json();

  return data;
};

async function CharacterPage({ params }) {
  const { character, attribution } = await getCharacterById(params.id);
  const { characterComics } = await getComicsByCharacterId(params.id);
  const { characterEvents } = await getEventsByCharacterId(params.id);
  const { characterSeries } = await getSeriesByCharacterId(params.id);

  return (
    <div className="flex flex-col items-center py-10">
      <SingleCharacterCard character={character} />
     
      <div className="flex flex-wrap gap-10 p-10">
        {characterComics.length > 0 && (
          <RelatedItemsCard heading="COMICS" list={characterComics} />
        )}
        {characterEvents.length > 0 && (
          <RelatedItemsCard heading="EVENTS" list={characterEvents} />
        )}
        {characterSeries.length > 0 && (
          <RelatedItemsCard heading="SERIES" list={characterSeries} />
        )}
      </div>
      <Attribution attribution={attribution} />
    </div>
  );
}

export default CharacterPage;
