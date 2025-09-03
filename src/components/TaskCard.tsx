"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  formLink: string;
}

export default function TaskCard({
  id,
  title,
  description,
  points,
  dueDate,
  formLink,
}: TaskCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="relative bg-white border rounded-xl shadow cursor-pointer overflow-hidden"
    >
      {/* Collapsed card */}
      {!expanded && (
        <div className="p-4 flex justify-between items-center">
          <h4 className="font-semibold">{title}</h4>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            {points} pts <Info size={14} />
          </span>
        </div>
      )}

      {/* Expanded Card */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded"
            layout
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-20 bg-white border rounded-xl shadow-xl p-4"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-xs text-gray-500">Due: {dueDate}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <p className="text-sm text-gray-600 mt-3">{description}</p>

            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Submit Task →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
