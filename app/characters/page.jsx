import Attribution from "@/components/Attribution";
import CharacterCards from "@/components/CharacterCards";

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
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-5">
        {characters.map((character) => (
          <CharacterCards character={character} key={character.id} />
        ))}
      </div>
      <Attribution attribution={attribution} />
    </div>
  );
}

export default Characters;
