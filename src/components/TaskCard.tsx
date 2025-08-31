import { Info } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  points: number;
  dueDate: string;
  progress: number;
}

export default function TaskCard({
  title,
  description,
  tags,
  points,
  dueDate,
  progress,
}: TaskCardProps) {
  return (
    <div className="bg-white shadow rounded-xl border p-4 flex flex-col">
      <div className="flex justify-between">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-sm text-gray-500 flex items-center gap-1">
          {points}pts <Info size={14} />
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      <div className="flex gap-2 mt-2 text-xs">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`px-2 py-1 rounded ${tag.color}`}
          >
            {tag.label}
          </span>
        ))}
        <span className="text-gray-500">{dueDate}</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
        <div
          className="bg-[#EEB56D] h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
