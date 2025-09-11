"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";

export function ContactSection() {
  const leads = [
    {
      name: "Nidhi Singh Thakur",
      role: "Promotions Lead",
      img: "/Nidhi Singh Thakur.webp",
      linkedin: "https://www.linkedin.com/in/nidhisinght78/",
      mail: "pvt.nidhisingh07@gmail.com",
      instagram: "https://www.instagram.com/_nidhiix_/?igsh=MWgzc3BpYm9tYndndQ%3D%3D#",
    },
    {
      name: "Chinmay Solanki",
      role: "Promotions Secretary",
      img: "/Chinmay Solanki.webp",
      linkedin: "https://www.linkedin.com/in/chinmay-solanki-609454267",
      mail: "solankichinmay8@gmail.com",
      instagram: "https://instagram.com/Chinmay_is/",
    },
    {
      name: "Khushi Verma",
      role: "Administrative Lead",
      img: "/Khushi Verma.webp",
      linkedin: "https://www.linkedin.com/in/khushi-verma-966416290",
      mail: "kv6265@gmail.com",
      instagram: "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
    },
    {
      name: "Shreyansh Awasthi",
      role: "Corporate Relations Lead",
      img: "/Shreyansh Awasthi.webp",
      linkedin: "https://www.linkedin.com/in/shreyansh-awasthi-1545792b2",
      mail: "shreyanshawasthi66@gmail.com",
      instagram: "https://www.instagram.com/shreyansh_awasthi007?igsh=cHozYmFzbWM4dng=",
    },
  ];

  return (
    <section className="w-full bg-amber-50/50 py-20 lg:py-28 px-4 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-12">
          Contact Us
        </h2>

        {/* Profile Cards */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-3 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-6
            justify-items-center
          "
        >
          {leads.map((lead, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden bg-white/80 border border-amber-200/50 p-4 rounded-2xl shadow-lg text-center flex flex-col items-center w-full max-w-xs group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Background expanding avatar (hidden initially) */}
              {/* <motion.img
                src={lead.img}
                alt={lead.name}
                className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full object-cover shadow-md border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-0
                opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-[8] transition-all duration-500 ease-in-out"
              /> */}

              {/* Foreground content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Foreground avatar (visible initially, hidden on hover) */}
                <img
                  src={lead.img}
                  alt={lead.name}
                  className="w-40 h-40 rounded-full object-cover mb-4 shadow-md border-4 border-white hover:scale-1.1 "
                />
                <h3 className="text-xl font-bold text-black">{lead.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{lead.role}</p>
                <div className="flex justify-center gap-4 text-amber-500">
                  <a href={lead.linkedin} target="_blank">
                    <Linkedin className="w-6 h-6 hover:text-amber-700 transition-colors" />
                  </a>
                  <a href={lead.instagram} target="_blank">
                    <Instagram className="w-6 h-6 hover:text-amber-700 transition-colors" />
                  </a>
                  <a href={lead.mail} target="_blank">
                    <Mail className="w-6 h-6 hover:text-amber-700 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Overlay for readability
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5"></div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
