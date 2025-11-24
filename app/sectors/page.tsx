"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  text: string;
}

interface Sector {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features?: Feature[];
  image: string;
  imagePosition: "left" | "right";
}

const sectors: Sector[] = [
  {
    id: "smart-automation",
    number: "01",
    category: "Smart living Area living space",
    title: "Transform Any Space with Smart Automation",
    description:
      "Concira's digital-led luxury for a truly next-level automation. Our innovative solutions seamlessly integrate cutting-edge technology with elegant design, creating spaces that are not only functional but also aesthetically pleasing.",
    features: [
      { text: "User-friendly App Access" },
      { text: "Real-time Monitoring" },
      { text: "Scheduled Digital Access" },
      { text: "Data Insights & Analytics" },
      { text: "Integration Capabilities" },
      { text: "Real-time Chat Support" },
    ],
    image: "/sectors/icon1.svg",
    imagePosition: "left",
  },
  {
    id: "residential",
    number: "02",
    category: "Smart living Area living space",
    title: "Residential Spaces",
    description:
      "Concira brings premium automation directly into the blueprint of your dream home. Our cutting-edge technology seamlessly integrates with your home's design, allowing you to control every aspect of your living space with ease and sophistication.",
    image: "/sectors/icon2.svg",
    imagePosition: "right",
  },
  {
    id: "hospitality",
    number: "03",
    category: "Exceptional guest experiences, preserving authenticity",
    title: "Hospitality",
    description:
      "Modern luxuries can elevate a location's value, image and desirability, yet they need not supersede the authentic experience. Our solutions enhance the guest experience while maintaining the unique character and charm that make each property special.",
    image: "/sectors/icon3.svg",
    imagePosition: "left",
  },
  {
    id: "commercial",
    number: "04",
    category: "Optimizing newly digitalized",
    title: "Commercial & Office Spaces",
    description:
      "We use our diligent, interconnected and cutting-edge technology to craft efficient and inspiring work environments. Our smart solutions optimize energy usage, enhance security, and create comfortable spaces that boost productivity.",
    image: "/sectors/icon4.svg",
    imagePosition: "right",
  },
  {
    id: "healthcare",
    number: "05",
    category: "Modern automating your entire medical center kit",
    title: "Healthcare",
    description:
      "Automate your healthcare facility with precision and care. Our comprehensive systems ensure patient safety, streamline operations, and create healing environments through intelligent lighting, climate control, and access management.",
    image: "/sectors/icon5.svg",
    imagePosition: "left",
  },
  {
    id: "retail",
    number: "06",
    category: "Displays vacancies, Major malls",
    title: "Retail & Malls",
    description:
      "Concira seamlessly blends functional automation and immersive retail experiences that captivate customers. From dynamic lighting to crowd management, our solutions create engaging shopping environments that drive sales.",
    image: "/sectors/icon6.svg",
    imagePosition: "right",
  },
  {
    id: "parking",
    number: "07",
    category: "Optimized, safe, an innovative parking management kit",
    title: "Parking & Valet Services",
    description:
      "Our systems can support the entry and exit of thousands of vehicles per day, ensuring smooth operations and enhanced security. From automated payments to real-time space availability, we streamline the entire parking experience.",
    image: "/sectors/icon7.svg",
    imagePosition: "left",
  },
];

const SectorsShowcase = () => {
  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-4 space-y-32">
        {sectors.map((sector, index) => (
          <motion.div
            key={sector.id}
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {sector.imagePosition === "left" ? (
              <>
                {/* Image Left */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -top-4 -left-4 text-6xl font-bold text-white/5">
                    {sector.number}
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Content Right */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {sector.number} — {sector.category}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {sector.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {sector.description}
                  </p>
                  {sector.features && (
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                      {sector.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </>
            ) : (
              <>
                {/* Content Left */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6 lg:order-1"
                >
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {sector.number} — {sector.category}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {sector.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {sector.description}
                  </p>
                </motion.div>

                {/* Image Right */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group lg:order-2"
                >
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-white/5">
                    {sector.number}
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectorsShowcase;
