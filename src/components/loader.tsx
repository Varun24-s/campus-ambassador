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





import { motion } from "framer-motion";
import React from "react";




export const LoaderThree = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-20 w-20 stroke-neutral-500 [--fill-final:var(--color-yellow-300)] [--fill-initial:var(--color-neutral-50)] dark:stroke-neutral-100 dark:[--fill-final:var(--color-yellow-500)] dark:[--fill-initial:var(--color-neutral-800)]">
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        initial={{ pathLength: 0, fill: "var(--fill-initial)" }}
        animate={{ pathLength: 1, fill: "var(--fill-final)" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </motion.svg>
  );
};




