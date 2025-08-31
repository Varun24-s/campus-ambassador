"use client";

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between text-black">
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
      <div className="flex items-center gap-8">
        <Link href="" className="hover:text-yellow-400">About Us</Link>
        <Link href="" className="hover:text-yellow-400">Pros</Link>
        <Link href="" className="hover:text-yellow-400">FAQs</Link>
        <Link href="" className="hover:text-yellow-400">TnC</Link>
        <Link href="" className="hover:text-yellow-400">Contact Us</Link>

        {/* Register button */}
        <Link href="">
          <button className="px-5 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-xl shadow-md hover:bg-yellow-600 transition">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

