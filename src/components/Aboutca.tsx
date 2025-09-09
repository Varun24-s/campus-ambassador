"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Zap, Star, Target } from 'lucide-react';

export function ProgramInfoSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      id: 0,
      title: "What is a CA?",
      icon: <Zap />,
      image: "/ambassador.jpg",
      heading: "Be the Face of Innovation on Your Campus",
      description: "A Campus Ambassador (CA) is a vital link between the E-Cell and their college. You are a leader, a brand evangelist, and an on-ground innovator, chosen to represent our vision and ignite the entrepreneurial spirit among your peers.",
      points: [
        "Represent our brand and values.",
        "Act as the primary point of contact for students.",
        "Build a vibrant entrepreneurial community.",
        "Gain firsthand leadership experience."
      ]
    },
    {
      id: 1,
      title: "Benefits of Joining",
      icon: <Star />,
      image: "/benefits.jpg",
      heading: "Unlock Exclusive Perks & Opportunities",
      description: "Joining our CA program is more than just a title; it's a launchpad for your career. We invest in our ambassadors to help them grow personally and professionally.",
      points: [
        "Official Certificate & Letter of Recommendation.",
        "Exclusive E-Cell merchandise and swag.",
        "Networking opportunities with industry leaders.",
        "Mentorship from experienced entrepreneurs."
      ]
    },
    {
      id: 2,
      title: "Your Responsibilities",
      icon: <Target />,
      image: "/responsibilities.jpg",
      heading: "Drive Change and Make an Impact",
      description: "As a CA, you will be entrusted with key responsibilities that directly contribute to our mission and help you build a powerful skill set.",
      points: [
        "Promote E-Cell events and initiatives online and offline.",
        "Organize workshops and small-scale events on your campus.",
        "Gather valuable feedback from the student community.",
        "Drive registrations for our flagship programs."
      ]
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section id="program-info" className="w-full bg-amber-50/50 py-20 lg:py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            The Campus Ambassador Program
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Everything you need to know about joining our exclusive network of student leaders.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="mt-12 max-w-2xl mx-auto grid grid-cols-3 gap-2 md:gap-4 p-1.5 bg-white/60 backdrop-blur-sm rounded-full shadow-inner">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm md:text-base font-bold rounded-full transition-colors focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-700 hover:bg-black/5'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >

              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  {tabData[activeTab].heading}
                </h3>
                <p className="mt-4 text-gray-600 text-lg">
                  {tabData[activeTab].description}
                </p>
                <ul className="mt-6 space-y-4">
                  {tabData[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            
              <div className="order-1 lg:order-2 relative w-full h-80 lg:h-96">
                <Image
                  src={tabData[activeTab].image}
                  alt={tabData[activeTab].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-xl"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}