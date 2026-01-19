import Image from "next/image";

const EnergyMeter = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative flex items-center pt-20 sm:pt-24 md:pt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Product Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden glow-accent">
                  <Image
                    src="/products/energyMeter/energy-meter.png"
                    alt="Premium energyMeter in a modern bedroom setting"
                    className="w-full h-auto object-cover rounded-2xl"
                    width={600}
                    height={600}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
                  Energy Meter
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Concira’s Energy Meter gives you real-time visibility into
                  power usage - at the circuit, room, or system level. Track
                  consumption, identify inefficiencies, and make smarter energy
                  decisions without changing how your space looks or operates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnergyMeter;
