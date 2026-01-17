


// "use client";

// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import { HeroSection } from "@/components/HeroSection";
// import { AboutSection } from "@/components/About";
// import { ProgramInfoSection } from "@/components/Aboutca";
// import { FAQSection } from "../components/Faq";
// import { ContactSection } from "@/components/Contact";
// import { Footer } from "@/components/Footer";
// import { LoaderThree } from "@/components/loader";
// import LoaderDash from "@/components/Loaderdash";
// import { AnimatePresence, motion } from "framer-motion";

// export default function LandingPage() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>

//       <AnimatePresence mode="wait">
//         {isLoading && (
//           <motion.div
//             key="loader"
//             className="fixed inset-0 flex items-center justify-center bg-amber-50 z-50"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <LoaderThree />
//           </motion.div>
//         )}
//       </AnimatePresence>


//       <main className="flex flex-col min-h-screen bg-amber-50/50">
//         <Navbar />
//         <HeroSection />
//         <AboutSection />
//         <ProgramInfoSection />
//         <FAQSection />
//         <ContactSection />
//         <Footer />
//       </main>
//     </>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/About";
import { ProgramInfoSection } from "@/components/Aboutca";
import { FAQSection } from "../components/Faq";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoaderThree } from "@/components/loader";
import LoaderDash from "@/components/Loaderdash";
import { AnimatePresence, motion } from "framer-motion";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-amber-50 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LoaderThree />
          </motion.div>
        )}
      </AnimatePresence>


      <main className="flex flex-col min-h-screen bg-background relative overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProgramInfoSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
