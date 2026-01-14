import Image from "next/image";

const TouchSwitch = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
                  Touch Switches
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Concira's Touch Switches combine premium design with
                  effortless functionality. Smooth, responsive, and built for
                  modern spaces, they make controlling lights and devices
                  simple, intuitive, and stylish.
                </p>
              </div>

              {/* Product Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden glow-accent">
                  <Image
                    src="/products/touchSwitches/touch-switch.png"
                    alt="Premium touch switch panel in a modern bedroom setting"
                    className="w-full h-auto object-cover rounded-2xl"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TouchSwitch;
