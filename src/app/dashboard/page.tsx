"use client";

import ProfileCard from "@/components/ProfileCard";
import Leaderboard from "@/components/Leaderboard";
import TaskTabs from "@/components/TaskTabs";
import NavDash from "@/components/NavDash";
import { Plasma } from "@/components/Plasma";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen text-black flex flex-col overflow-hidden">
      {/* Plasma Background */}
      <div className="absolute inset-0 -z-10">
        <Plasma
          color="#eba434"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Navbar */}
      <NavDash />

      {/* Main Layout */}
      <div className="flex-1 p-4 sm:p-6">
        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-13
          "
        >
          {/* Profile (3/12 on tablet+desktop) */}
          <aside className="glass-card p-4 sm:p-6 md:col-span-3">
            <ProfileCard />
          </aside>

          {/* Tasks (6/12 on tablet+desktop) */}
          <main className="glass-card p-4 sm:p-6 flex flex-col md:col-span-6">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Task Management</h2>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                Track your ambassador activities and progress
              </p>
            </div>
            <div className="h-[65vh] overflow-y-auto rounded-2xl">
              <TaskTabs />
            </div>
          </main>

          {/* Leaderboard (3/12 on tablet+desktop) */}
          <aside className="glass-card p-4 sm:p-6 md:col-span-4">
            <h2 className="text-xl sm:text-2xl font-bold">Leaderboard</h2>
            <div className="h-[65vh] overflow-y-auto mt-4 rounded-2xl">
              <Leaderboard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
