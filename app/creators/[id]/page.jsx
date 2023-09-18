import Attribution from "@/components/Attribution";
import RelatedItemsCard from "@/components/RelatedItemsCard";
import SingleCreatorCard from "@/components/SingleCreatorCard";

const getCreatorById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/creators/${id}`);

  const data = await res.json();

  return data;
};

const getComicsByCreatorId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/creators/${id}/comics`);

  const data = await res.json();

  return data;
};

const getEventsByCreatorId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/creators/${id}/events`);

  const data = await res.json();

  return data;
};

const getSeriesByCreatorId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/creators/${id}/serials`);

  const data = await res.json();

  return data;
};

async function CreatorPage({ params }) {
  const { creator, attribution } = await getCreatorById(params.id);
  const { creatorComics } = await getComicsByCreatorId(params.id);
  const { creatorEvents } = await getEventsByCreatorId(params.id);
  const { creatorSeries } = await getSeriesByCreatorId(params.id);

  return (
    <div className="flex flex-col items-center pt-5">
      <SingleCreatorCard creator={creator} />
      <hr className="w-[100%] mt-10 border-blue-500" />
      <div className="flex flex-wrap gap-10 p-10">
        {creatorComics.length > 0 && (
          <RelatedItemsCard heading="COMICS" list={creatorComics} />
        )}
        {creatorEvents.length > 0 && (
          <RelatedItemsCard heading="EVENTS" list={creatorEvents} />
        )}
        {creatorSeries.length > 0 && (
          <RelatedItemsCard heading="SERIES" list={creatorSeries} />
        )}
      </div>
      <Attribution attribution={attribution} />
    </div>
  );
}

export default CreatorPage;
