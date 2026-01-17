

// "use client";

// import { useState, useEffect } from 'react';
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from 'lucide-react';
// import { SignInButton } from '@clerk/nextjs';

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);


//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: "About Us", href: "#about" },
//         { name: "Benefits", href: "#program-info" },
//         { name: "FAQs", href: "#faq" },
//         { name: "Terms", href: "#terms" },
//         { name: "Contact", href: "#contact" },
//     ];

//     const menuVariants = {
//         hidden: { opacity: 0, y: -20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
//         exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeInOut" } },
//     };

//     return (
//         <>
//             <motion.nav
//                 initial={{ y: -100 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-amber-50/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
//                     }`}
//             >
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-20">

//                         <Link href="/" className="flex-shrink-0">
//                             <Image
//                                 src="/logo.webp" // Assuming this is your logo path
//                                 alt="E-Cell Logo"
//                                 width={70}
//                                 height={70}
//                                 className="rounded-full"
//                             />
//                         </Link>


//                         <div className="hidden md:flex items-center space-x-8">
//                             {navLinks.map((link) => (
//                                 <Link key={link.name} href={link.href} className="text-gray-800 hover:text-amber-500 font-medium transition-colors">
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>

//                         <div className="hidden md:block">
//                             <SignInButton
//                                 mode="redirect"
//                                 forceRedirectUrl="/dashboard"
//                                 signUpForceRedirectUrl="/complete-profile"
//                             >
//                                 <motion.button
//                                     className="group relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white bg-black rounded-full overflow-hidden"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                                     <span className="relative">Let's Go</span>
//                                 </motion.button>
//                             </SignInButton>
//                         </div>


//                         <div className="md:hidden">
//                             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
//                                 {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </motion.nav>


//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <motion.div
//                         variants={menuVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="exit"
//                         className="md:hidden fixed top-20 left-0 w-full bg-amber-50/80 shadow-lg z-40"
//                         onClick={() => setIsMenuOpen(false)}
//                     >
//                         <div className="flex flex-col items-center space-y-6 py-8">
//                             {navLinks.map((link) => (
//                                 <Link key={link.name} href={link.href} className="text-xl text-gray-800 hover:text-amber-500 font-semibold">
//                                     {link.name}
//                                 </Link>
//                             ))}
//                             <SignInButton
//                                 mode="redirect"
//                                 forceRedirectUrl="/dashboard"
//                                 signUpForceRedirectUrl="/complete-profile"
//                             >
//                                 <motion.button
//                                     className="group relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white bg-black rounded-full overflow-hidden"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                                     <span className="relative">Let's Go</span>
//                                 </motion.button>
//                             </SignInButton>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// }



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
        { name: "E-SUMMIT", href: "https://esummit.ecellnitb.in/" },
        { name: "Terms", href: "#terms" },
        { name: "Contact", href: "#contact" },
    ];

    // MINECRAFT ANIMATION: Snappy, no smoothing
    const menuVariants = {
        hidden: { opacity: 0, y: -20, scaleY: 0 },
        visible: {
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: { duration: 0.1, ease: "linear" } // Instant snap
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.1 }
        },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }} // Bouncy drop like an item
                // CHANGE: Replaced amber/blur with solid stone texture (bg-muted) and borders
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 border-b-4 ${
                    scrolled
                    ? 'bg-muted border-black/50 py-2'
                    : 'bg-transparent border-transparent py-4'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* LOGO: Added pixel-art styling */}
                        <Link href="/" className="flex-shrink-0 group relative">
                            <div className="absolute inset-0 bg-black translate-y-1 translate-x-1 w-full h-full -z-10 hidden group-hover:block"></div>
                            <Image
                                src="/logo.webp"
                                alt="E-Cell Logo"
                                width={60}
                                height={60}
                                className="border-2 border-white pixelated" // Force hard edges
                                style={{ imageRendering: "pixelated" }}
                            />
                        </Link>

                        {/* DESKTOP LINKS */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-xl text-gray-300 hover:text-accent font-sans tracking-wide transition-colors duration-75 text-shadow-sm"
                                >
                                    {/* The "Minecraft Text Shadow" effect is usually simulated with CSS, but simple hover color works well too */}
                                    <span className="hover:drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA BUTTON: transformed into Minecraft "Green Button" */}
                        <div className="hidden md:block">
                            <SignInButton
                                mode="redirect"
                                forceRedirectUrl="/dashboard"
                                signUpForceRedirectUrl="/complete-profile"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    // THE MINECRAFT BUTTON STYLE
                                    className="mc-ui-box bg-muted hover:bg-[#4a4a4a] text-black px-6 py-2 text-xl font-sans tracking-wider active:border-[#373737_#fff_#fff_#373737]"
                                >
                                    Let's Go
                                </motion.button>
                            </SignInButton>
                        </div>

                        {/* MOBILE HAMBURGER: Pixelated Icon */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="bg-muted border-2 border-white p-2 text-white hover:bg-muted/80 active:translate-y-1"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU: Looks like an Inventory Screen */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden fixed top-20 left-0 w-full z-40 px-4"
                    >
                        {/* The Inventory Container */}
                        <div className="mc-ui-box bg-[#c6c6c6] p-2 shadow-2xl">
                            <div className="flex flex-col items-center space-y-4 py-6 bg-[#8b8b8b]/10 border-2 border-inset border-[#373737]">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="w-full text-center py-3 text-2xl text-white hover:text-[#ffff55] hover:bg-black/20 border-2 border-transparent hover:border-white/50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="pt-4">
                                    <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
                                        <button className="mc-ui-box bg-primary text-white text-xl px-12 py-3 active:border-t-black active:border-l-black">
                                            Let's Go
                                        </button>
                                    </SignInButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}