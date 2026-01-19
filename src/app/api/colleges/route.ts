import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("q") || "";
  const res = await fetch(`http://universities.hipolabs.com/search?country=India&name=${search}`);
  const data = await res.json();
  const colleges = data.map((c: any) => c.name);
  return NextResponse.json(colleges);
}

// import { NextRequest, NextResponse } from "next/server";
// import collegesData from "../../../data/collage.json";


// interface CollegeData {
//   university: string;
//   college: string;
//   college_type: string;
//   state: string;
//   district: string;
// }

// export async function GET(req: NextRequest) {
//   const search = req.nextUrl.searchParams.get("q") || "";


//   if (search.length < 3) {
//     return NextResponse.json([]);
//   }

//   const lowerSearch = search.toLowerCase();

//   // 2. Cast the imported JSON to the correct type
//   const filtered = (collegesData as CollegeData[])
//     .filter((item) =>
//       // 3. Use 'item.college' instead of 'item.name'
//       item.college.toLowerCase().includes(lowerSearch)
//     )
//     .slice(0, 20);

//   const results = filtered.map((c) => ({
//     name: c.college,
//     state: c.state,
//     district: c.district
//   }));

//   return NextResponse.json(results);
// }