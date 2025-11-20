import Image from "next/image";
import { utilsOne } from "../_utils";
import { motion } from "motion/react";

const SectionOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-black container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32"
      id="solutions"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/80 mb-6 sm:mb-8 lg:mb-10"
      >
        Tailored Solutions for Every Environment
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 lg:mb-12 max-w-3xl"
      >
        Concira is an intelligent ecosystem that connects devices, people, and
        operations across any space—homes, buildings, workplaces, and beyond.
        Whether you're automating lights, managing facilities, or coordinating
        staff, Concira gives you control and insight from one unified system.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {utilsOne?.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255, 84, 0, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-2xl bg-zinc-900 p-4 sm:p-5 lg:p-6 transition-all duration-200 ease-out"
          >
            {/* Glow layer */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, rgba(255,84,0,0.15), transparent 55%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.18), transparent 55%)",
              }}
              whileHover={{ opacity: 1 }}
            />

            <div className="relative flex items-center mb-4 text-5xl">
              <Image src={section.icon} alt="logo" width={80} height={80} />
            </div>
            <h3 className="relative text-lg sm:text-xl font-semibold text-white/90 mb-2">
              {section.title}
            </h3>
            <p className="relative text-sm sm:text-base text-gray-500">
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionOne;
