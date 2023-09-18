import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getComics = async () => {

  const res = await fetch("http://127.0.0.1:3000/api/comics");

  const data = await res.json();

  return data
};

async function Comics() {
  const { comics, attribution } = await getComics();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">COMICS</h1>
      <CardsPagination totalItems={comics.length} items={comics}/>
      <Attribution attribution={attribution} />
    </div>
  );
}

export default Comics;
