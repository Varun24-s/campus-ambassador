import { google } from "googleapis";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import clerkClient from "@clerk/clerk-sdk-node";

export async function GET() {
  try {
    // Clerk auth
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = await clerkClient.users.getUser(userId);
    const primaryEmailId = user.primaryEmailAddressId;
    const email = user.emailAddresses.find(
      (e) => e.id === primaryEmailId
    )?.emailAddress?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json({ error: "User email not found" }, { status: 404 });
    }

    // Google Sheets auth
    const authClient = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth: authClient });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Users!A:J", // includes all your headers
    });

    const rows = res.data.values || [];
    if (rows.length < 2) {
      return NextResponse.json({ error: "No users in sheet" }, { status: 404 });
    }

    // Map headers → objects
    const headers = rows[0].map((h) => h.trim());
    const profiles = rows.slice(1).map((row) =>
      headers.reduce((acc, h, i) => {
        acc[h] = (row[i] || "").trim();
        return acc;
      }, {} as Record<string, string>)
    );

    // Find current user
    const profile = profiles.find((p) => p.Email?.toLowerCase() === email);
    if (!profile) {
      return NextResponse.json({ error: `Profile not found for ${email}` }, { status: 404 });
    }

    // ✅ Format for frontend
    const formattedProfile = {
      name: profile.Name || "",
      email: profile.Email || "",
      college: profile.College || "",
      branch: profile.Branch || "",
      year: profile.Year || "",
      points: Number(profile.points) || 0,
      tasksDone: Number(profile.tasksDone) || 0,
      totalTasks: Number(profile.totalTasks) || 0,
    };

    return NextResponse.json(formattedProfile);
  } catch (err: any) {
    console.error("Error fetching profile:", err);
    return NextResponse.json(
      { error: err.message || "Failed to fetch profile" },
      { status: 500 }
    );
  }
}
