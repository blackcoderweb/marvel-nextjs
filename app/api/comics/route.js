import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.DATA_API_KEY;
    const hash = process.env.HASH;
  
    const res = await fetch(
      "https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=1&apikey=" +
        `${apiKey}` +
        "&hash=" +
        `${hash}`
    );
  
    const data = await res.json();
    const comics = data.data.results;
    const attribution = data.attributionText
    return NextResponse.json({ comics, attribution })
  }