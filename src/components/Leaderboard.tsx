"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

interface Profile {
  Name: string;
  Email: string;
  College: string;
  points: number;
}

interface LeaderboardProps {
  leaderboardData: Profile[] | any; // allow debugging even if not array
}

export default function Leaderboard({ leaderboardData }: LeaderboardProps) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);

  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress || "";

  // 🔍 Debug input data
  console.log("LeaderboardData prop:", leaderboardData);
  console.log("Type of leaderboardData:", typeof leaderboardData);
  if (leaderboardData && !Array.isArray(leaderboardData)) {
    console.warn("⚠️ leaderboardData is NOT an array. Keys:", Object.keys(leaderboardData));
  }

  useEffect(() => {
    if (!Array.isArray(leaderboardData)) {
      console.error("leaderboardData is not an array in useEffect", leaderboardData);
      return;
    }

    console.log("leaderboardData is an array, length:", leaderboardData.length);

    // Remove duplicates & sort
    const uniqueProfiles = Array.from(
      new Map(leaderboardData.map((p: Profile) => [p.Email, p])).values()
    );

    console.log("🧹 Unique profiles:", uniqueProfiles);

    const sortedProfiles = uniqueProfiles.sort(
      (a, b) => (b.points || 0) - (a.points || 0)
    );

    console.log("📈 Sorted profiles:", sortedProfiles);

    setProfiles(sortedProfiles);
    setFilteredProfiles(sortedProfiles);
  }, [leaderboardData]);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();

    const filtered = profiles.filter(
      (p) =>
        p.Name.toLowerCase().includes(lowerSearch) ||
        p.Email.toLowerCase().includes(lowerSearch) ||
        p.College.toLowerCase().includes(lowerSearch)
    );

    console.log("🔍 Filtered profiles:", filtered);

    setFilteredProfiles(filtered);
  }, [search, profiles]);

  return (
    <div className="h-full flex flex-col rounded-2xl shadow-lg">
      {/* Search Header (sticky) */}
      <div className="p-4 sticky top-0 z-10 backdrop-blur-lg border-b border-white/20">
        <input
          type="text"
          placeholder="Search by name, email or college..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Scrollable Leaderboard List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {!Array.isArray(filteredProfiles) || filteredProfiles.length === 0 ? (
          <p className="text-gray-500 text-center">No profiles found.</p>
        ) : (
          <ul className="space-y-3">
            {filteredProfiles.map((p, idx) => {
              const isCurrentUser = p.Email === userEmail;

              let rankBadge;
              if (idx === 0) rankBadge = "🥇";
              else if (idx === 1) rankBadge = "🥈";
              else if (idx === 2) rankBadge = "🥉";
              else rankBadge = `#${idx + 1}`;

              return (
                <li
                  key={p.Email}
                  className={`flex justify-between items-center p-3 rounded-xl border transition hover:scale-[1.05] ${
                    isCurrentUser
                      ? "bg-yellow-100/60 border-yellow-400"
                      : "bg-white border-yellow-400"
                  }`}
                >
                  <div>
                    <span className="font-semibold text-gray-800">
                      {rankBadge} {p.Name}{" "}
                      {isCurrentUser && (
                        <span className="text-yellow-600 text-xs">(You)</span>
                      )}
                    </span>
                    <p className="text-xs text-gray-500">{p.College}</p>
                  </div>
                  <span className="font-bold text-yellow-700">
                    {p.points || 0} pts
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
