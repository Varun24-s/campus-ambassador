"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import MagnetLines from "@/components/MagnetLines";

interface ProfileCardProps {
  profileData: any; // array expected
}

export default function ProfileCard({ profileData }: ProfileCardProps) {
  const { user } = useUser();

  if (!profileData || !user || !Array.isArray(profileData)) {
    return (
      <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100">
        <p className="text-center text-gray-500 text-sm sm:text-base">
          Loading profile...
        </p>
      </div>
    );
  }

  const myEmail = user.primaryEmailAddress?.emailAddress;
  const profile = profileData.find(
    (p: any) => p.Email?.toLowerCase() === myEmail?.toLowerCase()
  );

  if (!profile) {
    return (
      <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100">
        <p className="text-center text-gray-500 text-sm sm:text-base">
          Profile not found
        </p>
      </div>
    );
  }

  const tasksDone = profile.tasksDone || 0;
  const totalTasks = profile.totalTasks || 0;
  const points = profile.points || 0;

  return (
    <div className="flex flex-col gap-6">
      {/* Profile Card */}
      <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100 flex flex-col">
        <div className="flex flex-col items-center text-center">
          <UserButton afterSignOutUrl="/" />
          <h2 className="text-base sm:text-lg font-semibold mt-2">{profile.Name}</h2>
          <p className="text-xs sm:text-sm text-gray-500">{profile.College}</p>
        </div>

        <div className="mt-4 sm:mt-6 grid grid-cols-2 text-center gap-y-4">
          <div>
            <p className="text-lg sm:text-2xl font-bold">{points}</p>
            <p className="text-xs sm:text-sm text-gray-500">Total Points</p>
          </div>
          <div>
            <p className="text-lg sm:text-2xl font-bold">{tasksDone}/{totalTasks}</p>
            <p className="text-xs sm:text-sm text-gray-500">Tasks Done</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <p className="text-[10px] sm:text-xs text-gray-500">
            {Math.max(totalTasks - tasksDone, 0)} more tasks to reach goal
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-2">
            <div
              className="bg-[#EFB000] h-2 sm:h-3 rounded-full transition-all"
              style={{
                width: totalTasks ? `${(tasksDone / totalTasks) * 100}%` : "0%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Magnetic Lines */}
      <div className="relative w-full h-[25vmin] sm:h-[28vmin] hidden sm:block">
        <MagnetLines
          rows={6}
          columns={6}
          containerSize="30vmin"
          lineColor="#EFB000"
          lineWidth="0.8vmin"
          lineHeight="5vmin"
          baseAngle={0}
        />
      </div>
    </div>
  );
}
