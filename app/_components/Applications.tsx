import Image from "next/image";
import { CustomAccordion } from "./ui/CustomAccordion";
import { motion } from "motion/react";

const Applications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03, rotate: -1.5 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex justify-center lg:justify-start"
          >
            <Image
              src="/application/icon.svg"
              alt="application"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase">
                Built For Every Space
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                One System. Many Applications.
              </h2>
            </div>

            <CustomAccordion
              defaultValue="homes"
              items={[
                {
                  value: "homes",
                  title: "Homes",
                  content: "Light control, scene settings, energy tracking.",
                },
                {
                  value: "offices",
                  title: "Offices",
                  content:
                    "Workspace automation, meeting room controls, and energy management.",
                },
                {
                  value: "hotels",
                  title: "Hotels",
                  content:
                    "Guest room automation, centralized control, and energy optimization.",
                },
                {
                  value: "hospitals",
                  title: "Hospitals",
                  content:
                    "Patient comfort, staff efficiency, and facility-wide monitoring.",
                },
                {
                  value: "retail",
                  title: "Retail & Malls",
                  content:
                    "Ambiance control, security integration, and smart energy use.",
                },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Applications;
