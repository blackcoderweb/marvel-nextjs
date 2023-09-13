import Attribution from "@/components/Attribution";
import CreatorCards from "@/components/CreatorCards";

const getCreators = async () => {

  const res = await fetch("http://localhost:3000/api/creators");

  const data = await res.json()
  
  return data

}

async function Creators() {

  const {creators, attribution} = await getCreators()
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">CREATORS</h1>
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-5">
        {creators.map((creator) => (
          <CreatorCards creator={creator} key={creator.id} />
        ))}
      </div>
      <Attribution attribution={attribution} />
    </div>
  )
}

export default Creators
