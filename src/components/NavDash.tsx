"use client";

import { Search, Bell } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function NavDash() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <div className="bg-[#EEB56D] text-white font-bold px-3 py-2 rounded-lg">
          CA
        </div>
        <span className="font-semibold text-lg">Campus Ambassador</span>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search tasks, users..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600" />
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
