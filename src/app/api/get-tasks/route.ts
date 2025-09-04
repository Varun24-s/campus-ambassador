import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Tasks!A:F"; // Replace "Tasks" with your sheet name

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) return NextResponse.json([]);

    const headers = rows[0];
    const data = rows.slice(1).map((row) => {
      const obj: Record<string, string | number> = {};
      headers.forEach((header, i) => {
        obj[header] = row[i] || "";
      });

      obj["points"] = Number(obj["points"] || 0);
      return obj;
    });

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Error fetching tasks:", err);
    return NextResponse.json(
      { error: "Failed to fetch tasks", details: err.message },
      { status: 500 }
    );
  }
}
