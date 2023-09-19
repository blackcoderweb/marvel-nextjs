import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.DATA_API_KEY;
    const hash = process.env.HASH;
    const res = await fetch(
      "https://gateway.marvel.com:443/v1/public/events?limit=100&ts=1&apikey=" +
        `${apiKey}` +
        "&hash=" +
        `${hash}`
    );
    const data = await res.json();

    if (!data || !data.data || !data.data.results) {
      throw new Error("Invalid response from Marvel API");
    }

    const events = data.data.results;
    const attribution = data.attributionText;

    return NextResponse.json({ events, attribution });
  } catch (error) {
    console.error("Error fetching event data:", error);
    return NextResponse.json({ error: "Failed to fetch event data" }, { status: 500 });
  }
}