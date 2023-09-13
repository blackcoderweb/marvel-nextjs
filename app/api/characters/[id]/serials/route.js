import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const apiKey = process.env.DATA_API_KEY;
  const hash = process.env.HASH;
  const res = await fetch(
    "https://gateway.marvel.com:443/v1/public/characters/" +
      `${params.id}` +
      "series?limit=100&ts=1&apikey=" +
      `${apiKey}` +
      "&hash=" +
      `${hash}`
  );

  const data = await res.json();
  const characterSeries = data.data.results[0].series.items;
  return NextResponse.json({ characterSeries });
}