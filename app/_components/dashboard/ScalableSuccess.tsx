const ScalableSuccess = () => {
  const stats = [
    {
      value: "1000+",
      label: "Anticipated Active Users",
    },
    {
      value: "₹10M+",
      label: "Optimised Operational Value",
    },
    {
      value: "20,000+",
      label: "Projected Hours Saved Yearly",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          Built for Scalable Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#252525] rounded-2xl p-8 border border-[#333333]"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalableSuccess;
