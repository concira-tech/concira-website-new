const benefits = [
  {
    title: "Faster Vehicle Retrieval",
    description:
      "Reduce waiting time with real-time task routing and smart prioritisation.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Zero Vehicle Confusion",
    description:
      "Eliminate misplaced cars, lost keys, and manual errors with full digital traceability.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Higher Staff Efficiency",
    description:
      "Ensure the right valet is assigned to the right task - every time.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Operational Transparency",
    description:
      "Managers get full visibility into operations without being physically present.",
    colSpan: "md:col-span-1",
  },
  {
    title: "Premium Guest Experience",
    description:
      "Smooth, predictable valet service that reflects the quality of your property.",
    colSpan: "md:col-span-1",
  },
];

const ValetBenefits = () => {
  return (
    <section className="bg-[#141414] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="inline-block px-6 py-2 bg-transparent border border-orange-500 text-orange-500 text-sm font-semibold rounded-full mb-6 tracking-wide">
            BENIFITS
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            A Better Experience for
            <br />
            Guests & Teams
          </h2>
        </div>

        {/* Benefits Cards */}
        <div className="space-y-4">
          {/* Top Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800/30"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.slice(2).map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800/30"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValetBenefits;
