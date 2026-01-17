// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

// export function Footer() {
//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Program", href: "#program-info" },
//     { name: "FAQs", href: "#faq" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <>
//       <footer className="bg-black">
//         <motion.div
//           className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Two Column Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//             {/* Left: Map */}
//             <div className="w-full h-72 md:h-96 overflow-hidden rounded-lg shadow-lg md:col-span-1">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7467611771244!2d77.40177087554915!3d23.21589777903877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e64b7279e1%3A0x2b8b11cf5f7e585e!2sRolta%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1757606512962!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen={true}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             {/* Right: Footer Content */}
//             <div className="text-center md:col-span-2">
//               {/* Logo + Title */}
//               <div className="flex flex-col items-center">
//                 <Link href="/" className="mb-5">
//                   <Image
//                     src="/logo.webp"
//                     alt="E-Cell Logo"
//                     width={55}
//                     height={55}
//                     className="rounded-full hover:opacity-90 transition-opacity"
//                   />
//                 </Link>
//                 <h2 className="text-2xl font-bold text-white">
//                   E-Cell, NIT Bhopal
//                 </h2>
//                 <p className="text-gray-400 mt-2 max-w-md">
//                   Igniting the next generation of innovators and leaders.
//                 </p>
//               </div>

//               {/* Nav Links */}
//               <nav
//                 className="my-8 flex flex-wrap justify-center  gap-x-6 gap-y-2"
//                 aria-label="Footer"
//               >
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="text-base text-gray-300 hover:text-amber-400 transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//               </nav>

//               {/* Socials */}
//               <div className="flex justify-center space-x-6">
//                 <a
//                   href="https://www.linkedin.com/company/ecell-manit/posts/?feedView=all"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <span className="sr-only">LinkedIn</span>
//                   <Linkedin />
//                 </a>
//                 <a
//                   href="https://x.com/ecell_nitb"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <span className="sr-only">Twitter</span>
//                   <Twitter />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/ecell_nitb/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <span className="sr-only">Instagram</span>
//                   <Instagram />
//                 </a>
//               </div>

//               {/* Contact Info */}
//               <div className="mt-8 space-y-3 text-gray-400">
//                 <p className="flex items-center justify-center  gap-2">
//                   <Mail className="text-xl text-gray-400" /> contact@ecell.com
//                 </p>
//                 <p className="flex items-center justify-center  gap-2">
//                   <Phone className="text-xl text-gray-400" /> +91 96856 94466
//                 </p>
//               </div>

//               {/* Copyright */}
//               <div className="mt-10 pt-8 border-t border-gray-800/50">
//                 <p className="text-base text-gray-500 text-center ">
//                   &copy; {new Date().getFullYear()} E-Cell, Bhopal. All Rights
//                   Reserved.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </footer>
//     </>
//   );
// }



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "Server Info", href: "#about" },
    { name: "Advancements", href: "#program-info" },
    { name: "/help", href: "#faq" },
    { name: "Admins", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t-8 border-[#1e1e1e] relative overflow-hidden">
      {/* Bedrock Particle Pattern (Optional CSS texture could go here) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#111_10px,#111_20px)] opacity-20"></div>

      <motion.div
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* Left: The "Cartography Table" (Map) */}
          <div className="w-full h-72 md:h-80 md:col-span-1 relative">
             {/* Map Frame (Wood Texture Color) */}
             <div className="absolute inset-0 bg-[#5c3c22] p-2 shadow-[4px_4px_0_#000]">
                <div className="w-full h-full border-4 border-[#3e2715] bg-[#c6c6c6]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7467611771244!2d77.40177087554915!3d23.21589777903877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e64b7279e1%3A0x2b8b11cf5f7e585e!2sRolta%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1757606512962!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, imageRendering: "pixelated" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                    ></iframe>
                </div>
                {/* Map Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#3e2715] text-[#ffff55] px-3 py-1 text-xs font-mono border border-[#5c3c22]">
                    X: 23.25 | Z: 77.41
                </div>
             </div>
          </div>

          {/* Right: Footer Content */}
          <div className="text-center md:col-span-2">

            {/* Logo + Title */}
            <div className="flex flex-col items-center">
              <Link href="/" className="mb-5 group">
                <div className="p-1 bg-white border-4 border-gray-600 group-hover:scale-110 transition-transform duration-200">
                    <Image
                    src="/logo.webp"
                    alt="E-Cell Logo"
                    width={64}
                    height={64}
                    className="pixelated"
                    />
                </div>
              </Link>
              <h2 className="text-3xl font-sans text-white tracking-widest" style={{ textShadow: '3px 3px 0 #3f3f3f' }}>
                E-CELL MANIT
              </h2>
              <p className="text-[#8b8b8b] mt-2 max-w-md font-mono text-sm">
                &lt;Igniting the next generation of innovators /&gt;
              </p>
            </div>

            {/* Nav Links */}
            <nav
              className="my-8 flex flex-wrap justify-center gap-x-8 gap-y-4"
              aria-label="Footer"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg text-[#a0a0a0] hover:text-[#ffff55] hover:underline decoration-2 underline-offset-4 font-sans transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Socials (Inventory Slots) */}
            <div className="flex justify-center gap-4">
              <FooterSocial href="#" icon={<Linkedin />} label="LinkedIn" />
              <FooterSocial href="#" icon={<Twitter />} label="Twitter" />
              <FooterSocial href="#" icon={<Instagram />} label="Instagram" />
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-2 text-[#8b8b8b] font-mono text-sm">
              <p className="flex items-center justify-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" /> contact@ecell.com
              </p>
              <p className="flex items-center justify-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" /> +91 7000616813
              </p>
            </div>

            {/* Server Status / Copyright */}
            <div className="mt-12 pt-8 border-t border-[#373737]">
              <p className="text-sm text-[#555] font-mono text-center">
                SERVER STATUS: ONLINE <span className="inline-block w-2 h-2 bg-green-500 ml-2 animate-pulse"></span>
                <br />
                © {new Date().getFullYear()} E-Cell, Bhopal. Do not grief.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

// Helper: Footer Social Slot
function FooterSocial({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 bg-[#373737] border-b-2 border-r-2 border-white/20 border-t-2 border-l-2 border-black/50 flex items-center justify-center hover:bg-[#555] transition-colors"
            title={label}
        >
            <div className="text-[#a0a0a0] group-hover:text-white group-hover:scale-110 transition-all">
                {icon}
            </div>
        </a>
    )
}