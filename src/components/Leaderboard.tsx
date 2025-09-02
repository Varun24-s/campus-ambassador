"use client";

import { useEffect, useState } from "react";

interface Profile {
  Name: string;
  Email: string;
  College: string;
  points: number;
}

export default function Leaderboard() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState(""); // state for search query
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("/api/get-profile");
        if (!res.ok) throw new Error("Failed to fetch profiles");

        const data: Profile[] = await res.json();

        // Remove duplicates & sort by points
        const uniqueProfiles = Array.from(
          new Map(data.map((p) => [p.Email, p])).values()
        );

        const sortedProfiles = uniqueProfiles.sort(
          (a, b) => (b.points || 0) - (a.points || 0)
        );

        setProfiles(sortedProfiles);
        setFilteredProfiles(sortedProfiles); // initially, all profiles are shown
      } catch (err) {
        console.error("Error loading leaderboard:", err);
      }
    };

    fetchProfiles();
  }, []);

  // Update filtered profiles whenever search changes
  useEffect(() => {
    const lowerSearch = search.toLowerCase();

    const filtered = profiles.filter(
      (p) =>
        p.Name.toLowerCase().includes(lowerSearch) ||
        p.Email.toLowerCase().includes(lowerSearch) ||
        p.College.toLowerCase().includes(lowerSearch)
    );

    setFilteredProfiles(filtered);
  }, [search, profiles]);

  return (
    <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
      <h3 className="font-semibold mb-4">Leaderboard</h3>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, email or college..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredProfiles.length === 0 ? (
        <p className="text-gray-500 text-center">No profiles found.</p>
      ) : (
        <ul className="space-y-3">
          {filteredProfiles.map((p, idx) => (
            <li key={p.Email} className="flex justify-between items-start">
              <div>
                <span className="font-medium">
                  {idx === 0
                    ? "🥇"
                    : idx === 1
                    ? "🥈"
                    : idx === 2
                    ? "🥉"
                    : `#${idx + 1}`}{" "}
                  {p.Name}
                </span>
                <p className="text-xs text-gray-500">{p.College}</p>
              </div>
              <span className="font-bold">{p.points || 0} pts</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
