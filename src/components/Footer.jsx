"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Program", href: "#program-info" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black">
      <motion.div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center">

          <Link href="/" className="mb-5">
            <Image
              src="/logo.webp"
              alt="E-Cell Logo"
              width={55}
              height={55}
              className="rounded-full hover:opacity-90 transition-opacity"
            />
          </Link>
          <h2 className="text-2xl font-bold text-white">E-Cell, NIT Bhopal</h2>
          <p className="text-gray-400 mt-2 max-w-md">
            Igniting the next generation of innovators and leaders.
          </p>
        </div>


        <nav className="my-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-base text-gray-300 hover:text-amber-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>


        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">LinkedIn</span><Linkedin /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Twitter</span><Twitter /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Instagram</span><Instagram /></a>
        </div>

      
        <div className="mt-10 pt-8 border-t border-gray-800/50">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} E-Cell, Bhopal. All Rights Reserved.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}