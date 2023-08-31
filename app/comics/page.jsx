import ComicCards from "@/components/ComicCards";

const getComics = async () => {
  const apiKey = process.env.DATA_API_KEY;
  const hash = process.env.HASH;

  const res = await fetch(
    "https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=1&apikey=" +
      `${apiKey}` +
      "&hash=" +
      `${hash}`
  );

  const data = await res.json();

  return {
    comics: data.data.results,
    attribution: data.attributionText
  };
};

async function Comics() {
  const { comics, attribution } = await getComics();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">COMICS</h1>
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-4">
        {comics.map((comic) => (
          <ComicCards comic={comic} key={comic.id} />
        ))}
      </div>
      <p className="py-10 text-center text-orange-600">{attribution}</p>
    </div>
  );
}

export default Comics;
