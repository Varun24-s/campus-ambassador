// // "use client";

// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import Image from 'next/image';
// // import { CheckCircle2, Zap, Star, Target } from 'lucide-react';

// // export function ProgramInfoSection() {
// //   const [activeTab, setActiveTab] = useState(0);

// //   const tabData = [
// //     {
// //       id: 0,
// //       title: "What is a CA?",
// //       icon: <Zap />,
// //       image: "/ambassador.jpg",
// //       heading: "Be the Face of Innovation on Your Campus",
// //       description: "A Campus Ambassador (CA) is a vital link between the E-Cell and their college. You are a leader, a brand evangelist, and an on-ground innovator, chosen to represent our vision and ignite the entrepreneurial spirit among your peers.",
// //       points: [
// //         "Represent our brand and values.",
// //         "Act as the primary point of contact for students.",
// //         "Build a vibrant entrepreneurial community.",
// //         "Gain firsthand leadership experience."
// //       ]
// //     },
// //     {
// //       id: 1,
// //       title: "Benefits of Joining",
// //       icon: <Star />,
// //       image: "/benefits.jpg",
// //       heading: "Unlock Exclusive Perks & Opportunities",
// //       description: "Joining our CA program is more than just a title; it's a launchpad for your career. We invest in our ambassadors to help them grow personally and professionally.",
// //       points: [
// //         "Official Certificate & Letter of Recommendation.",
// //         "Exclusive E-Cell merchandise and swag.",
// //         "Networking opportunities with industry leaders.",
// //         "Mentorship from experienced entrepreneurs."
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: "Your Responsibilities",
// //       icon: <Target />,
// //       image: "/responsibilities.jpg",
// //       heading: "Drive Change and Make an Impact",
// //       description: "As a CA, you will be entrusted with key responsibilities that directly contribute to our mission and help you build a powerful skill set.",
// //       points: [
// //         "Promote E-Cell events and initiatives online and offline.",
// //         "Organize workshops and small-scale events on your campus.",
// //         "Gather valuable feedback from the student community.",
// //         "Drive registrations for our flagship programs."
// //       ]
// //     }
// //   ];

// //   const contentVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// //     exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
// //   };

// //   return (
// //     <section id="program-info" className="w-full bg-amber-50/50 py-20 lg:py-28 px-4 overflow-hidden">
// //       <div className="max-w-7xl mx-auto">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.3 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center"
// //         >
// //           <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
// //             The Campus Ambassador Program
// //           </h2>
// //           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
// //             Everything you need to know about joining our exclusive network of student leaders.
// //           </p>
// //         </motion.div>

// //         {/* Tab Buttons */}
// //         <div className="mt-12 max-w-2xl mx-auto grid grid-cols-3 gap-2 md:gap-4 p-1.5 bg-white/60 backdrop-blur-sm rounded-full shadow-inner">
// //           {tabData.map((tab) => (
// //             <button
// //               key={tab.id}
// //               onClick={() => setActiveTab(tab.id)}
// //               className={`px-4 py-3 text-sm md:text-base font-bold rounded-full transition-colors focus:outline-none ${
// //                 activeTab === tab.id
// //                   ? 'bg-black text-white shadow-md'
// //                   : 'text-gray-700 hover:bg-black/5'
// //               }`}
// //             >
// //               {tab.title}
// //             </button>
// //           ))}
// //         </div>

// //         <div className="mt-12">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={activeTab}
// //               variants={contentVariants}
// //               initial="hidden"
// //               animate="visible"
// //               exit="exit"
// //               className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
// //             >

// //               <div className="order-2 lg:order-1">
// //                 <h3 className="text-2xl md:text-3xl font-bold text-black">
// //                   {tabData[activeTab].heading}
// //                 </h3>
// //                 <p className="mt-4 text-gray-600 text-lg">
// //                   {tabData[activeTab].description}
// //                 </p>
// //                 <ul className="mt-6 space-y-4">
// //                   {tabData[activeTab].points.map((point, index) => (
// //                     <li key={index} className="flex items-start">
// //                       <CheckCircle2 className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
// //                       <span className="text-gray-700">{point}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>


// //               <div className="order-1 lg:order-2 relative w-full h-80 lg:h-96">
// //                 <Image
// //                   src={tabData[activeTab].image}
// //                   alt={tabData[activeTab].title}
// //                   layout="fill"
// //                   objectFit="cover"
// //                   className="rounded-2xl shadow-xl"
// //                 />
// //                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Zap, Star, Target } from 'lucide-react';

export function ProgramInfoSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      id: 0,
      title: "What is a CA?",
      icon: <Zap className="text-[#ffff55]" />, // Gold
      image: "/ambassador.jpg",
      heading: "Be the Face of Innovation",
      description: "A Campus Ambassador (CA) is a vital link between E-Cell and your institute. You are chosen to represent the vision and ignite the entrepreneurial flame of E-Cell among your peers. ",
      points: [
        "Be the face of E-Cell in your college",
        "Represent our brand and values.",
        "Act as the primary point of contact for students.",
        "Build a vibrant entrepreneurial community.",
        "Gain firsthand leadership experience.",
        "Unlock Exclusive Perks & Opportunities"
      ]
    },
    {
      id: 1,
      title: "Loot & Perks",
      icon: <Star className="text-[#55ffff]" />, // Diamond
      image: "/benefits.jpg",
      heading: "Unlock Exclusive Loot",
      description: "Joining our CA program is a launchpad for your future career! We invest in our ambassadors to help them grow personally and professionally.",
      points: [
       "Official Joining Certificate as a Campus Ambassador.",
"Official Certificate of Appreciation & Letter(s) of Recommendation.",
"Public endorsements of your contribution to the team.",
"Affiliating your college with E-Cell NIT Bhopal.",
"Exclusive E-Cell merchandise and goodies.",
"Connections with startups for internships.",
"Networking opportunities with industry leaders and incubation help.",
"Mentorship from experienced entrepreneurs.",

      ]
    },
    {
      id: 2,
      title: "YOUR RESPONSIBILITIES",
      icon: <Target className="text-[#ff5555]" />, // Redstone
      image: "/responsibilities.jpg",
      heading: "Your Daily QuestsImpact Starts With You.",
      description: "As a CA, your responsibilities include:",
      points: [
        "Promoting E-Cell events and initiatives online and offline.",
        "Gathering valuable feedback from the student community.",
        "Driving registrations for our flagship programs."

      ]
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2, type: "tween" }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    // Background: Dark Stone Pattern
    <section id="program-info" className="w-full bg-[#1e1e1e] py-20 lg:py-28 px-4 overflow-hidden border-t-4 border-[#373737]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-sans text-[#cfcfcf] tracking-wide" style={{ textShadow: '4px 4px 0 #000' }}>
            Advancements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#a0a0a0] font-mono">
            Select a tab to view details about the program.
          </p>
        </motion.div>

        {/* MINECRAFT TAB BAR */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-4">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              // Logic: If active, it looks "pressed" (darker border logic). If inactive, "raised".
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 text-xl font-sans transition-all
                ${activeTab === tab.id
                    ? 'bg-[#8b8b8b] border-4 border-[#373737_#fff_#fff_#373737] text-[#ffff55]' // Pressed/Active (Inverted border)
                    : 'mc-ui-box bg-[#c6c6c6] text-[#3f3f3f] hover:bg-[#d6d6d6]' // Normal Raised
                }
              `}
            >
              {tab.icon}
              <span style={{ textShadow: activeTab === tab.id ? '2px 2px 0 #3f3f3f' : 'none' }}>
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* MAIN CONTENT AREA - The "GUI Window" */}
        <div className="max-w-5xl mx-auto mc-ui-box bg-[#c6c6c6] p-1 md:p-2">
            {/* Inner darker inset for contrast */}
            <div className="bg-[#c6c6c6] border-t-4 border-l-4 border-[#fff] border-b-4 border-r-4 border-[#555] p-6 md:p-10">
                <AnimatePresence mode="wait">
                    <motion.div
                    key={activeTab}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >

                    {/* TEXT CONTENT */}
                    <div className="order-2 lg:order-1">
                        <h3 className="text-3xl font-bold text-[#3f3f3f] mb-4 font-sans tracking-wide">
                        {tabData[activeTab].heading}
                        </h3>
                        <p className="text-[#3f3f3f] text-lg mb-8 font-serif leading-relaxed">
                        {tabData[activeTab].description}
                        </p>

                        <div className="space-y-4">
                        {tabData[activeTab].points.map((point, index) => (
                            <div key={index} className="flex items-center bg-[#8b8b8b]/20 p-2 border-2 border-[#a0a0a0]">
                                {/* Pixel Art Checkbox */}
                                <div className="w-6 h-6 mr-4 bg-[#55ff55] border-2 border-[#00aa00] shadow-[inset_-2px_-2px_0_rgba(0,0,0,0.2)] flex-shrink-0" />
                                <span className="text-[#2a2a2a] font-mono text-sm md:text-base">{point}</span>
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* IMAGE - "Glass Pane View" */}
                    <div className="order-1 lg:order-2 relative w-full h-64 lg:h-96">
                        <div className="absolute inset-0 border-4 border-[#a0a0a0] bg-black/50 z-10 pointer-events-none">
                            {/* Glass Reflections */}
                            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/30" />
                            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/30" />
                        </div>
                        <Image
                        src={tabData[activeTab].image}
                        alt={tabData[activeTab].title}
                        layout="fill"
                        objectFit="cover"
                        className="pixelated"
                        />
                    </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
}