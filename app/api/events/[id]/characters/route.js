import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const apiKey = process.env.DATA_API_KEY;
    const hash = process.env.HASH; 
    const res = await fetch(
        "https://gateway.marvel.com:443/v1/public/events/" +
          `${params.id}` +
          "characters?limit=100&ts=1&apikey=" +
          `${apiKey}` +
          "&hash=" +
          `${hash}`
      );
    
      const data = await res.json();
      const eventCharacters = data.data.results[0].characters.items;
      return NextResponse.json({ eventCharacters });
}