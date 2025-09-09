
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AccordionItem } from "./AccordionItem"

export function FAQSection() {

  const faqs = [
    {
      question: "Who is eligible to apply for the Campus Ambassador program?",
      answer: "Any student currently enrolled in a college or university with a passion for entrepreneurship and strong communication skills is eligible to apply. We welcome students from all academic backgrounds and years of study."
    },
    {
      question: "Is this a paid position or a voluntary role?",
      answer: "The Campus Ambassador role is primarily a voluntary position focused on learning and community building. However, we offer performance-based incentives, exclusive merchandise, and valuable perks like certificates and letters of recommendation."
    },
    {
      question: "What is the expected time commitment?",
      answer: "We expect a commitment of about 3-4 hours per week. The role is designed to be flexible and manageable alongside your academic responsibilities."
    },
    {
      question: "How are the Campus Ambassadors selected?",
      answer: "Our selection process involves an application form review followed by a short virtual interview. We look for proactive, enthusiastic students who are well-connected on their campus and passionate about our mission."
    },
    {
      question: "Are there any registration fees to join the program?",
      answer: "No, there are absolutely no registration fees. The program is completely free for all selected students."
    },
    {
      question: "What kind of training and resources will be provided?",
      answer: "Selected ambassadors will go through an orientation program and will be provided with a complete kit of digital resources, marketing materials, and continuous support from our dedicated program manager."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="faq" className="w-full bg-amber-50/50   px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common queries about our Campus Ambassador Program.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12"
        >
          <div className="space-y-4">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="space-y-4">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem key={index + faqs.length} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}