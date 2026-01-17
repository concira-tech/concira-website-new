"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with Orange Background */}
      <section className="bg-black pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                About our
                <br />
                company
              </h1>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-white/90"
            >
              <p className="text-sm md:text-base leading-relaxed">
                Concira builds intelligent automation systems that simplify how
                spaces operate.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                We combine smart hardware, cloud software, and real-time
                analytics into one seamless ecosystem—designed to enhance
                comfort, boost efficiency, and reduce operational complexity.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our approach is simple: technology should adapt to people, not
                the other way around.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                With modular devices, a powerful automation engine, and
                intuitive apps, Concira transforms everyday environments into
                smart, responsive, and beautifully connected spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/robot-hands.png"
              alt="Robot and human hands touching - symbolizing the harmony between technology and humanity"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
