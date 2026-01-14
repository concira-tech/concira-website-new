import { Smartphone, LayoutGrid, Wifi, ShieldCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Smartphone,
    title: "Smart Upgrade",
    description: "Make any regular switch smart—no plate changes needed.",
    color: "bg-blue-500",
  },
  {
    icon: LayoutGrid,
    title: "Dual Control",
    description: "Use both physical switches and app/voice control.",
    color: "bg-orange-500",
  },
  {
    icon: Wifi,
    title: "Remote Access",
    description: "Control devices, schedules, and routines from anywhere.",
    color: "bg-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Surge-protected, heat-resistant, and built for daily use.",
    color: "bg-orange-600",
  },
];

const RetrofitKeyFeatures = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-6">
              KEY FEATURES
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Powerful Features, Zero Compromise
            </h2>

            <p className="text-lg text-gray-400 mb-12">
              Smart functionality that fits behind your existing switchboard.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div
                    className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/products/retrofitSwitches/retro-switches.png"
                alt="Smart touch switch panel with blue LED indicators"
                className="w-full h-auto object-cover rounded-2xl"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetrofitKeyFeatures;
