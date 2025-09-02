
import ProfileCard from "@/components/ProfileCard";
import Leaderboard from "@/components/Leaderboard";
import TaskTabs from "@/components/TaskTabs";
import NavDash from "@/components/NavDash";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-amber-50/50 text-black flex flex-col">
      <NavDash />

      <div className="flex flex-col sm:flex-row flex-1">
        {/* Left Sidebar */}
        <aside className="w-full sm:w-[30%] md:w-[25%] p-6 space-y-6 border-b sm:border-b-0 sm:border-r border-gray-200">
          <ProfileCard />
        </aside>

        {/* Center - Tasks */}
        <main className="w-full sm:w-[70%] md:w-[45%] p-6 border-b sm:border-b-0 sm:border-r border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Task Management</h2>
              <p className="text-gray-500 text-sm">
                Track your ambassador activities and progress
              </p>
            </div>
          </div>
          <TaskTabs />
        </main>

        {/* Right Column - Leaderboard */}
        <aside className="w-full md:w-[30%] p-6">
          <Leaderboard />
        </aside>
      </div>
    </div>
  );
}
