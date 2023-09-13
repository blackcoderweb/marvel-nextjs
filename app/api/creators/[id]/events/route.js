import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const apiKey = process.env.DATA_API_KEY;
    const hash = process.env.HASH; 
    const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/creators/" +
          `${params.id}` +
          "events?limit=100&ts=1&apikey=" +
          `${apiKey}` +
          "&hash=" +
          `${hash}`
      );
    
      const data = await res.json();
      const creatorEvents = data.data.results[0].events.items;
      return NextResponse.json({ creatorEvents });
}