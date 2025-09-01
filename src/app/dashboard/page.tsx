
import ProfileCard from "@/components/ProfileCard";
import Leaderboard from "@/components/Leaderboard";
import TaskTabs from "@/components/TaskTabs";
import NavDash from "@/components/NavDash";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <NavDash/>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[25%] p-6 space-y-6 border-r border-gray-200">
          <ProfileCard />
          <Leaderboard />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Task Management</h2>
              <p className="text-gray-500 text-sm">
                Track your ambassador activities and progress
              </p>
            </div>
            <button className="px-4 py-2 bg-[#EEB56D] text-white rounded-lg shadow hover:bg-yellow-600">
              + New Task
            </button>
          </div>
          <TaskTabs />
        </main>
      </div>
    </div>
  );
}
