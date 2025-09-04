import { google } from "googleapis";
import { NextResponse } from "next/server";

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
      range: "Tasks!A:Z", // Adjust to your tasks sheet
    });

    const rows = res.data.values || [];
    if (rows.length < 2) return NextResponse.json([]);

    const headers = rows[0];
    const tasks = rows.slice(1).map((row) => {
      const obj: Record<string, any> = {};
      headers.forEach((h, i) => (obj[h] = row[i] || ""));
      obj.points = Number(obj.points) || 0;
      return obj;
    });

    return NextResponse.json(tasks);
  } catch (err: any) {
    console.error("Error fetching tasks:", err);
    return NextResponse.json(
      { error: err.message || "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}
