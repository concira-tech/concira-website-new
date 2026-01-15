import { motion } from "motion/react";

const FloatingCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative px-4 py-32 overflow-hidden bg-linear-to-br from-primary via-primary/90 to-primary/70"
    >
      {/* Floating Dashboard Cards */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -20 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <img
          src="/floatingCard/icon1.svg"
          alt="Dashboard metrics"
          className="w-48"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 30 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 -translate-y-1/2 hidden lg:block -bottom-34"
      >
        <img
          src="/floatingCard/icon2.svg"
          alt="Analytics report"
          className="w-64"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Bring Intelligence to Your Space
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Whether you manage a building, business, or home — Corelia helps you
          automate, control, and optimize everything from one platform.
        </p>
        <button className="bg-black py-4 text-foreground hover:bg-white/90 rounded-full px-8 font-semibold shadow-xl">
          Request Demo
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCards;
