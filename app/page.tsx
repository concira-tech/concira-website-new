"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Applications from "./_components/Applications";
import Contactus from "./_components/Contactus";
import Features from "./_components/Features";
import FloatingCards from "./_components/FloatingCards";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import SectionOne from "./_components/SectionOne";
import SectionThree from "./_components/SectionThree";
import SectionTwo from "./_components/SectionTwo";
import Testimonials from "./_components/Testimonials";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsAtTop(scrollPosition < windowHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating Scroll Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={handleScrollClick}
        className="fixed z-40 flex items-center justify-center
                   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                   bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8
                   rounded-full bg-primary text-primary-foreground
                   shadow-md sm:shadow-lg hover:shadow-xl
                   cursor-pointer transition-transform duration-200 hover:scale-110"
        aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
      >
        <motion.div
          animate={{ y: isAtTop ? [0, 4, 0] : [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {isAtTop ? (
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          ) : (
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          )}
        </motion.div>
      </motion.button>

      {/* Page Content */}
      <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-20">
        <Navbar />
        <HeroSection />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Features />
      <Applications />
      <FloatingCards />
      <Testimonials />
      <Contactus />
      <Footer />
    </>
  );
}
