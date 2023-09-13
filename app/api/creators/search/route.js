import { NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = process.env.DATA_API_KEY;
  const hash = process.env.HASH;
  const { searchParams } = new URL(request.url);
  const value = searchParams.get("value");
  const res = await fetch(
    "https://gateway.marvel.com:443/v1/public/creators?nameStartsWith=" +
      `${value}` +
      "&limit=100&ts=1&apikey=" +
      `${apiKey}` +
      "&hash=" +
      `${hash}`
  );

  const data = await res.json();
  const creators = data.data.results;
  const attribution = data.attributionText;
  return NextResponse.json({ creators, attribution });
}
