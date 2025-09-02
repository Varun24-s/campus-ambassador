"use client";

import TaskCard from "./TaskCard";
import { tasks } from "@/data/tasks"; 

export default function TaskTabs() {
  return (
    <div className="space-y-4">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} {...task} />)
      ) : (
        <p className="text-gray-500">No tasks available.</p>
      )}
    </div>
  );
}
