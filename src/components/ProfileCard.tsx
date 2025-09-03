"use client";

import { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import MagnetLines from "@/components/MagnetLines";

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
            <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100">
                <p className="text-center text-gray-500 text-sm sm:text-base">
                    Loading profile...
                </p>
            </div>
        );
    }

    const tasksDone = profile.tasksDone || 0;
    const totalTasks = profile.totalTasks || 0;
    const points = profile.points || 0;

    return (
        <div className="bg-white shadow rounded-2xl p-4 sm:p-6 border border-gray-100 flex flex-col">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
                <UserButton afterSignOutUrl="/" />
                <h2 className="text-base sm:text-lg font-semibold mt-2">
                    {profile.Name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">{profile.College}</p>
            </div>

            {/* Stats */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 text-center gap-y-4">
                <div>
                    <p className="text-lg sm:text-2xl font-bold">{points}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Total Points</p>
                </div>
                <div>
                    <p className="text-lg sm:text-2xl font-bold">
                        {tasksDone}/{totalTasks}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">Tasks Done</p>
                </div>
            </div>

            {/* Progress Bar */}
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
            <div className="hidden sm:block">
                <MagnetLines
                    rows={6}
                    columns={6}
                    containerSize="25vmin"
                    lineColor="#EFB000"
                    lineWidth="0.8vmin"
                    lineHeight="5vmin"
                    baseAngle={0}
                    style={{ margin: "2rem auto" }}
                />
            </div>
        </div>
    );
}
