"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

const HeroSection: React.FC = () => {
  return (
    <motion.main
      className="h-full w-full flex justify-center px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Responsive container */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-between gap-10 py-16 sm:py-20 lg:py-24">
        <motion.div
          className="left flex flex-col justify-center items-center gap-5 text-center"
          variants={leftVariants}
        >
          <h3 className="text-2xl">Intelligence that</h3>
          <h1 className="text-6xl font-bold">Powers Every Space</h1>
        </motion.div>

        <motion.div className="right w-full flex justify-center" variants={rightVariants}>
          <Image
            src="/herosection/icon1.svg"
            alt="home page"
            width={1200}
            height={700}
          />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default HeroSection;
