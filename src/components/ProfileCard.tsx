"use client";

import { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";

export default function ProfileCard() {
  const { user, isLoaded } = useUser();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!isLoaded || !user) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/get-profile");

        if (!res.ok) {
          const text = await res.text();
          console.error("API failed:", res.status, text);
          return;
        }

        const profileDataArray = await res.json();

        const myEmail = user.primaryEmailAddress?.emailAddress;
        console.log("My email:", myEmail);
        console.log("Profiles from sheet:", profileDataArray);

        const myProfile = profileDataArray.find(
          (p: any) => p.Email?.toLowerCase() === myEmail?.toLowerCase()
        );

        setProfile(myProfile || null);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, [isLoaded, user]);

  if (!profile) {
    return (
      <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
        <p className="text-center text-gray-500">Loading profile...</p>
      </div>
    );
  }

  const tasksDone = profile.tasksDone || 0;
  const totalTasks = profile.totalTasks || 0;
  const points = profile.points || 0;

  return (
    <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <UserButton />
        <h2 className="text-lg font-semibold mt-2">{profile.Name}</h2>
        <p className="text-sm text-gray-500">{profile.College}</p>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 text-center">
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

      {/* Progress Bar */}
      <div className="mt-4">
        <p className="text-xs text-gray-500">
          {Math.max(totalTasks - tasksDone, 0)} more tasks to reach goal
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-[#EEB56D] h-2 rounded-full transition-all"
            style={{
              width: totalTasks ? `${(tasksDone / totalTasks) * 100}%` : "0%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
