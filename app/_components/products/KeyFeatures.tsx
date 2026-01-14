import { Hand, Network, ArrowDownUp, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "Capacitive Touch Control",
    description: "Smooth and responsive touch that feels natural every time.",
    color: "bg-sky-500",
  },
  {
    icon: Network,
    title: "Multi-Load Support",
    description: "Control multiple devices—bulbs, tube lights, LEDs, exhaust fans, or plug points",
    color: "bg-amber-500",
  },
  {
    icon: ArrowDownUp,
    title: "Two-Way Compatibility",
    description: "Works with existing mechanical two-way wiring",
    color: "bg-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Soft Backlight Indicator",
    description: "Low-glow indicator helps you locate the switch in the dark",
    color: "bg-purple-500",
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 text-sm font-semibold tracking-widest text-primary uppercase bg-primary/20 rounded-full mb-6">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            Smart Control, Made Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need for reliable, everyday switching.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Separator */}
              <div className="w-full h-px bg-border mb-6" />
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;