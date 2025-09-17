
"use client";

import { SignInButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { MoveRight } from "lucide-react";
import TextType from './ui/typetext';
import LottiePlayer from '@/components/ui/HeadAni';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tighter stagger for a quicker sequence
      },
    },
  };

  // Using a spring animation for a more natural feel
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.4, // Delay the image slightly to let the text appear first
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-amber-50/50 px-6 sm:px-8  lg:px-16 pt-24 mt-20 lg:mt-0 md:mt-5 lg:flex lg:min-h-screen lg:items-center">


      <motion.div
        className="relative z-10 mx-auto grid  grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative flex items-center justify-center lg:order-last"
          variants={imageVariants}
        >

         <div className="relative w-full">
            <LottiePlayer
              src="https://lottie.host/f4fcdf80-d749-432d-a613-4965c8ebcdd2/bLGm5cX51j.lottie"

              className="w-full h-full"
            />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <motion.div
            className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            <TextType
              // Simplified the text prop for cleaner animation
              text={["Ignite Your Vision with"]}
              typingSpeed={100}
              pauseDuration={1500}
            />
          </motion.div>
          <motion.h1 variants={itemVariants}>
            <span className="block mt-1 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400 sm:text-6xl md:text-7xl">
              E-Cell
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 max-w-lg mx-auto text-base text-gray-700 sm:text-lg lg:mx-0"
            variants={itemVariants}
          >
            Join the next generation of innovators and leaders. Our Campus Ambassador Program is your launchpad to success, connecting you with resources, mentors, and a vibrant community.
          </motion.p>

          <SignInButton
            mode="redirect"
            forceRedirectUrl="/dashboard"
            signUpForceRedirectUrl="/complete-profile"
          >
            <motion.div variants={itemVariants} className="mt-8 flex justify-center lg:justify-start">
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-black rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span>Get Started</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </SignInButton>
        </div>
      </motion.div>
    </section>
  );
}