

"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { SignInButton } from '@clerk/nextjs';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "About Us", href: "#about" },
        { name: "Benefits", href: "#program-info" },
        { name: "FAQs", href: "#faq" },
        { name: "Terms", href: "#terms" },
        { name: "Contact", href: "#contact" },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeInOut" } },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-amber-50/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/logo.webp" // Assuming this is your logo path
                                alt="E-Cell Logo"
                                width={70}
                                height={70}
                                className="rounded-full"
                            />
                        </Link>


                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-gray-800 hover:text-amber-500 font-medium transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:block">
                            <SignInButton
                                mode="redirect"
                                forceRedirectUrl="/dashboard"
                                signUpForceRedirectUrl="/complete-profile"
                            >
                                <motion.button
                                    className="group relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white bg-black rounded-full overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="relative">Let's Go</span>
                                </motion.button>
                            </SignInButton>
                        </div>


                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>


            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden fixed top-20 left-0 w-full bg-amber-50/80 shadow-lg z-40"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="flex flex-col items-center space-y-6 py-8">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-xl text-gray-800 hover:text-amber-500 font-semibold">
                                    {link.name}
                                </Link>
                            ))}
                            <SignInButton
                                mode="redirect"
                                forceRedirectUrl="/dashboard"
                                signUpForceRedirectUrl="/complete-profile"
                            >
                                <motion.button
                                    className="group relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white bg-black rounded-full overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="relative">Let's Go</span>
                                </motion.button>
                            </SignInButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}