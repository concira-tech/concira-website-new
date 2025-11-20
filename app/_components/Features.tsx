const features = [
  {
    title: "Universal Compatibility",
    description:
      "Works across residential, commercial, and hospitality spaces.",
  },
  {
    title: "Modular & Scalable",
    description: "Start small, expand as your needs grow.",
  },
  {
    title: "Cloud-Connected",
    description: "Monitor, manage, and control devices remotely.",
  },
  {
    title: "Simple to Use",
    description:
      "Interfaces anyone can understand from homeowners to facility managers.",
  },
];

const Features = () => {
  return (
    <div id="about" className="bg-[#202020] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-14 md:mb-16">
          Designed to Work Where You Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="w-24 sm:w-32 lg:w-52 h-px bg-gray-600 rounded-full" />
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
