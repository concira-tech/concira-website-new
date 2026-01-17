const features = [
  {
    title: "Built to handle high vehicle volumes",
    description:
      "Designed for peak-hour traffic, busy entrances, and rapid vehicle turnover.",
  },
  {
    title: "Optimised for Faster Guest Flow",
    description:
      "Smart task allocation & real-time tracking, reduce wait times & delays.",
  },
  {
    title: "Accurate Vehicle Visibility",
    description:
      "Every vehicle is digitally logged & tracked to minimise errors & confusion.",
  },
];

const ValetFeatures = () => {
  return (
    <section className="bg-[#141414] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
          Designed to Perform Under Pressure
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800/50"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValetFeatures;
