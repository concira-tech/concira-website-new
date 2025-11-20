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
    <div id="industries" className="min-h-screen flex items-center justify-center bg-black px-4 py-20">
      <div className="w-full max-w-5xl relative">
        {/* Outer circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border-2 border-gray-800" />
        </div>

        {/* Inner circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border-2 border-gray-800" />
        </div>

        {/* Service Icons on outer circle */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
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
            <div className="text-center max-w-xl px-8">
              <div className="inline-block mb-6">
                <span className="text-xs font-semibold tracking-widest text-primary bg-[#FF54001A] px-4 py-2 rounded-full uppercase">
                  What We Offer
                </span>
              </div>

              <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Tailored Solutions for Every Environment
              </h1>

              <p className="text-gray-500 italic mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button className="rounded-full cursor-pointer bg-primary px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">
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
