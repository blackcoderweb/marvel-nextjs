import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getCharactersByName = async (value) => {
  const res = await fetch(
    `http://127.0.0.1:3000/api/characters/search?value=${value}`
  );
  const data = await res.json();
  return data;
};

async function SearchCaractersPage(request) {
  const { value } = request.searchParams;
  const { characters, attribution } = await getCharactersByName(value);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">
        {characters.length} results found for "{value}" in CHARACTERS
      </h1>
      <CardsPagination totalItems={characters.length} items={characters} />
      <Attribution attribution={attribution} />
    </div>
  );
}

export default SearchCaractersPage;
