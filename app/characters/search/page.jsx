import Attribution from "@/components/Attribution";
import CharacterCards from "@/components/CharacterCards";


const getCharactersByName = async (value) => {
    const res = await fetch(`http://localhost:3000/api/characters/search?value=${value}`);
    const data = await res.json();
    return data;
}

async function SearchCaractersPage(request) {
    const {value} = request.searchParams;
    const {characters, attribution} = await getCharactersByName(value);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">{characters.length} results found for "{value}" in CHARACTERS</h1>
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-5">
        {characters.map((character) => (
          <CharacterCards character={character} key={character.id} />
        ))}
      </div>
      <Attribution attribution={attribution} />
    </div>
  )
}

export default SearchCaractersPage