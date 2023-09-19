import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getComics = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_LOCAL}/api/comics`
  );
  if (!res.ok) {
    throw new Error("fetch comics failed");
  }
  const data = await res.json();

  return data;
};

async function Comics() {
  const { comics, attribution } = await getComics();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">COMICS</h1>
      <CardsPagination totalItems={comics.length} items={comics} />
      <Attribution attribution={attribution} />
    </div>
  );
}

export default Comics;
