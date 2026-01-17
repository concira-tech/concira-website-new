const features = [
  "Role-based interfaces for valet staff & admins",
  "Shared data with central operations",
  "Real-time updates across devices",
];

const ValetPoweredBy = () => {
  return (
    <section className="bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white italic">
              Powered by Concira Hub
            </h2>
            {/* Hub Icon */}
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="3" />
                <circle cx="5" cy="6" r="2" />
                <circle cx="19" cy="6" r="2" />
                <circle cx="5" cy="18" r="2" />
                <circle cx="19" cy="18" r="2" />
                <path d="M9.5 10.5L6.5 7.5" />
                <path d="M14.5 10.5L17.5 7.5" />
                <path d="M9.5 13.5L6.5 16.5" />
                <path d="M14.5 13.5L17.5 16.5" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed">
            The Valet solution runs on Concira Hub-the same core platform that powers your wider operations. Valet staff, supervisors, and managers all use the same system, with interfaces tailored to their role-ensuring speed on the ground and visibility at the top.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValetPoweredBy;
