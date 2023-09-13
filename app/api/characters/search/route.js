import { NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = process.env.DATA_API_KEY;
  const hash = process.env.HASH;
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name")
  const res = await fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
  `${name}` +
  "&limit=100&ts=1&apikey=" +
  `${apiKey}` +
  "&hash=" +
  `${hash}`);

  const data = await res.json();
  const characters = data.data.results;
  const attribution = data.attributionText;
  return NextResponse.json({ characters, attribution });
}
