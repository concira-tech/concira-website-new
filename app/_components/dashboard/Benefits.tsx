"use client";

const Benefits = () => {
  const topBenefits = [
    {
      title: "Benefits That Matter",
      description:
        "Designed to make managing large or small spaces effortless, efficient, and intelligent.",
    },
    {
      title: "Total Visibility",
      description: "See everything happening across your environment at a glance.",
    },
    {
      title: "Better Efficiency",
      description: "Optimise energy, reduce wastage, and improve operational flow.",
    },
  ];

  const bottomBenefits = [
    {
      title: "Faster Decision Making",
      description: "Instant insights help you understand what needs attention - quickly.",
    },
    {
      title: "Unified Control",
      description: "One interface for devices, users, requests, and analytics.",
    },
    {
      title: "Seamless Collaboration",
      description:
        "Enable teams to coordinate better with shared access, role-based controls, and real-time updates.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-[#f97316] text-white text-sm font-semibold px-8 py-2 rounded-full tracking-wider uppercase">
            Benefits
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
          Smarter Management for
          <br />
          Every Modern Space
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg text-center max-w-4xl mx-auto mb-16">
          Effortlessly control devices, optimise operations, and improve performance across all
          environments seamlessly.
        </p>

        {/* Top Row Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {topBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]"
            >
              <h3 className="text-white font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottomBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]"
            >
              <h3 className="text-white font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
