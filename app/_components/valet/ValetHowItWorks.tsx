const steps = [
  {
    title: "Vehicle Check-In",
    description:
      "Vehicles are logged instantly with digital tickets, timestamps, and assigned parking zones.",
  },
  {
    title: "Smart Task Assignment",
    description:
      "Requests are automatically routed to available valet staff based on proximity and workload.",
  },
  {
    title: "Live Tracking",
    description:
      "Managers track vehicle status, staff movement, and request progress in real time.",
  },
  {
    title: "Fast Retrieval",
    description:
      "Retrieval requests trigger instant alerts, ensuring vehicles are ready when guests arrive.",
  },
];

const ValetHowItWorks = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
          How it Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Top Line */}
              <div className="w-full h-0.5 bg-gray-600 mb-8" />

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <div className="mt-12">
          <button className="bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValetHowItWorks;
