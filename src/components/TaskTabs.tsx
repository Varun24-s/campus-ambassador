"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  formLink: string;
}

interface TaskTabsProps {
  tasksData: Task[];
}

export default function TaskTabs({ tasksData }: TaskTabsProps) {
  const [tasks, setTasks] = useState<Task[]>(tasksData || []);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="relative">
      {/* Task List */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <motion.div
              key={task.id}
              layoutId={task.id}
              className="cursor-pointer"
              onClick={() => setSelectedTask(task)}
              whileHover={{ scale: 1.01, zIndex: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {selectedTask?.id === task.id ? (
                <div className="rounded-xl border border-dashed border-yellow-400 bg-yellow-50 h-[15vh] md:h-[20vh] lg:h-[15vh]" />
              ) : (
                <div className="bg-white shadow rounded-xl border z-40 border-yellow-300 p-3 sm:p-4 flex justify-between items-center hover:shadow-md 
                                h-[12vh] sm:h-[14vh] md:h-[10vh] lg:h-[15vh] transition">
                  <div className="flex flex-col justify-center h-full max-w-[65%]">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold text-yellow-600 shrink-0">
                        {index + 1}.
                      </span>
                      <h4 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800 truncate flex-1">
                        {task.title}
                      </h4>
                    </div>
                    <span className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400">
                      Due: {task.dueDate}
                    </span>
                  </div>
                  <a
                    href={task.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Submit →
                  </a>
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No tasks available.</p>
        )}
      </div>

      {/* Expanded Card */}
      <AnimatePresence>
        {selectedTask && (
          <motion.div
            layoutId={selectedTask.id}
            className="
        fixed inset-x-4 sm:left-[5%] sm:right-auto top-[10%] sm:top-[12%]
        w-auto sm:w-[500px] md:w-[50vw] lg:w-[40vw]
        h-[50vh] sm:h-[65vh] md:h-[40vh] lg:h-[65vh]
        bg-white border border-yellow-400 rounded-2xl shadow-xl z-50 p-4 sm:p-6 flex flex-col
      "
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedTask(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-yellow-500 hover:text-yellow-600"
            >
              <X size={22} />
            </button>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 pr-6">
              {selectedTask.title}
            </h2>

            {/* Meta info */}
            <p className="mt-1 text-base sm:text-lg text-gray-700">
              Points:{" "}
              <span className="font-semibold text-yellow-600">{selectedTask.points}</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Due: {selectedTask.dueDate}</p>

            {/* Scrollable description */}
            <div className="flex-1 mt-3 sm:mt-4 overflow-y-auto pr-1 sm:pr-2">
              <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line leading-relaxed">
                {selectedTask.description}
              </p>
            </div>

            {/* Submit button pinned at bottom */}
            <a
              href={selectedTask.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-4 inline-block px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-lg font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition self-start"
            >
              Submit →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
