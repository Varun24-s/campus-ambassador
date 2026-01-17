
// "use client";

// import { SignInButton } from '@clerk/nextjs';
// import { motion } from 'framer-motion';
// import { MoveRight } from "lucide-react";
// import TextType from './ui/typetext';
// import LottiePlayer from '@/components/ui/HeadAni';

// export function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Tighter stagger for a quicker sequence
//       },
//     },
//   };

//   // Using a spring animation for a more natural feel
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 20,
//         delay: 0.4, // Delay the image slightly to let the text appear first
//       },
//     },
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-amber-50/50 px-6 sm:px-8  lg:px-16 pt-24 mt-20 lg:mt-0 md:mt-5 lg:flex lg:min-h-screen lg:items-center">


//       <motion.div
//         className="relative z-10 mx-auto grid  grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div
//           className="relative flex items-center justify-center lg:order-last"
//           variants={imageVariants}
//         >

//          <div className="relative w-full">
//             <LottiePlayer
//               src="https://lottie.host/f4fcdf80-d749-432d-a613-4965c8ebcdd2/bLGm5cX51j.lottie"

//               className="w-full h-full"
//             />
//           </div>
//         </motion.div>

//         <div className="text-center lg:text-left">
//           <motion.div
//             className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl"
//             variants={itemVariants}
//           >
//             <TextType
//               // Simplified the text prop for cleaner animation
//               text={["Ignite Your Vision with"]}
//               typingSpeed={100}
//               pauseDuration={1500}
//             />
//           </motion.div>
//           <motion.h1 variants={itemVariants}>
//             <span className="block mt-1 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400 sm:text-6xl md:text-7xl">
//               E-Cell
//             </span>
//           </motion.h1>

//           <motion.p
//             className="mt-4 max-w-lg mx-auto text-base text-gray-700 sm:text-lg lg:mx-0"
//             variants={itemVariants}
//           >
//             Join the next generation of innovators and leaders. Our Campus Ambassador Program is your launchpad to success, connecting you with resources, mentors, and a vibrant community.
//           </motion.p>

//           <SignInButton
//             mode="redirect"
//             forceRedirectUrl="/dashboard"
//             signUpForceRedirectUrl="/complete-profile"
//           >
//             <motion.div variants={itemVariants} className="mt-8 flex justify-center lg:justify-start">
//               <motion.button
//                 className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-black rounded-full overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//               >
//                 <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 <span>Get Started</span>
//                 <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </motion.button>
//             </motion.div>
//           </SignInButton>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



"use client";

import { SignInButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { MoveRight } from "lucide-react";
import TextType from './ui/typetext';
import LottiePlayer from '@/components/ui/HeadAni';

export function HeroSection() {
  // MINECRAFT ANIMATION: Stiff, vertical drops (Gravity effect)
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
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Bouncy like a block falling
        damping: 12,
      },
    },
  };

  // SPLASH TEXT ANIMATION (The pulsing yellow text)
  const splashVariants = {
    hidden: { scale: 0, rotate: -20 },
    visible: {
      scale: 1,
      rotate: -20,
      transition: { type: "spring", stiffness: 200 }
    },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const, // Fix for TS strict type
      }
    }
  };

  return (
    // Removed amber-50. Now uses global dark background.
    <section className="relative w-full overflow-hidden px-6 sm:px-8 lg:px-16 pt-40 pb-20 lg:min-h-screen lg:items-center">

      {/* Background Decor: Vignette effect to darken edges like Minecraft UI */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0" />

      <motion.div
        className="relative z-10 mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* RIGHT COLUMN (Image/Lottie) - Now a "Window" */}
        <motion.div
          className="relative flex items-center justify-center lg:order-last"
          variants={itemVariants}
        >
          {/* THE WINDOW FRAME */}
          <div className="mc-ui-box p-2 bg-stone-800">
             <div className="relative w-full bg-black/50 border-4 border-[#373737]">
                <LottiePlayer
                  src="https://lottie.host/f4fcdf80-d749-432d-a613-4965c8ebcdd2/bLGm5cX51j.lottie"
                  className="w-full h-full opacity-90"
                  // Lotties are smooth, so we lower opacity slightly to blend them
                />
                {/* Glass reflection effect */}
                <div className="absolute top-2 right-2 w-16 h-8 bg-white/10 skew-x-[-20deg]" />
                <div className="absolute top-4 right-4 w-4 h-4 bg-white/20 skew-x-[-20deg]" />
             </div>
          </div>
        </motion.div>

        {/* LEFT COLUMN (Text) */}
        <div className="text-center lg:text-left relative">

          {/* SPLASH TEXT (Yellow pulsating text) */}
          <motion.div
            className="absolute-top-12 right-0 lg:-right-10 text-[#ffff55] text-2xl lg:text-3xl font-mono tracking-tighter drop-shadow-md z-20 pointer-events-none"
            variants={splashVariants}
            initial="hidden"
            animate={["visible", "animate"]}
          >
           MAKE THINGS HAPPEN!
          </motion.div>

          {/* MAIN TITLE (Stone Texture Look) */}
          <motion.h1 variants={itemVariants} className="relative">
            <span className="block text-7xl sm:text-8xl md:text-9xl text-[#9e9e9e] font-sans tracking-tight"
                  style={{
                    textShadow: '4px 4px 0px #3f3f3f, 6px 6px 0px #000000' // The 3D Stone Block effect
                  }}>
              E-CELL
            </span>
          </motion.h1>

          <motion.div
            className="mt-6 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {/* Description is now a "Chat Box" style */}
            <p className="text-lg text-gray-300 bg-black/40 p-4 border-l-4 border-accent font-mono leading-relaxed backdrop-blur-sm">
              <span className="text-accent">{`>`}</span> Join the next generation of innovators.
              <br/>
              <span className="text-accent">{`>`}</span> Campus Ambassador Program loaded...
            </p>
          </motion.div>

          <SignInButton
            mode="redirect"
            forceRedirectUrl="/dashboard"
            signUpForceRedirectUrl="/complete-profile"
          >
            <motion.div variants={itemVariants} className="mt-10 flex justify-center lg:justify-start">
              {/* BIG PLAY BUTTON */}
              <motion.button
                className="mc-ui-box group relative inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 text-2xl font-bold text-black bg-[#3c8527] hover:bg-[#2a6b1c] active:border-[#373737_#fff_#fff_#373737]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Play Now</span>
                <MoveRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform step-end" />
              </motion.button>
            </motion.div>
          </SignInButton>
        </div>
      </motion.div>
    </section>
  );
}