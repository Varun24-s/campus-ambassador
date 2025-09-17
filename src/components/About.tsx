"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Users, Lightbulb } from 'lucide-react';
import { AnimatedStat } from './ui/AnimatedStat';

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      value: "50+",
      label: "Startups Ignited",
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      value: "2000+",
      label: "Community Members",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      value: "100+",
      label: "Events Hosted",
    },
  ];

  return (
    <section id="about" className="w-full bg-amber-50/50 py-25 lg:pt-10 lg:pb-15 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        <div className="text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="font-semibold text-amber-500 uppercase tracking-wider"
          >
            Who We Are
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl md:text-4xl font-extrabold text-black tracking-tight"
          >
            The Epicenter of Innovation and Entrepreneurship
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 leading-relaxed"
          >
            E-Cell is more than just a club; it's a dynamic ecosystem where ideas flourish, connections are made, and visions become reality. We are dedicated to fostering the spirit of entrepreneurship among students, providing them with the resources, mentorship, and platform to build the future.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start"
          >
            {/* {stats.map((stat, index) => {
              const numValue = parseInt(stat.value, 10);
              const hasPlus = stat.value.includes('+');

              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-amber-100/60 p-3 rounded-full">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <AnimatedStat value={numValue} />
                      {hasPlus && <span className="text-2xl font-bold text-black">+</span>}
                    </div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              );
            })} */}

<div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
  {stats.map((stat, index) => {
    const numValue = parseInt(stat.value, 10);
    const hasPlus = stat.value.includes('+');

    return (
      <div key={index} className="flex items-center gap-4">
        <div className="bg-amber-100/60 p-3 rounded-full">
          {stat.icon}
        </div>
        <div>
          <div className="flex items-baseline justify-center md:justify-start">
            <AnimatedStat value={numValue} />
            {hasPlus && (
              <span className="text-2xl font-bold text-black">+</span>
            )}
          </div>
          <p className="text-sm text-gray-500 text-center md:text-left">
            {stat.label}
          </p>
        </div>
      </div>
    );
  })}
</div>


          </motion.div>
        </div>


        <motion.div
          variants={imageVariants}
          className="relative flex items-center justify-center h-80 lg:h-full"
        >
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-amber-300 rounded-full opacity-20 blur-3xl -translate-y-10"></div>
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
             <Image
               src="/about-main.jpg"
               alt="E-Cell team working"
               layout="fill"
               objectFit="cover"
               className="rounded-3xl shadow-2xl z-10"
             />
             <motion.div
               className="absolute -bottom-8 -left-12 z-20"
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.6 }}
               viewport={{ once: true }}
             >
               <Image
                 src="/about-secondary.jpg"
                 alt="E-Cell event"
                 width={180}
                 height={180}
                 objectFit="cover"
                 className="rounded-2xl shadow-xl border-4 border-white"
               />
             </motion.div>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}