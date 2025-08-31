export default function ProfileCard() {
    return (
      <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-4" />
          <h2 className="text-lg font-semibold">Alex Johnson</h2>
          <p className="text-sm text-gray-500">Computer Science • Senior</p>
          <p className="text-sm text-[#EEB56D] font-medium mt-2">
            ★ Level 5 Ambassador
          </p>
        </div>
  
        <div className="mt-6 grid grid-cols-2 text-center">
          <div>
            <p className="text-2xl font-bold">127</p>
            <p className="text-sm text-gray-500">Total Points</p>
          </div>
          <div>
            <p className="text-2xl font-bold">12/15</p>
            <p className="text-sm text-gray-500">Tasks Done</p>
          </div>
        </div>
  
        <div className="mt-4">
          <p className="text-xs text-gray-500">
            3 more tasks to reach monthly goal
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-[#EEB56D] h-2 rounded-full w-4/5"></div>
          </div>
        </div>
  
        <div className="mt-4">
          <p className="font-medium text-sm mb-2">Recent Achievements</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs">
              Event Organizer
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-xs">
              Social Media Star
            </span>
          </div>
        </div>
      </div>
    );
  }
  