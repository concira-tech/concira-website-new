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
    <div className="px-4 py-20 bg-[#202020] ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white  mb-16">
          Designed to Work Where You Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="w-52 h-px bg-gray-600 rounded-full"></div>
              <h3 className="text-lg font-semibold ">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
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
