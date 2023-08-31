import SingleCharacterCard from "@/components/SingleCharacterCard";

const getCharacter = async (id)=> {
  const apiKey = process.env.DATA_API_KEY;
  const hash = process.env.HASH;

  const res = await fetch("https://gateway.marvel.com:443/v1/public/characters/"+`${id}`+"?ts=1&apikey=" +
  `${apiKey}` +
  "&hash=" +
  `${hash}`)
  const data = await res.json()
  return {
    character: data.data.results,
    attribution: data.attributionText,
  };
}

async function CharacterPage({params}) {

    const {character} = await getCharacter(params.id);

  return (
    <div className="flex flex-col items-center pt-5">
      <SingleCharacterCard character={character} />
    </div>
  )
}

export default CharacterPage