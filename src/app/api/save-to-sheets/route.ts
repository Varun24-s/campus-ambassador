import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  console.log("API /save-to-sheets called");

  try {
    const data = await req.json();
    console.log("Request body:", data);

    const { name, email, mobile, college, branch, year } = data;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const appendRes = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [name, email, mobile, college, branch, year, new Date().toLocaleString()],
        ],
      },
    });

    console.log("Google Sheets append response:", appendRes.status);

    return NextResponse.json({ message: "Saved to Google Sheets" });
  } catch (err: any) {
    console.error("Error in /save-to-sheets:", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}
