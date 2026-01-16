import { google } from "googleapis";
import { NextResponse } from "next/server";

function rowsToObjects(rows: any[][]) {
  if (!rows || rows.length < 2) return [];

  const headers = rows[0]; // first row = column names
  return rows.slice(1).map((row) => {
    const obj = headers.reduce((acc, header, i) => {
      acc[header] = row[i] || "";
      return acc;
    }, {} as Record<string, any>);

    // Normalize numeric fields
    obj.points = Number(obj.points) || 0;
    obj.tasksDone = Number(obj.tasksDone) || 0;
    obj.totalTasks = Number(obj.totalTasks) || 0;

    return obj;
  });
}

export async function GET() {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Users!A:J", // covers your 10 columns
    });

    const rows = res.data.values || [];
    const leaderboard = rowsToObjects(rows);

    return NextResponse.json(leaderboard);
  } catch (err: any) {
    // console.error("Error in /get-leaderboard:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
