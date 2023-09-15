import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";


const getCharacters = async () => {
  const res = await fetch("http://localhost:3000/api/characters");
  const data = await res.json();
  return data;
};

async function Characters() {
  
  const { characters, attribution } = await getCharacters();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">CHARACTERS</h1>
      <CardsPagination totalItems={characters.length} items={characters} />
      <Attribution attribution={attribution} />
    </div>
  );
}

export default Characters;
