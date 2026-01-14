import Image from "next/image";

const features = [
  {
    title: "Fits Any Space",
    description: "Works seamlessly in bedrooms, living rooms, hotel, corridors & workspaces.",
  },
  {
    title: "Reliable Performance",
    description: "Fast response switching with protection against flicker, lag, or false triggers.",
  },
  {
    title: "Automation-Ready",
    description: "Integrates with the Concira app for schedules, timers & remote switching.",
  },
  {
    title: "Simple Installation",
    description: "Fits standard Indian switch boxes with no extra wiring or structural changes.",
  },
];

const SmartFunctional = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/products/smart-functional.png"
                alt="Smart touch switch panel with blue LED indicators"
                className="w-full h-auto object-cover rounded-2xl"
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
              Smart & Functional
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-lg">
              Built for consistent performance, quick response, and long-lasting reliability - across residential and commercial environments.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFunctional;