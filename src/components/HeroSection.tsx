"use client"

// import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from "lucide-react";


export function HeroSection() {



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white px-4">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100 animate-gradient-xy"></div>
      </div>

      <motion.div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <div className="text-center lg:text-left ml-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-black tracking-tight"
            variants={itemVariants}
          >
            Ignite Your Vision with
            <span className="block mt-2 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">
              E-Cell
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg text-gray-700"
            variants={itemVariants}
          >
            Join the next generation of innovators and leaders. Our Campus Ambassador Program is your launchpad to success, connecting you with resources, mentors, and a vibrant community.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-black rounded-full overflow-hidden transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect for the button */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span>Get Started</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>


        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">

            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-amber-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute inset-8 bg-white rounded-full opacity-50 blur-xl"></div>


            <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">

               <img
                  src="/herosection.png"
                  alt="Campus Ambassador Program"
                  className="w-full h-full object-cover rounded-3xl"
               />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}