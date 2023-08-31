import CharacterCards from "@/components/CharacterCards";

const getCharacters = async () => {
  const apiKey = process.env.DATA_API_KEY;
  const hash = process.env.HASH;

  const res = await fetch(
    "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=" +
      `${apiKey}` +
      "&hash=" +
      `${hash}`
  );

  const data = await res.json();
  return {
    characters: data.data.results,
    attribution: data.attributionText,
  };
};

async function Characters() {
  const { characters, attribution } = await getCharacters();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">CHARACTERS</h1>
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-4">
        {characters.map((character) => (
          <CharacterCards character={character} key={character.id} />
        ))}
      </div>
      <p className="py-10 text-center text-orange-600">{attribution}</p>
    </div>
  );
}

export default Characters;
