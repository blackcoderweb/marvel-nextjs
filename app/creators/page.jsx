import Attribution from "@/components/Attribution";
import CardsPagination from "@/components/CardsPagination";

const getCreators = async () => {

  const res = await fetch("http://127.0.0.1:3000/api/creators");

  const data = await res.json()
  
  return data

}

async function Creators() {

  const {creators, attribution} = await getCreators()
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-center py-10">CREATORS</h1>
      <CardsPagination totalItems={creators.length} items={creators} />
      <Attribution attribution={attribution} />
    </div>
  )
}

export default Creators
