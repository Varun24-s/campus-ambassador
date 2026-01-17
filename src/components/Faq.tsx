
// "use client"

// import React from 'react';
// import { motion } from 'framer-motion';
// import { AccordionItem } from "./AccordionItem"

// export function FAQSection() {

//   const faqs = [
//     {
//       question: "Who is eligible to apply for the Campus Ambassador program?",
//       answer: "Any student currently enrolled in a college or university with a passion for entrepreneurship and strong communication skills is eligible to apply. We welcome students from all academic backgrounds and years of study."
//     },
//     {
//       question: "Is this a paid position or a voluntary role?",
//       answer: "The Campus Ambassador role is primarily a voluntary position focused on learning and community building. However, we offer performance-based incentives, exclusive merchandise, and valuable perks like certificates and letters of recommendation."
//     },
//     {
//       question: "What is the expected time commitment?",
//       answer: "We expect a commitment of about 3-4 hours per week. The role is designed to be flexible and manageable alongside your academic responsibilities."
//     },
//     {
//       question: "How are the Campus Ambassadors selected?",
//       answer: "Our selection process involves an application form review followed by a short virtual interview. We look for proactive, enthusiastic students who are well-connected on their campus and passionate about our mission."
//     },
//     {
//       question: "Are there any registration fees to join the program?",
//       answer: "No, there are absolutely no registration fees. The program is completely free for all selected students."
//     },
//     {
//       question: "What kind of training and resources will be provided?",
//       answer: "Selected ambassadors will go through an orientation program and will be provided with a complete kit of digital resources, marketing materials, and continuous support from our dedicated program manager."
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <section id="faq" className="w-full bg-amber-50/50   px-4">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//             Frequently Asked Questions
//           </h2>
//           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
//             Find answers to common queries about our Campus Ambassador Program.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12"
//         >
//           <div className="space-y-4">
//             {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
//               <AccordionItem key={index} question={faq.question} answer={faq.answer} />
//             ))}
//           </div>
//           <div className="space-y-4">
//             {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
//               <AccordionItem key={index + faqs.length} question={faq.question} answer={faq.answer} />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- MINECRAFT ACCORDION ITEM COMPONENT ---
function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={`w-full text-left flex items-center justify-between p-4 transition-all
          ${
            isOpen
              ? "bg-[#8b8b8b] border-4 border-[#373737_#fff_#fff_#373737] translate-y-1"
              : "mc-ui-box bg-[#c6c6c6] hover:bg-[#d6d6d6]"
          }
        `}
      >
        <span
          className={`font-sans text-lg md:text-xl tracking-wide ${
            isOpen ? "text-[#ffff55]" : "text-[#3f3f3f]"
          }`}
          style={{ textShadow: isOpen ? "2px 2px 0 #3f3f3f" : "none" }}
        >
          {question}
        </span>

        {/* Redstone Torch Icon */}
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <div className="w-4 h-8 bg-red-600 relative mx-auto shadow-[0_0_10px_#ff0000]">
              <div className="absolute top-0 left-1 w-2 h-2 bg-[#ffaaaa] animate-pulse" />
              <div className="absolute bottom-0 w-full h-4 bg-[#5c3c22]" />
            </div>
          ) : (
            <div className="w-4 h-8 bg-[#3a2010] relative mx-auto opacity-70">
              <div className="absolute top-0 w-full h-3 bg-[#4a0000]" />
              <div className="absolute bottom-0 w-full h-4 bg-[#5c3c22]" />
            </div>
          )}
        </div>
      </button>

      {/* Answer Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mx-2 bg-black border-x-4 border-b-4 border-[#373737] p-4 font-mono text-[#a0a0a0]">
              <span className="text-[#55ff55] mr-2">/msg player</span>
              {answer}
              <div className="animate-pulse inline-block w-2 h-4 bg-[#55ff55] ml-1 align-middle" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- MAIN SECTION ---
export function FAQSection() {
  const faqs = [
    {
      question: "Who is eligible to apply?",
      answer:
        "Any player currently spawned in a college or university server with a passion for building and griefing (figuratively) obstacles is eligible.",
    },
    {
      question: "Is this a paid position?",
      answer:
        "This is a voluntary role focused on XP grinding and community building. However, we drop loot, exclusive armor (merch), and certificates.",
    },
    {
      question: "Time commitment?",
      answer:
        "We expect a grind of about 3-4 hours per week. Compatible with your survival mode studies.",
    },
    {
      question: "Selection process?",
      answer:
        "Application review followed by a short connection request (interview). We look for players with high charisma stats.",
    },
    {
      question: "Registration fees?",
      answer: "0 Emeralds. The program is completely free-to-play.",
    },
    {
      question: "Training provided?",
      answer:
        "You will spawn with a Starter Kit of digital resources and get a tutorial walkthrough from our admins.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-[#0b0b0b] py-24 px-4 border-t-4 border-[#373737]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-sans text-[#cfcfcf]"
            style={{ textShadow: "4px 4px 0 #000" }}
          >
            <span
              className="text-[#ff0000] inline-block mr-3"
              style={{ textShadow: "4px 4px 0 #5c0000" }}
            >
              /help
            </span>
            Redstone Logic
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-[#8b8b8b] font-mono">
            Debug your doubts about the Campus Ambassador Program.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 items-start">
          <div className="space-y-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="space-y-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index + faqs.length}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
