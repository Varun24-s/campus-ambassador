// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const search = req.nextUrl.searchParams.get("q") || "";
//   const res = await fetch(`http://universities.hipolabs.com/search?country=India&name=${search}`);
//   const data = await res.json();
//   const colleges = data.map((c: any) => c.name);
//   return NextResponse.json(colleges);
// }


import { NextRequest, NextResponse } from "next/server";
// Import the JSON file directly.
// Note: Ensure you have downloaded the json file to this path
import collegesData from "../../../data/collage.json";

// Interface for the shape of your JSON data (adjust based on the specific JSON you download)
interface College {
  name: string;
  state: string;
  district: string;
}

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("q") || "";

  // 1. If search is empty, return nothing (or top 10) to save bandwidth
  if (search.length < 3) {
    return NextResponse.json([]);
  }

  const lowerSearch = search.toLowerCase();

  // 2. Filter the local data
  // This is extremely fast even with 40,000 records because it's in-memory.
  const filtered = (collegesData as College[])
    .filter((college) =>
      college.name.toLowerCase().includes(lowerSearch)
    )
    .slice(0, 20); // Limit results to top 20 to avoid crashing the browser

  // 3. Map to just names (or return full objects if you need state/city)
  const results = filtered.map(c => c.name);

  return NextResponse.json(results);
}