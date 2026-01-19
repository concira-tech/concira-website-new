import ServiceIcon from "./ServiceIcon";
import {
  Monitor,
  Link2,
  Settings,
  Truck,
  TrendingUp,
  Filter,
  Home,
  MapPin,
  Maximize2,
} from "lucide-react";

const SectionThree = () => {
  const services = [
    { Icon: Monitor, position: 0 },
    { Icon: Link2, position: 1 },
    { Icon: Settings, position: 2 },
    { Icon: Truck, position: 3 },
    { Icon: Maximize2, position: 4 },
    { Icon: MapPin, position: 5 },
    { Icon: Home, position: 6 },
    { Icon: Filter, position: 7 },
    { Icon: TrendingUp, position: 8 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-5xl relative">
        {/* Outer circle - hidden on mobile */}
        <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none">
          <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full border-2 border-gray-800" />
        </div>

        {/* Inner circle - hidden on mobile */}
        <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none">
          <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-gray-800" />
        </div>

        {/* Service Icons on outer circle - hidden on mobile via ServiceIcon component */}
        <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
          {services.map((service, index) => (
            <ServiceIcon
              key={index}
              Icon={service.Icon}
              position={service.position}
              total={services.length}
              radius={350}
            />
          ))}

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-xl px-4 sm:px-6 md:px-8">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-primary bg-[#FF54001A] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase">
                  What We Offer
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Tailored Solutions for Every Environment
              </h1>

              <p className="text-gray-500 italic mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button className="rounded-full cursor-pointer bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
