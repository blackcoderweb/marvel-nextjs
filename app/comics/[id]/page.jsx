
import Attribution from "@/components/Attribution";
import RelatedItemsCard from "@/components/RelatedItemsCard";
import SingleComicEventSerie from "@/components/SingleComicEventSerie";

const getComicById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/comics/${id}`
  );

  const data = await res.json();

  return data
};

const getCharactersByComicId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/comics/${id}/characters`);

  const data = await res.json();

  return data;
}

const getCreatorsByComicId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/comics/${id}/creators`);

  const data = await res.json();

  return data;
}

const getEventsByComicId = async(id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/comics/${id}/events`);

  const data = await res.json();

  return data;
}

async function ComicPage({ params }) {
  const { comic, attribution } = await getComicById(params.id);
  const { comicCharacters } = await getCharactersByComicId(params.id);
  const { comicCreators } = await getCreatorsByComicId(params.id);
  const { comicEvents } = await getEventsByComicId(params.id);

  return (
    <div className="flex flex-col items-center pt-5">
      <SingleComicEventSerie item={comic} />
      <hr className="w-[100%] mt-10 border-blue-500"/>
      <div className="flex flex-wrap gap-10 p-10">
        {comicCharacters.length > 0 && (
          <RelatedItemsCard heading="CHARACTERS" list={comicCharacters} />
        )}
        {comicCreators.length > 0 && (
          <RelatedItemsCard heading="CREATORS" list={comicCreators} />
        )}
        {comicEvents.length > 0 && (
          <RelatedItemsCard heading="EVENTS" list={comicEvents} />
        )}
      </div>
      <Attribution attribution={attribution} />
    </div>
  );
}

export default ComicPage;
