"use client";

import Link from "next/link";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between text-black">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.webp"
          alt="My App Logo"
          width={65}
          height={65}
          className="rounded-full"
        />
      </Link>

      {/* Nav links + button */}
      <div className="flex items-center text-xl gap-8">
        <Link href="" className="hover:text-yellow-400">About Us</Link>
        <Link href="" className="hover:text-yellow-400">Pros</Link>
        <Link href="" className="hover:text-yellow-400">FAQs</Link>
        <Link href="" className="hover:text-yellow-400">TnC</Link>
        <Link href="" className="hover:text-yellow-400">Contact Us</Link>

        {/* Clerk Register button */}
        <SignUpButton mode="redirect" forceRedirectUrl="/complete-profile">
          <button className="px-5 py-2 bg-[#EEB56D] text-gray-900 rounded-xl shadow-md hover:bg-yellow-600 transition">
            Register
          </button>
        </SignUpButton>
      </div>
    </nav>
  );
}


