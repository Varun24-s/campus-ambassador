export default function Leaderboard() {
    return (
      <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
        <h3 className="font-semibold mb-4">Leaderboard</h3>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span>🥇 Sarah Chen</span>
            <span className="font-bold">245 pts</span>
          </li>
          <li className="flex justify-between">
            <span>🥈 John Doe</span>
            <span className="font-bold">200 pts</span>
          </li>
          <li className="flex justify-between">
            <span>🥉 You</span>
            <span className="font-bold">180 pts</span>
          </li>
        </ul>
      </div>
    );
  }
  