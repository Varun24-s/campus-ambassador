"use client";

import { Bell } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function NavDash() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-amber-50/50">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="E-Cell Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <span className="font-semibold text-lg hidden sm:block">
          Campus Ambassador
        </span>
      </div>

      {/* Links
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/tasks" className="hover:text-black">Tasks</Link>
        <Link href="/leaderboard" className="hover:text-black">Leaderboard</Link>
        <Link href="/profile" className="hover:text-black">Profile</Link>
      </div> */}

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
