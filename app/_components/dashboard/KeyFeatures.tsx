"use client";

const KeyFeatures = () => {
  const topFeatures = [
    {
      title: "Real-Time Monitoring",
      description: "See devices, rooms, and operations update live as events happen.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M3 12L7 8L11 14L17 6L21 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "Scene & Automation Control",
      description: "Create rules and workflows for lighting, ambience, energy, and routines.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M4 6H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="6" r="2" fill="white" />
          <circle cx="16" cy="12" r="2" fill="white" />
          <circle cx="10" cy="18" r="2" fill="white" />
        </svg>
      ),
      bgColor: "bg-[#f97316]",
    },
    {
      title: "Alerts & Notifications",
      description: "Stay informed with instant updates on system events, requests, and issues.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 5C8 5 6 8 6 11V15L4 17V18H20V17L18 15V11C18 8 16 5 12 5Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18" stroke="white" strokeWidth="2" />
        </svg>
      ),
      bgColor: "bg-[#f97316]",
    },
    {
      title: "Centralised Management",
      description: "Manage devices, users, roles, and permissions from one place.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <path d="M4 9H20" stroke="white" strokeWidth="2" />
          <path d="M9 9V20" stroke="white" strokeWidth="2" />
          <rect x="11" y="12" width="6" height="2" rx="0.5" fill="white" />
          <rect x="11" y="16" width="4" height="2" rx="0.5" fill="white" />
        </svg>
      ),
      bgColor: "bg-purple-500",
    },
  ];

  const bottomFeatures = [
    {
      title: "Energy Analytics",
      description: "Visualise consumption patterns with clear graphs and insights.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M13 2L4 14H11L10 22L20 10H13L13 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      bgColor: "bg-blue-600",
    },
    {
      title: "Multi-Location Support",
      description: "Control multiple floors, buildings, or properties from one dashboard.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      ),
      bgColor: "bg-[#f97316]",
    },
    {
      title: "Advanced Filtering & Search",
      description: "Find devices, rooms, users, or actions instantly.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M3 12L7 8L11 14L17 6L21 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 10V16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21 10V16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      bgColor: "bg-[#f97316]",
    },
    {
      title: "Remote Diagnostics",
      description: "Monitor device health, detect issues, and troubleshoot remotely.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2" fill="none" />
          <path
            d="M8 12L11 15L16 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-[#f97316] text-white text-sm font-semibold px-6 py-2 rounded-full tracking-wider uppercase">
            Key Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
          Intelligent Control, Without Complexity
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-16">
          Everything you need to manage spaces efficiently - designed to stay simple.
        </p>

        {/* Top Row Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {topFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-5">
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12" />

        {/* Bottom Row Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-5">
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
