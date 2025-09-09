"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

interface Profile {
  name: string;
  email: string;
  college: string;
  branch: string;
  year: string;
  points: number;
  tasksDone: number;
  totalTasks: number;
}

export default function ProfileCard({ profileData }: { profileData: Profile }) {
  const { user } = useUser();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/get-profile");
        if (!res.ok) {
          console.error("Profile fetch failed", await res.json());
          setProfile(null);
          return;
        }
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100">
        <p className="text-center text-gray-500">Please sign in</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100">
        <p className="text-center text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100">
        <p className="text-center text-gray-500">Profile not found</p>
      </div>
    );
  }

  const { name, email, college, branch, year, points, tasksDone, totalTasks } =
    profile;

  return (
    <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100 flex flex-col">
      <div className="flex flex-col items-center text-center">
        <UserButton afterSignOutUrl="/" />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>

      </div>

      <div className="mt-6 grid grid-cols-2 text-center gap-y-4">
        <div>
          <p className="text-2xl font-bold">{points}</p>
          <p className="text-sm text-gray-500">Total Points</p>
        </div>
        <div>
          <p className="text-2xl font-bold">
            {tasksDone}/{totalTasks}
          </p>
          <p className="text-sm text-gray-500">Tasks Done</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-500">
          {Math.max(totalTasks - tasksDone, 0)} more tasks to reach goal
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
          <div
            className="bg-[#EFB000] h-3 rounded-full transition-all"
            style={{
              width: totalTasks ? `${(tasksDone / totalTasks) * 100}%` : "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
