"use client";

import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import Leaderboard from "@/components/Leaderboard";
import TaskTabs from "@/components/TaskTabs";
import NavDash from "@/components/NavDash";
import Silk from "@/components/Silk";
import LoaderDash from "@/components/Loaderdash";
import { LoaderThree } from '@/components/loader';

import Plasma from "@/components/Plasma";

export default function DashboardPage() {
    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState<any>(null);
    const [tasksData, setTasksData] = useState<any[]>([]);
    const [leaderboardData, setLeaderboardData] = useState<any[]>([]);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);

                const [profileRes, tasksRes, leaderboardRes] = await Promise.all([
                    fetch("/api/get-profile"),
                    fetch("/api/get-tasks"),
                    fetch("/api/get-leaderboard"), // ✅ new endpoint
                  ]);

                const [profileJson, tasksJson, leaderboardJson] = await Promise.all([
                    profileRes.json(),
                    tasksRes.json(),
                    leaderboardRes.json(),
                ]);

                setProfileData(profileJson);
                setTasksData(tasksJson);
                setLeaderboardData(leaderboardJson);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    return (
        <div className="relative min-h-screen text-black bg-amber-50 flex flex-col overflow-hidden">
            {/* Plasma Background */}
            {/* <div className="absolute inset-0 -z-10">
                <Plasma
                    color="#ed9a15"
                    speed={0.6}
                    direction="forward"
                    scale={1.1}
                    opacity={0.8}
                    mouseInteractive={true}
                />
            </div> */}

            {/* Navbar */}
            <NavDash />

            {/* Main Layout */}
            <div className="flex-1 p-4 sm:p-6">
                {loading ? (
                    <div className="flex items-center justify-center h-[70vh]">
                        {/* You can replace this with any loader */}
                        <div className="absolute inset-0 flex items-center justify-center z-50">
                            {/* <LoaderDash /> */}
                            <LoaderThree />
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-13">
                        {/* Profile (3/12 on tablet+desktop) */}
                        <aside className="glass-card p-4 sm:p-6 md:col-span-3 rounded-xl">
                            <ProfileCard profileData={profileData} />
                        </aside>

                        {/* Tasks (6/12 on tablet+desktop) */}
                        <main className="glass-card p-4 sm:p-6 flex flex-col md:col-span-6 rounded-xl">
                            <div className="mb-4 sm:mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold">Task Management</h2>
                                <p className="text-gray-600 text-sm sm:text-base mt-1">
                                    Track your ambassador activities and progress
                                </p>
                            </div>
                            <div className="h-[65vh] overflow-y-auto rounded-2xl">
                                <TaskTabs tasksData={tasksData} />
                            </div>
                        </main>

                        {/* Leaderboard (3/12 on tablet+desktop) */}
                        <aside className="glass-card p-4 sm:p-6 md:col-span-4 rounded-xl">
                            <h2 className="text-xl sm:text-2xl font-bold">Leaderboard</h2>
                            <div className="h-[65vh] overflow-y-auto mt-4 rounded-2xl">
                                <Leaderboard leaderboardData={leaderboardData} />
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </div>
    );
}
