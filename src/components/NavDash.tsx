"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavDash() {
    return (
        <nav className="w-full z-50 glass-card border-white/30 rounded-0 shadow-md">
            <div className="flex items-center justify-start px-6 py-5 gap-5">
                {/* Logo / App Name */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/logo.webp" // Assuming this is your logo path
                        alt="E-Cell Logo"
                        width={70}
                        height={70}
                        className="rounded-full"
                    />
                </Link>
                <h1 className="text-2xl font-bold text-black">Campus Ambassador</h1>


            </div>
        </nav>
    );
}
