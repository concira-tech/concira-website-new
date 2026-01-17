import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <rect x="9" y="6" width="6" height="8" fill="#1a1a1a" />
      </svg>
    ),
    iconBg: "bg-blue-500",
    title: "Digital Check-In & Tracking",
    description: "Instant digital tickets with real-time vehicle visibility.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 16l-4-4h3V8h2v4h3l-4 4z" />
        <rect x="6" y="18" width="12" height="2" rx="1" />
      </svg>
    ),
    iconBg: "bg-orange-500",
    title: "Smart Retrieval Management",
    description: "Fast guest requests with automatic task assignment to valet staff.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <circle cx="9" cy="8" r="3" />
        <circle cx="15" cy="8" r="3" />
        <path d="M4 18c0-3 3-5 8-5s8 2 8 5" />
      </svg>
    ),
    iconBg: "bg-red-500",
    title: "Staff Coordination",
    description: "Live staff tracking for balanced workloads and quicker turnarounds.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3L4 9v12h16V9l-8-6zm0 4l1.5 3H16l-2.5 2 1 3.5L12 14l-2.5 1.5 1-3.5L8 10h2.5L12 7z" />
      </svg>
    ),
    iconBg: "bg-yellow-500",
    title: "Insights & Alerts",
    description: "Real-time notifications and performance insights to keep operations smooth.",
  },
];

const ValetKeyFeatures = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-500 text-sm font-semibold rounded-full mb-6 tracking-wide">
              KEY FEATURES
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Intelligent Valet, Without the Chaos
            </h2>

            {/* Subheading */}
            <p className="text-gray-400 text-lg mb-12 max-w-lg">
              Everything you need to run valet operations smoothly, even during peak hours.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 ${feature.iconBg} rounded-lg flex items-center justify-center text-white mb-4`}
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/valet/valet-person.png"
                alt="Professional valet attendant"
                width={600}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValetKeyFeatures;
