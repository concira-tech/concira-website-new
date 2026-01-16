const features = [
  {
    title: "Quick Setup",
    description: "Quick setup with minimal configuration",
  },
  {
    title: "Built-In Protection",
    description: "Concira’s Reliable infrared transmission.",
  },
  {
    title: "Smart Energy Intelligence",
    description: "Integrated into Concira’s unified control system.",
  },
];

const IRDeviceDeployment = () => {
  return (
    <section className="py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forbackground mb-16 lg:mb-20 tracking-tight max-w-4xl">
          Engineered for Seamless Use
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-muted-foreground pt-6">
              {/* <h3 className="text-xl font-normal text-background mb-4">
                {feature.title}
              </h3> */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IRDeviceDeployment;
