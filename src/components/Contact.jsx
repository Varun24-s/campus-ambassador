"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="w-full bg-amber-50/50 text-black py-20 lg:py-28 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Left Column: Information */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
            Let's Build Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Have a question, a proposal, or just want to say hello? We'd love to hear from you. Reach out and let's start a conversation.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <span className="text-gray-700 text-lg">contact@ecell.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <span className="text-gray-700 text-lg">+91 9685694466</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <span className="text-gray-700 text-lg">Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* <div className="mt-12 flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors"><Linkedin className="w-7 h-7" /></a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors"><Twitter className="w-7 h-7" /></a>
            <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors"><Instagram className="w-7 h-7" /></a>
          </div> */}
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div variants={itemVariants}>
          <form className="bg-amber-50/40 border border-amber-200/50 p-8 rounded-2xl shadow-lg space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-800">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-800">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                className="w-full px-8 py-3 text-lg font-bold text-white bg-black rounded-full overflow-hidden transition-transform transform hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}