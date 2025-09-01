"use client";

import { useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskTabs() {
  const [activeTab, setActiveTab] = useState("active");

  const tasks = [
    {
      title: "Social Media Campaign",
      description: "Create Instagram posts for upcoming campus event",
      tags: [
        { label: "Social Media", color: "bg-gray-100 text-gray-600" },
        { label: "High", color: "bg-red-100 text-red-600" },
      ],
      points: 25,
      dueDate: "2024-01-15",
      progress: 60,
      status: "active",
    },
    {
      title: "Recruitment Drive",
      description: "Organize info session for new students",
      tags: [
        { label: "Events", color: "bg-gray-100 text-gray-600" },
        { label: "Medium", color: "bg-yellow-100 text-yellow-700" },
      ],
      points: 40,
      dueDate: "2024-01-20",
      progress: 30,
      status: "active",
    },
  ];

  const filteredTasks = tasks.filter((t) => t.status === activeTab);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6">
        {["active", "pending", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-[#EEB56D] text-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, idx) => <TaskCard key={idx} {...task} />)
        ) : (
          <p className="text-gray-500">No tasks in this category.</p>
        )}
      </div>
    </div>
  );
}
