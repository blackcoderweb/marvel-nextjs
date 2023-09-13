import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const apiKey = process.env.DATA_API_KEY;
    const hash = process.env.HASH;
    const res = await fetch(
      "https://gateway.marvel.com:443/v1/public/series/" +
        `${params.id}` +
        "?ts=1&apikey=" +
        `${apiKey}` +
        "&hash=" +
        `${hash}`
    );
  
    const data = await res.json();
    const serie = data.data.results;
    const attribution = data.attributionText;
    return NextResponse.json({ serie, attribution });
}