import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("q") || "";
  const res = await fetch(`http://universities.hipolabs.com/search?country=India&name=${search}`);
  const data = await res.json();
  const colleges = data.map((c: any) => c.name);
  return NextResponse.json(colleges);
}
