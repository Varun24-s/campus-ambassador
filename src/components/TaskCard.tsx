import { Info } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  formLink: string;
}

export default function TaskCard({
  title,
  description,
  points,
  dueDate,
  formLink,
}: TaskCardProps) {
  return (
    <div className="bg-white shadow rounded-xl border p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-sm text-gray-500 flex items-center gap-1">
          {points} pts <Info size={14} />
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      {/* Due date */}
      <span className="mt-2 text-xs text-gray-500">Due: {dueDate}</span>

      {/* Form link */}
      <a
        href={formLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline cursor-pointer"
      >
        Submit Task →
      </a>
    </div>
  );
}
