// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Linkedin, Mail, Instagram } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// export function ContactSection() {
//   const leads = [
//     {
//       name: "Nidhi Singh Thakur",
//       role: "Promotions Lead",
//       img: "/Nidhi Singh Thakur.webp",
//       linkedin: "https://www.linkedin.com/in/nidhisinght78/",
//       mail: "mailto:pvt.nidhisingh07@gmail.com",
//       instagram: "https://www.instagram.com/_nidhiix_/?igsh=MWgzc3BpYm9tYndndQ%3D%3D#",
//       whatsapp: "https://wa.me/9479606424",
//     },
//     {
//       name: "Chinmay Solanki",
//       role: "Promotions Secretary",
//       img: "/Chinmay Solanki.webp",
//       linkedin: "https://www.linkedin.com/in/chinmay-solanki-609454267",
//       mail: "mailto:solankichinmay8@gmail.com",
//       instagram: "https://instagram.com/Chinmay_is/",
//       whatsapp: "https://wa.me/7067983852",
//     },
//     {
//       name: "Khushi Verma",
//       role: "Administrative Lead",
//       img: "/Khushi Verma.webp",
//       linkedin: "https://www.linkedin.com/in/khushi-verma-966416290",
//       mail: "mailto:kv6265@gmail.com",
//       instagram: "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
//       whatsapp: "https://wa.me/6265872942",
//     },
//     {
//       name: "Shreyansh Awasthi",
//       role: "Corporate Relations Lead",
//       img: "/Shreyansh Awasthi.webp",
//       linkedin: "https://www.linkedin.com/in/shreyansh-awasthi-1545792b2",
//       mail: "mailto:shreyanshawasthi66@gmail.com",
//       instagram: "https://www.instagram.com/shreyansh_awasthi007?igsh=cHozYmFzbWM4dng=",
//       whatsapp: "https://wa.me/894861454",
//     },
//   ];

//   return (
//     <section id="contact" className="w-full bg-amber-50/50 py-20 lg:py-28 px-4 flex justify-center items-center">
//       <div className="max-w-7xl w-full">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-12">
//           Contact Us
//         </h2>

//         {/* Profile Cards */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-3
//             md:grid-cols-2
//             lg:grid-cols-4
//             gap-6
//             justify-items-center
//           "
//         >
//           {leads.map((lead, idx) => (
//             <motion.div
//               key={idx}
//               className="relative overflow-hidden bg-amber/80 border border-amber-200/50 p-4 rounded-2xl shadow-lg text-center flex flex-col items-center w-full max-w-xs group"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               {/* Foreground content */}
//               <div className="relative z-10 flex flex-col items-center">
//                 {/* Avatar */}
//                 <img
//                   src={lead.img}
//                   alt={lead.name}
//                   className="w-40 h-40 rounded-full object-cover mb-6 shadow-md border-4 border-white"
//                 />
//                 <h3 className="text-xl font-bold text-black">{lead.name}</h3>
//                 <p className="text-sm text-gray-600 mb-6">{lead.role}</p>

//                 {/* Socials */}
//                 <div className="flex justify-center gap-4 text-amber-500">
//                   <a href={lead.linkedin} target="_blank" rel="noopener noreferrer">
//                     <Linkedin className="w-6 h-6 hover:text-[#0173B2] transition-colors" />
//                   </a>
//                   <a href={lead.instagram} target="_blank" rel="noopener noreferrer">
//                     <Instagram className="w-6 h-6 hover:text-amber-700 transition-colors" />
//                   </a>
//                   <a href={lead.mail} target="_blank" rel="noopener noreferrer">
//                     <Mail className="w-6 h-6 hover:text-amber-700 transition-colors" />
//                   </a>
//                   <a href={lead.whatsapp} target="_blank" rel="noopener noreferrer">
//                     <FaWhatsapp className="w-6 h-6 hover:text-green-600 transition-colors" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ContactSection() {
  const leads = [
    {
      name: "Nidhi Singh Thakur",
      role: "Promotions Lead",
      img: "/Nidhi Singh Thakur.webp",
      linkedin: "https://www.linkedin.com/in/nidhisinght78/",
      mail: "mailto:pvt.nidhisingh07@gmail.com",
      instagram: "https://www.instagram.com/_nidhiix_/?igsh=MWgzc3BpYm9tYndndQ%3D%3D#",
      whatsapp: "https://wa.me/9479606424",
    },
    {
      name: "Chinmay Solanki",
      role: "Promotions Secretary",
      img: "/Chinmay Solanki.webp",
      linkedin: "https://www.linkedin.com/in/chinmay-solanki-609454267",
      mail: "mailto:solankichinmay8@gmail.com",
      instagram: "https://instagram.com/Chinmay_is/",
      whatsapp: "https://wa.me/7067983852",
    },
    {
      name: "Khushi Verma",
      role: "Admin Lead", // Shortened for game UI fit
      img: "/Khushi Verma.webp",
      linkedin: "https://www.linkedin.com/in/khushi-verma-966416290",
      mail: "mailto:kv6265@gmail.com",
      instagram: "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
      whatsapp: "https://wa.me/6265872942",
    },
    {
      name: "Shreyansh Awasthi",
      role: "Corp Relations", // Shortened for game UI fit
      img: "/Shreyansh Awasthi.webp",
      linkedin: "https://www.linkedin.com/in/shreyansh-awasthi-1545792b2",
      mail: "mailto:shreyanshawasthi66@gmail.com",
      instagram: "https://www.instagram.com/shreyansh_awasthi007?igsh=cHozYmFzbWM4dng=",
      whatsapp: "https://wa.me/894861454",
    },
  ];

  return (
    // Background: Deep Dark (Bedrock level)
    <section id="contact" className="w-full bg-[#121212] py-20 lg:py-28 px-4 flex justify-center items-center border-t-4 border-[#373737]">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-sans text-[#cfcfcf]" style={{ textShadow: '4px 4px 0 #000' }}>
            Server Admins
            </h2>
            <p className="mt-2 text-[#a0a0a0] font-mono text-lg">Contact the moderators below.</p>
        </div>

        {/* Profile Cards Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            justify-items-center
          "
        >
          {leads.map((lead, idx) => (
            <motion.div
              key={idx}
              // The "Player Card" Container
              className="mc-ui-box bg-[#c6c6c6] p-4 flex flex-col items-center w-full max-w-xs relative group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
                {/* "Online" Status Indicator */}
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded-none border border-white/20">
                    <div className="w-2 h-2 bg-[#55ff55] animate-pulse" />
                    <span className="text-[10px] text-white font-mono uppercase">Online</span>
                </div>

              {/* Avatar Frame - SQUARE (No circles in Minecraft!) */}
              <div className="relative mb-4 mt-2">
                <div className="w-40 h-40 bg-black border-4 border-white shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                    <img
                        src={lead.img}
                        alt={lead.name}
                        className="w-full h-full object-cover pixelated" // Force pixel rendering
                        style={{ imageRendering: "pixelated" }}
                    />
                    {/* Inner Shadow Overlay for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                </div>
              </div>

              {/* Nameplate */}
              <div className="bg-[#373737] w-full py-1 mb-1 text-center border-2 border-[#1e1e1e]">
                 <h3 className="text-xl font-sans text-white tracking-wide">{lead.name}</h3>
              </div>
              <p className="text-sm text-[#3f3f3f] font-bold uppercase mb-6 tracking-tight">
                [{lead.role}]
              </p>

              {/* Social Hotbar */}
              <div className="flex justify-center gap-2 w-full bg-[#8b8b8b] p-2 border-b-2 border-r-2 border-white/50 border-t-2 border-l-2 border-black/50">
                <SocialButton href={lead.linkedin} icon={<Linkedin size={18} />} color="hover:text-[#55ffff]" />
                <SocialButton href={lead.instagram} icon={<Instagram size={18} />} color="hover:text-[#ff55ff]" />
                <SocialButton href={lead.mail} icon={<Mail size={18} />} color="hover:text-[#ffff55]" />
                <SocialButton href={lead.whatsapp} icon={<FaWhatsapp size={18} />} color="hover:text-[#55ff55]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper Component for Social Buttons (Inventory Slots)
function SocialButton({ href, icon, color }:{ href: string, icon: React.ReactNode, color: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                w-10 h-10 flex items-center justify-center
                bg-[#8b8b8b]
                border-2 border-transparent hover:border-white hover:bg-[#a0a0a0]
                text-[#1e1e1e] ${color} transition-all duration-75
                active:translate-y-0.5
            `}
        >
            {icon}
        </a>
    );
}