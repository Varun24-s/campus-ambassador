"use client";

// import { motion } from 'framer-motion';

// export const PageLoader = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
//     >
//       <motion.svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-24 w-24 text-black"
//       >
//         {/* Lightbulb glass outline */}
//         <motion.path
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1, ease: "circOut" }}
//           d="M9 18h6"
//         />
//         <motion.path
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1, ease: "circOut", delay: 0.1 }}
//           d="M10 22h4"
//         />
//         <motion.path
//           initial={{ pathLength: 0, opacity: 0 }}
//           animate={{ pathLength: 1, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "circOut" }}
//           d="M12 2a7 7 0 0 0 -7 7c0 3.04 2.08 6.22 4.6 8.36a1 1 0 0 0 1.4 0c2.52 -2.14 4.6 -5.32 4.6 -8.36a7 7 0 0 0 -7 -7z"
//         />
//         {/* Lightning bolt filament */}
//         <motion.path
//           initial={{ pathLength: 0, fill: "rgba(251, 191, 36, 0)" }}
//           animate={{ pathLength: 1, fill: "rgba(251, 191, 36, 1)" }}
//           transition={{
//             pathLength: { delay: 0.8, duration: 0.7, ease: "easeInOut" },
//             fill: { delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
//           }}
//           stroke="rgba(251, 191, 36, 1)"
//           d="M13.2 8.5l-3.4 3l2.6 0l-3.4 3"
//         />
//       </motion.svg>
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.5 }}
//         className="mt-4 text-lg font-medium text-gray-700"
//       >
//         Igniting Ideas...
//       </motion.p>
//     </motion.div>
//   );
// };





// import { motion } from "framer-motion";
// import React from "react";




// export const LoaderThree = () => {
//   return (
//     <motion.svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-20 w-20 stroke-neutral-500 [--fill-final:var(--color-yellow-300)] [--fill-initial:var(--color-neutral-50)] dark:stroke-neutral-100 dark:[--fill-final:var(--color-yellow-500)] dark:[--fill-initial:var(--color-neutral-800)]">
//       <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <motion.path
//         initial={{ pathLength: 0, fill: "var(--fill-initial)" }}
//         animate={{ pathLength: 1, fill: "var(--fill-final)" }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
//     </motion.svg>
//   );
// };




import { motion } from "framer-motion";
import React from "react";

export const LoaderThree = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#2b1812] relative overflow-hidden">

      {/* Optional: Subtle Dirt Texture Overlay using CSS gradient pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
            backgroundImage: `repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #2b1812 25%, #2b1812 75%, #000 75%, #000)`,
            backgroundPosition: '0 0, 10px 10px',
            backgroundSize: '20px 20px'
        }}
      />

      <div className="z-10 flex flex-col items-center gap-8 max-w-md w-full px-8">
        {/* LOGO AREA */}
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl md:text-5xl font-sans text-white tracking-widest" style={{ textShadow: '4px 4px 0 #000' }}>
              E-CELL
            </h1>
            <p className="text-[#a0a0a0] font-mono text-lg animate-pulse">
              Building Terrain...
            </p>
        </div>

        {/* THE LOADING BAR */}
        <div className="w-full h-6 border-2 border-white bg-black p-0.5 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
          <motion.div
            className="h-full bg-[#3c8527]" // The Classic Green
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
                duration: 2.2,
                ease: "linear", // Linear looks more "robotic" and game-like
                repeat: 0
            }}
          />
        </div>

        {/* Funny Loading Tips (Splash Text Style) */}
        <div className="text-[#ffff55] font-mono text-sm mt-4 text-center">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Tip: Don't dig straight down!
            </motion.span>
        </div>
      </div>
    </div>
  );
};